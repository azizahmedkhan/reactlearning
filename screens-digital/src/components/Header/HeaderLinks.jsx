/*eslint-disable*/
import React, {useState} from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";



// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import profileImage from "assets/img/faces/avatar.jpg";


function HeaderLinks({ ...props }) {
  const { classes } = props;
  const [user, setUser] = useState(null)

  return (
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
        </Tooltip>
      </ListItem>
     
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem>
       <ListItem className={classes.listItem}>
       user ? 
       <Button
          href="/login-page"
          className={classes.registerNavLink}
          color="rose"
          round
        >
          Signed In
        </Button>
       :
       <Link to="/login-page" className={classes.dropdownLink}>
        <Button
          href="/login-page"
          className={classes.registerNavLink}
          color="rose"
          round
        >
          Sign In/Register
        </Button>
        
        </Link> 
      </ListItem>
      {/*<ListItem className={classes.listItem}>
        <Button
          justIcon
          round
          href="#pablo"
          className={classes.notificationNavLink}
          onClick={e => e.preventDefault()}
          color="rose"
        >
          <Email className={classes.icons} />
        </Button>
      </ListItem> */}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
