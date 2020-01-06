
import React, {useState, useEffect, useRef} from 'react';
import { db } from '../../firebase';
import InfoPanel from './InfoPanel'
import Clock from './Clock'
import Header from './Header'
import TimingsPanel from './TimingsPanel'
import dayImage from "../../assets/img/masjideumar/light-cloud.jpg"
import nightImage from "../../assets/img/masjideumar/clear-night.jpg"
import masjideumarStyle from "../../assets/jss/masjideumarStyle.jsx";
import { mergeClasses } from '@material-ui/styles';
import classNames from "classnames";
import useInterval from './useInterval'

function SalatTime() {
  const [fields, setFields] = useState([]);
  const[backgroundImage, setBackgroundImage] = useState()
  let screenBackground = useRef();
  console.log("SalatTime")
  useInterval (() => {    
    var d = new Date()
    var currentTime =  d.getHours()+d.getMinutes()/60;
    console.log("Salat interval")
    if(fields['MAGHRIB'] && fields['FAJAR'] ) {
      console.log("maghrib fajar")
      let fajarTimes = fields['FAJAR'].split(':')
      let fajarMinutes = parseFloat((parseInt(fajarTimes[1])+20)/60);
      console.log("fajarMinutes", fajarMinutes,' cur minutes', d.getMinutes()/60)
      let fajarTime = parseInt(fajarTimes[0])+fajarMinutes;

      let maghribTimes = fields['MAGHRIB'].split(':')
      let maghribMinutes = parseFloat((parseInt(maghribTimes[1])+10)/60);
      let maghribTime = parseInt(maghribTimes[0])+12+maghribMinutes;
      console.log("maghribTime", maghribTime,"fajar",fajarTime)

      if(currentTime > fajarTime) {
        setBackgroundImage(dayImage)
      }
      if(currentTime > maghribTime) {
        setBackgroundImage(nightImage)
      }

      // if(d.getHours() >= (maghrib_hm[0]+12) 
      // && d.getMinutes() > (maghrib_hm[1]+10)
      // && d.getHours() <= (fajar_hm[0]+12) 
      // && d.getMinutes() < (fajar_hm[1]+10)) {
      //   console.log("nightImage")
      //   //screenBackground.backgroundImage=nightImage
      //   setBackgroundImage(nightImage)
      // } else {
      //   console.log("dayImage")
      //   // screenBackground.backgroundImage=dayImage
      //   setBackgroundImage(dayImage)
      // }
    }
  },1000*60)
  
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
    <div className={classes.sectionContainer} ref={screenBackground}  style={{
      backgroundImage: "url(" + backgroundImage + ")" }}>
     
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