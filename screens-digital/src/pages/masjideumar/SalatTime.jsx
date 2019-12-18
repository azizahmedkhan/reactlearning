
import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import Announcement from './Announcement'
import Clock from './Clock'
import Header from './Header'
import HijriDate from './HijriDate'
import JumaPanel from './JumaPanel'
import MasjidName from './MasjidName'
import Timinganel from './TimingsPanel'
import Weather from './Weather'

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

  return (
    <div className="Field">
      <div className="FieldMain">
        MAsjid E Umar
      </div>
      <Header/>
      <Announcement />
      <Clock/>
      <JumaPanel />
      <Timinganel />

      <div className="FieldNav">
      {fields['FAJAR']}
      {fields['ZUHAR']}
      {fields['ASAR']}
      {fields['MAGHRIB']}
      {fields['ISHA']}
      {fields['JUMA']}
      {fields['ANNOUNCEMENT']}
    </div>
    </div>
  );
}

export default SalatTime;

