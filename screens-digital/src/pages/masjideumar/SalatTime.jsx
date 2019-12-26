
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
       console.log(fields)
    })
  }, [])
  const classes = masjideumarStyle();
  const prayerTimings = {'FAJAR':fields['FAJAR'],
                         'ZUHAR':fields['ZUHAR'],
                         'ASAR':fields['ASAR'],
                         'MAGHRIB':fields['MAGHRIB'],
                         'ISHA':fields['ISHA']}
                        
  return (
    <div className={classes.sectionContainer}  style={{
      backgroundImage: "url(" + image + ")" }}>>
     
      <Header/>
      <div className={classes.weatherContentContainer}>
      <div className={classes.leftPanel}>
      
      <JumaPanel announcement = {fields['ANNOUNCEMENT']} />
        </div>
      <div className={classes.locationDetail}>
        <Clock/>
        </div>
        <div className={classes.rightPanel}>
         
          <JumaPanel announcement = {fields['JUMA']} />
          
          </div>
        <div className={classes.jumaatTimings}>Jamaat Timings </div>
        <div className={classes.timingPanel}>
          <TimingsPanel prayerTimings = {prayerTimings} style= {classes.prayerTime}/> 
          </div>
        
      </div>

      <div className="FieldNav">
      
    </div>
    </div>
  );
}

export default SalatTime;

