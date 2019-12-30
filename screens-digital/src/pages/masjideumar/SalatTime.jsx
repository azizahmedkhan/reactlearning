
import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import Announcement from './Announcement'
import Clock from './Clock'
import Header from './Header'
import JumaPanel from './JumaPanel'
import TimingsPanel from './TimingsPanel'
import image from "../../assets/img/masjideumar/light-cloud.jpg"
import masjideumarStyle from "../../assets/jss/masjideumarStyle.jsx";
import { mergeClasses } from '@material-ui/styles';


function SalatTime() {
  const [fields, setFields] = useState([]);
  useEffect(() => {
    return db
      .collection('screens')
      .doc('mu-salat-timings')
      .onSnapshot(snapshot => {
      const docs = [];
       setFields(snapshot.data());
      

      //  console.log("got>",fields['ANNOUNCEMENT']) 
      //  console.log('style is [',Object.getOwnPropertyNames(fields['ANNOUNCEMENT']))
      //  console.log('len', fields['ANNOUNCEMENT'].legth)
      //  console.log( '1',fields['ANNOUNCEMENT'][1])  
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
  console.log("ANNOUNCEMENT is[",announcement)
  console.log("JUMA is[",juma)



  return (
    <div className={classes.sectionContainer}  style={{
      backgroundImage: "url(" + image + ")" }}>
     
      <Header/>
      <div className={classes.weatherContentContainer}>
      <div className={classes.leftPanel}>
      <Announcement announcement={announcement} />
        </div>
        
      <div className={classes.locationDetail}>
        <Clock/>
        </div>
        <div className={classes.rightPanel}>
        
        <JumaPanel juma={juma} />
        
          </div>
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
            MyScreen.com 
        </div>
    </div>

  </div>

  );
}

export default SalatTime;

