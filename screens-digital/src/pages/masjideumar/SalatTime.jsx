
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

function SalatTime() {
  const [fields, setFields] = useState([]);
  const[backgroundImage, setBackgroundImage] = useState(dayImage)
  let screenBackground = useRef();
  let delay= 1000*60*5
  console.log("SalatTime")
  useInterval (() => {    
    var d = new Date()
    var currentTime =  d.getHours()+d.getMinutes()/60;
    console.log("applyBackground", d)
    if(fields['MAGHRIB'] && fields['FAJAR'] ) {
      let fajarTimes = fields['FAJAR'].split(':')
      let fajarMinutes = parseFloat((parseInt(fajarTimes[1])+20)/60);
      let fajarTime = parseInt(fajarTimes[0])+fajarMinutes;

      let maghribTimes = fields['MAGHRIB'].split(':')
      let maghribMinutes = parseFloat((parseInt(maghribTimes[1])+10)/60);
      let maghribTime = parseInt(maghribTimes[0])+12+maghribMinutes;

      if(currentTime > fajarTime) {
        setBackgroundImage(dayImage)
      }
      if(currentTime > maghribTime) {
        setBackgroundImage(nightImage)
      }
    }
  },delay)
  
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
      <div className={classes.maName}>Masjid e Umar</div>
      <div className = {classes.clockAndAnnouncements} >
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
      <div className={classes.JTimings}>
        <div className={classes.jumaatTimings}>Jamaat Timings </div>
        <div className={classes.timingPanel}>
            <TimingsPanel prayerTimings = {prayerTimings} style= {classes.prayerTime}/> 
            </div>
            <br className={classes.clearfix}/>
      </div>
     
      <footer className={classes.footer}>
        <div className = {classes.footerLeft}>
              <span>Mount Roskill Islamic Trust - http://www.masjideumar.co.nz/</span>
        </div>
        <div className={classes.footerRight}>
            Made by screens.digital
        </div>
    </footer>

  </div>

  );
}
export default SalatTime;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
