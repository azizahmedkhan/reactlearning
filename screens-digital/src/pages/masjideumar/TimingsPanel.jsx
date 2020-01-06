 import React, {useState, useEffect} from 'react';

function TimingsPanel ({prayerTimings,style}){  
    return prayerTimings? (
        <div>
            <PrayerTime  prayer = 'FAJAR' time={prayerTimings['FAJAR']} style={style}/>
            <PrayerTime  prayer = 'ZUHAR' time={prayerTimings['ZUHAR']} style={style} />
            <PrayerTime  prayer = 'ASAR' time={prayerTimings['ASAR']} style={style} />
            <PrayerTime  prayer = 'MAGHRIB' time={prayerTimings['MAGHRIB']} style={style} />
            <PrayerTime  prayer = 'ISHA' time={prayerTimings['ISHA']} style={style} />
        </div>
    ) : (
        <div></div>
    )
}


function PrayerTime({prayer, time, style}) {
    return (
        <div className={style}>
            <h3>{prayer}</h3>
            <div style={{
                display: 'inline-block',
                verticalAlign: 'middle'
            }}><p><span>{time}</span></p>  </div>
        </div>
    )
}
export default TimingsPanel