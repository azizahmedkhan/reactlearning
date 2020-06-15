    print("Creds"+tag_env)
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
  