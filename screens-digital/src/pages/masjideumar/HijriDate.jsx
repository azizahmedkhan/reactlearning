import React, {useState, useEffect, useRef} from 'react';

function HijriDate (){
    let hijriDate = useRef()
    useEffect(() => {
        let daysAfter = daysAfter || 0;
        var date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
    
        fetch( "https://api.aladhan.com/gToH?date="+(date.getDate()+daysAfter)+"-"+(date.getMonth()+1)+"-"+date.getFullYear())
            .then(response => {
                if (!response.ok) { console.error(response) }
                else {
                return response.json()
                }
            }) 
            .then( hijriJSON => {
                hijriJSON = hijriJSON.data.hijri
                hijriDate.current.innerHTML=
                 "<p>"+(Number(hijriJSON.day))+"-<em>"+hijriJSON['month']['en']+"</em>-"+hijriJSON['year']+"</p>"
                 +"<p>"+date.getDate()+"-"+monthNames[date.getMonth()]+"-"+date.getFullYear()+"</p>";
            })
            .catch(err => console.log(err))
      }, [])
    return (
        <div  ref={hijriDate}>
        </div>
    )
}
export default HijriDate