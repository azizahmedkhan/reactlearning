
import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import InfoPanel from './InfoPanel'
import Clock from './Clock'
import Header from './Header'
import TimingsPanel from './TimingsPanel'
import image from "../../assets/img/masjideumar/light-cloud.jpg"
import masjideumarStyle from "../../assets/jss/masjideumarStyle.jsx";
import { mergeClasses } from '@material-ui/styles';
import classNames from "classnames";



function SalatTime() {
  const [fields, setFields] = useState([]);
  useEffect(() => {
    return db
      .collection('screens')
      .doc('mu-salat-timings')
      .onSnapshot(snapshot => {
      const docs = [];
       setFields(snapshot.data());
    })
  }, [])
  const classes = masjideumarStyle();
  const prayerTimings = {'FAJAR':fields['FAJAR'],
                         'ZUHAR':fields['ZUHAR'],
                         'ASAR':fields['ASAR'],
                         'MAGHRIB':fields['MAGHRIB'],
                         'ISHA':fields['ISHA']}
  const announcement = fields['ANNOUNCEMENT']
  const juma = fields['JUMA']
  const leftPanel = classNames({
    [classes.infoPanel]:true,
    [classes.leftPanel]:true
  });
  const rightPanel = classNames({
    [classes.infoPanel]:true,
    [classes.rightPanel]:true
  });
  return (
    <div className={classes.sectionContainer}  style={{
      backgroundImage: "url(" + image + ")" }}>
     
      <Header/>
      <div className={classes.masjidName}>Masjid e Umar</div>
      <div className={classes.centerContainer}>
      
        <div className={leftPanel}>
          <InfoPanel info={announcement} />
        </div>  
        <div className={classes.clockArea}>
          <Clock/>
        </div>
        <div className={rightPanel}>
            <InfoPanel info={juma} />
        </div>
      </div>
      <div>
        <div className={classes.jumaatTimings}>Jamaat Timings </div>
        <div className={classes.timingPanel}>
            <TimingsPanel prayerTimings = {prayerTimings} style= {classes.prayerTime}/> 
            </div>
            <br className={classes.clearfix}/>
        
      </div>
     
      <div className={classes.footer}>
        <div className = {classes.footerLeft}>
              <span>Mount Roskill Islamic Trust - http://www.masjideumar.co.nz/</span>
        </div>
        <div className={classes.footerRight}>
            Made by screens.digital
        </div>
    </div>

  </div>

  );
}

export default SalatTime;

