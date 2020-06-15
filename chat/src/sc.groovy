def checkout(def directory, def branch, def reponame) {
  dir ("${directory}") {
    checkout([$class: 'GitSCM', branches: [[name: "${branch}"]], credentialsId: 'platform-ci',
      userRemoteConfigs: [[url: "git@bitbucket.org:motabilityoperations/${reponame}.git"]]])
  }
}


def get_non_running_ec2s(def tag_env) {
  instances_list_raw = ""
  retry_count = 0
  while (instances_list_raw == "" && retry_count < 5){
    instances_list_raw = sh(returnStdout: true,
            script: """aws ec2 describe-instances \
                --filters "Name=tag:product,Values=osmo" \
                "Name=tag:env,Values=${tag_env}" \
                --output json --region ${env.AWS_REGION}
            """
            )
    retry_count++
    if (instances_list_raw == ""){sleep(30)}
  }
  def slurper = new groovy.json.JsonSlurper()
  def instances_json = slurper.parseText(instances_list_raw)
  def not_running_ec2_ids = []
  for (instance in instances_json.Reservations.Instances) {
    if (instance.State.Name[0] == "stopped") {
      not_running_ec2_ids.add(instance.InstanceId[0])
    }
  }
  return not_running_ec2_ids
}

def ensure_instances_running(def tag_env, def credentials) {
  not_running_ec2_ids = this.get_non_running_ec2s(tag_env)
  if ( not_running_ec2_ids ) {
    echo "Some ec2 instances are not in running state."
    echo "Starting instances ${not_running_ec2_ids}..."
    sh "aws ec2 start-instances --instance-ids ${not_running_ec2_ids.join(" ")} --region ${env.AWS_REGION} "
    sleep 10
    for ( id in not_running_ec2_ids ) {
      def state = aws.get_ec2_state(id).trim()
      retry_count = 0

      while (state != "running" && retry_count < 5) {
        retry_count++
        echo "Instance ${id} is not running. Waiting (${retry_count}/5)"
        sleep(20)
        state = aws.get_ec2_state(id).trim()
      }

      if (state != "running") {
        currentBuild.description = "Instance ${id} did not start in time."
        currentBuild.result = 'ABORTED'
        error("EC2 instance did not start in time")
      }
    }
    echo "Waiting for the bastion host to be ready."
    def ip = this.bastion_ip(tag_env)
    sshagent (credentials: ["${credentials}"]){
      sh "ansible all -i ${ip}, -u ec2-user --become -m wait_for_connection -a 'timeout=300 sleep=5'"
    }
  }
  else {
    echo "All ec2 instances are running."
  }
}

def deploy(def tag_env, def credentials) {
  def ip = this.bastion_ip(tag_env)
  sshagent (credentials: ["${credentials}"]){
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/prerequisites.yml"
    """
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/deploy_cluster.yml"
    """
  }
}

def prepare_install(def tag_env, def credentials, def scaleup=false) {
  def limit = "all";

  if ( scaleup ) {
    limit = "new_nodes,new_masters"
  }

  println ("Preparing hosts for openshift installation");
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-builder.yml', //Fix the path
    tags: 'prepare',
    limit: "${limit}",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    become: true,
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

def bastion_ip(def tag_env) {
  ip = ""
  retry_count = 0
  while (ip == "" && retry_count < 5){
      ip = sh(returnStdout: true,
              script: """aws ec2 describe-instances \
                  --filters "Name=instance-state-name,Values=running" \
                  "Name=tag:product,Values=osmo" \
                  "Name=tag:env,Values=${tag_env}" \
                  "Name=tag:role,Values=openshift-bastion-node" \
                  --query "Reservations[*].Instances[*].{Ip:PrivateIpAddress}" \
                  --output text --region ${env.AWS_REGION} | tr -d '\n'
              """
              )
      echo "ip=[${ip}]"
      retry_count++
      if (ip == ""){sleep(30)}
  }
  return ip
}

def master_ip(def tag_env) {
  ip = ""
  retry_count = 0
  while (ip == "" && retry_count < 5){
      ip = sh(returnStdout: true,
              script: """aws ec2 describe-instances \
                  --filters "Name=instance-state-name,Values=running" \
                  "Name=tag:product,Values=osmo" \
                  "Name=tag:env,Values=${tag_env}" \
                  "Name=tag:role,Values=openshift-master" \
                  --query "Reservations[0].Instances[*].{Ip:PrivateIpAddress}" \
                  --output text --region ${env.AWS_REGION} | tr -d '\n'
              """
              )
      echo "ip=[${ip}]"
      retry_count++
      if (ip == ""){sleep(30)}
  }
  return ip
}

def credentials(def tag_env) {
  def credentials = "invalid"

  Yaml parser = new Yaml()

  config = parser.load( new FileReader('config.yaml').text )
  /*
  branching:
  - cp
  - cps
  - din
  - po
  - master
  - testsub
  */
  
  for(def  name:  config.branching) {
    if (tag_env.matches("${name}-*")) {
        credentials = "osmo-sandpit"
    }
  }

  if (credentials != "osmo-sandpit") {
    for (environment in ['sandpit','nonprod','prep','prod']) {
        if ( tag_env.matches("(?i)${environment}.*") == true){
            credentials = "osmo-${environment}"
        }
        }
  }

  echo credentials
  return credentials
}

static main( args ) {
    credentials("environment")
}

def credentials(def tag_env) {
  def configSluper = new groovy.json.JsonSlurper()
  def reader = new FileReader('config.json').text
  data = configSluper.parse(reader)  
  data.TESTS.each { println  it."$item" }

configSluper.pars
  def credentials = "invalid"
  boolean  branch_environment = tag_env.matches("cp-.*") ||
                                tag_env.matches("cps-.*") ||
                                tag_env.matches("din-.*") ||
                                tag_env.matches("po-.*") ||
                                tag_env.matches("master") ||
                                tag_env.matches("testsub.*")
  if (branch_environment == true) {
    credentials = "osmo-sandpit"
  } else {
    for (environment in ['sandpit','nonprod','prep','prod']) {
      if ( tag_env.matches("(?i)${environment}.*") == true){
        credentials = "osmo-${environment}"
      }
    }
  }

  echo "credentials ["+credentials+"]"
  return credentials
}

// my test

/////////////////////////////////////////////////////////////////
// Label nodes                                                 //
/////////////////////////////////////////////////////////////////
def node_colour(def tag_env) {
  output = ""
  retry_count = 0
  while (output == "" && retry_count < 5){
      output = sh(returnStdout: true,
              script: """aws ec2 describe-instances \
                  --filters "Name=instance-state-name,Values=running" \
                  "Name=tag:product,Values=osmo" \
                  "Name=tag:env,Values=${tag_env}" \
                  "Name=tag:role,Values=openshift-infra-node,openshift-worker-node" \
                  --query 'Reservations[].Instances[].[PrivateDnsName, Tags[?Key==`colour`].Value | [0] ]' \
                  --output text --region ${env.AWS_REGION}
              """
              )
      echo "output=[${output}]"
      retry_count++
      if (output == ""){sleep(30)}
  }
  return output
}

def refresh_openshift_colour_label(def tag_env, def credentials) {
  def ip = this.master_ip(tag_env)
  def output = this.node_colour(tag_env)
  lines = output.split("\n")
  lines.each {line ->
    words = line.split("\t")
    node_ip = words[0]
    node_colour = words[1]
    sshagent (credentials: ["${credentials}"]){
      sh """ssh -tt \"ec2-user@${ip}\" \
      "oc label node ${node_ip} colour=${node_colour} --overwrite "
      """
    }
  }
}

def remove_openshift_new_nodes_label(def tag_env, def credentials) {
  def ip = this.master_ip(tag_env)
  def output = this.node_colour(tag_env)
  lines = output.split("\n")
  lines.each {line ->
    words = line.split("\t")
    node_ip = words[0]
    node_colour = words[1]
    sshagent (credentials: ["${credentials}"]){
      sh """ssh -tt \"ec2-user@${ip}\" \
      "oc label node ${node_ip} new-node- "
      """
    }
  }
}

/////////////////////////////////////////////////////////////////
// Inventory Gen                                               //
/////////////////////////////////////////////////////////////////

def inventory_gen(def tag_env, def credentials, def scaleup=false) {
  // run inventory generation role
  println('Generate inventory from template');
  if ( scaleup ) {
    ansiblePlaybook(
      colorized: true,
      vaultCredentialsId: 'ansible_vault_password',
      playbook: 'osmo-inventory.yml',
      tags: "osmo",
      extraVars: [
          tag_env: "${tag_env}",
          inventory_gen_mode: 'scaleup'
      ]
    )
  } else {
    ansiblePlaybook(
      colorized: true,
      vaultCredentialsId: 'ansible_vault_password',
      playbook: 'osmo-inventory.yml',
      tags: "osmo",
      extraVars: [
          tag_env: "${tag_env}"
      ]
    )
  }

  this.copy_inventory_to_bastion(tag_env, credentials)
}

def copy_inventory_to_bastion(def tag_env, def credentials) {
  println('copy the generated inventory to bastion host')
  sshagent (credentials: ["${credentials}"]){
    sh "ansible -b -i ${tag_env}-inventory.cfg bastion --become -m copy -a 'src=${tag_env}-inventory.cfg dest=/etc/ansible/hosts'"
  }
}

def inventory_gen_post_upgrade(def tag_env, def credentials) {
  def ip = this.bastion_ip(tag_env)

  println('Generate inventory from template')
  ansiblePlaybook(
    colorized: true,
    credentialsId: "${credentials}",
    playbook: 'post-upgrade-cleanup-inventory-gen.yml',
    vaultCredentialsId: 'ansible_vault_password',
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )

  this.copy_inventory_to_bastion(tag_env, credentials)
}

def test(def tag_env, def credentials) {
  println "Running test steps"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-test-openshift.yml',
    limit: 'master0',
    tags: 'test_app, test_framework',
    skippedTags: 'vault_test',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

def revert_new_nodes(def tag_env, def credentials) {
  println "Changing nodes from node-config-new-<type> to node-config-<type>"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-change-new-groups.yml',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

def reconcile_groups(def tag_env, def credentials) {
  println "Running node group playbook to reconcile groups"
  def ip = this.bastion_ip(tag_env)
  sshagent (credentials: ["${credentials}"]){
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/openshift-master/openshift_node_group.yml -b"
    """
  }
}

def deploy_workers(def tag_env, def credentials) {
  def ip = this.bastion_ip(tag_env)
  sshagent (credentials: ["${credentials}"]){
      sh """ssh -tt \"ec2-user@${ip}\" \
      "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/openshift-node/scaleup.yml"
      """
  }
}

def unregister(def tag_env, def credentials, def inventory_file = "") {
  if (inventory_file == "") {
    inventory_file = "${tag_env}-inventory.cfg"
  }
  println ("Unsubscribing OpenShift hosts")
  ansiblePlaybook(
    inventory: "${inventory_file}",
    playbook: 'openshift-unregister.yml', //Fix the path
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    become: true,
    tags: 'redhat_subscription',
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

/////////////////////////////////////////////////////////////////
// Upgrade                                                     //
/////////////////////////////////////////////////////////////////
def migrate(def tag_env, def credentials) {
  println "Running migrate playbook"
  ansiblePlaybook(
    playbook: "migrate.yml",
    inventory: "${tag_env}-inventory.cfg",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}",
      aws_region: "eu-west-2"
    ]
  )
}

def package_upgrade_bastion_masters(def tag_env, def credentials) {
  println "Upgrade OS packages on bastion and master nodes playbook"
  ansiblePlaybook(
    playbook: "package-upgrade-bastion-masters.yml",
    inventory: "${tag_env}-inventory.cfg",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}",
      aws_region: "eu-west-2"
    ]
  )
}

def upgrade_master(def tag_env, def credentials, def ose_version) {
  println "Running Master Upgrade steps"

  println "Migrating through openshift playbooks"
  def ip = this.bastion_ip(tag_env)
  sshagent (credentials: ["${credentials}"]){
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/openshift-master/openshift_node_group.yml -b"
    """

    println "Upgrading OpenShift control_plane"
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/byo/openshift-cluster/upgrades/${ose_version}/upgrade_control_plane.yml -b"
    """
  }
}

def upgrade_logging_metrics(def tag_env, def credentials ) {
  println "Running logging and metrics upgrade steps"
  println "Removing old elasticsearch deployment"
  ansiblePlaybook(
    playbook: "remove_elasticsearch_deployment.yml",
    inventory: "${tag_env}-inventory.cfg",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}",
      aws_region: "eu-west-2"
    ]
  )
  println "redeploy_metrics_and_logging through openshift playbooks"
  def ip = this.bastion_ip(tag_env)
  sshagent (credentials: ["${credentials}"]){
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/openshift-logging/config.yml -b"
    """
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  /usr/share/ansible/openshift-ansible/playbooks/openshift-metrics/config.yml -b"
    """
  }
}


/////////////////////////////////////////////////////////////////
// PostInstall                                                 //
/////////////////////////////////////////////////////////////////

def post_install(def tag_env, def credentials) {
  println "Kicking off postInstall steps"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-builder.yml',
    tags: 'post-cluster',
    limit: 'master0',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

def apply_users(def tag_env, def credentials) {
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'openshift-users.yml',
    tags: 'all',
    limit: 'masters',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

def apply_node_labels(def tag_env, def credentials) {
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'apply-node-labels.yml',
    limit: 'masters',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

def mark_provisioned(def tag_env, def credentials) {
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-builder.yml',
    tags: 'mark-provisioned',
    limit: 'masters',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

/////////////////////////////////////////////////////////////////
// Post-Upgrade                                                //
/////////////////////////////////////////////////////////////////
def validate_coloured_node_status(def tag_env, def credentials) {
  ansiblePlaybook(
    colorized: true,
    credentialsId: credentials,
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'migration-validation.yml',
    vaultCredentialsId: 'ansible_vault_password',
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

def post_upgrade_cleanup_nodes(def tag_env, def credentials) {
  ansiblePlaybook(
    colorized: true,
    credentialsId: credentials,
    inventory: "${tag_env}-inventory-post-upgrade-cleanup.ini",
    playbook: 'post-upgrade-cleanup-nodes.yml',
    vaultCredentialsId: 'ansible_vault_password',
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

/////////////////////////////////////////////////////////////////
// Scaleup                                                     //
/////////////////////////////////////////////////////////////////

def pre_scaleup(def tag_env, def credentials, def num_worker_nodes, def num_infra_nodes, def num_aux_nodes) {
  println "Running pre-scaleup playbook"
  ansiblePlaybook(
    playbook: "pre-scaleup.yml",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}",
        aws_region: "eu-west-2",
        num_worker_nodes: "${num_worker_nodes}",
        num_infra_nodes: "${num_infra_nodes}",
        num_aux_nodes: "${num_aux_nodes}"
    ]
  )
}

def post_scaleup(def tag_env, def credentials) {
  println "Running post-scaleup playbook"
  ansiblePlaybook(
    playbook: "post-scaleup.yml",
    inventory: "${tag_env}-inventory.cfg",
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}",
        aws_region: "eu-west-2"
    ]
  )
}

def test_scaleup(def tag_env, def credentials) {
  println "Running test steps"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-test-openshift.yml',
    limit: 'master0',
    tags: 'test_scaleup',
    skippedTags: 'vault_test',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

def gluster_install(def tag_env, def credentials,def gluster_env) {
  // Generate the inventory to use for Gluster install
  ansiblePlaybook(
    colorized: true,
    vaultCredentialsId: 'ansible_vault_password',
    playbook: 'osmo-inventory.yml',
    tags: "osmo-gluster",
    extraVars: [
      tag_env: "${tag_env}",
      gluster_env: "${gluster_env}"
    ]
  )
  // Prepare the bastion and copy the inventory and Gluster key to it
  ansiblePlaybook(
    colorized: true,
    inventory: "${tag_env}-inventory-gluster.cfg",
    playbook: 'osmo-install-gluster.yml',
    credentialsId: "${credentials}",
    become: true,
    tags: "install",
    extraVars: [
      tag_env: "${tag_env}",
      gluster_env: "${gluster_env}"
    ]
  )
  def ip = this.bastion_ip(tag_env)
  println('Install Gluster using the OpenShift Ansible Playbook');
  sshagent (credentials: ["${credentials}"]){
    sh """ssh -tt \"ec2-user@${ip}\" \
    "ANSIBLE_FORCE_COLOR=true ANSIBLE_SSH_ARGS='-o ControlMaster=auto -o ControlPersist=no' /usr/bin/ansible-playbook  -i /etc/ansible/hosts-gluster /usr/share/ansible/openshift-ansible/playbooks/openshift-glusterfs/config.yml"
    """
  }
  // Mark Gluster provisioned
  ansiblePlaybook(
    inventory: "${tag_env}-inventory-gluster.cfg",
    playbook: 'osmo-builder.yml',
    tags: 'mark-provisioned',
    limit: 'masters',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}",
      gluster_env: "${gluster_env}",
      provisioned_component: "gluster"
    ]
  )
  // Call gluster post install tasks
  // This currently sets up a gluster storage class
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-postinstall-gluster.yml',
    limit: 'master0',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}",
    ]
  )

}

def test_gluster(def tag_env, def credentials) {
  println "Running Gluster test steps"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-test-gluster.yml',
    limit: 'master0',
    become: true,
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
      tag_env: "${tag_env}"
    ]
  )
}

def test_transit(def tag_env, def credentials) {
  println "Running Transit test steps"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'osmo-test-openshift.yml',
    limit: 'master0',
    tags: 'test_transit',
    skippedTags: 'vault_test',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}

/////////////////////////////////////////////////////////////////
// Destroy                                                     //
/////////////////////////////////////////////////////////////////

def openshift_remove_volumes(def tag_env, def credentials) {
  println "Cleaning EBS volumes"
  ansiblePlaybook(
    inventory: "${tag_env}-inventory.cfg",
    playbook: 'openshift-remove-volumes.yml',
    limit: 'master0',
    tags: 'openshift_remove_volumes',
    credentialsId: "${credentials}",
    vaultCredentialsId: 'ansible_vault_password',
    colorized: true,
    extraVars: [
        tag_env: "${tag_env}"
    ]
  )
}
