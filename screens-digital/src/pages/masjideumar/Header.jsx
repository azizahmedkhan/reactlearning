import React, {useState, useEffect} from 'react';
import Weather from './Weather'
import HijriDate from './HijriDate'
import image from "../../assets/img/masjideumar/bismillah-910299_1280.png"
import masjideumarStyle from "../../assets/jss/masjideumarStyle.jsx";
import { makeStyles } from '@material-ui/core/styles';



function Header (){
    const classes = masjideumarStyle();
console.log(masjideumarStyle)
    return (  
        <div className={classes.header}>
            <div className={classes.mattService}><Weather /></div>
            <div className={classes.headerImage}
            style={{
            backgroundImage: "url(" + image + ")" }}></div>
            <HijriDate style={classes.hijriDate}/> 
            
        </div>
       
    )
}

export default Header;
