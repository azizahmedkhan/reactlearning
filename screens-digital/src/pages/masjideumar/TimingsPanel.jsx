 import React, {useState, useEffect} from 'react';

function TimingsPanel (data){  
    return (
        <div>
            
            <PrayerTime  prayer = 'FAJAR' time={data.prayerTimings['FAJAR']} style={data.style}/>
            <PrayerTime  prayer = 'ZUHAR' time={data.prayerTimings['ZUHAR']} style={data.style} />
            <PrayerTime  prayer = 'ASAR' time={data.prayerTimings['ASAR']} style={data.style} />
            <PrayerTime  prayer = 'MAGHRIB' time={data.prayerTimings['MAGHRIB']} style={data.style} />
            <PrayerTime  prayer = 'ISHA' time={data.prayerTimings['ISHA']} style={data.style} />
        </div>
    )
}

function PrayerTime(data) {
    return (
        <div className={data.style}>
            <h3>{data.prayer}</h3>
            <div style={{
                display: 'inline-block',
                verticalAlign: 'middle'
            }}><p><span>{data.time}</span></p>  </div>
        </div>
    )
}
export default TimingsPanel