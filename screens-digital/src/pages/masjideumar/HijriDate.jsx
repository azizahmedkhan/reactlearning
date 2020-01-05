import React, {useState, useEffect, useRef} from 'react';

function HijriDate ({style}){
    let hijriDate = useRef()
    const [hijriJSON,setHijriJSON] = useState(null)
    let date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    useEffect(() => {
        let daysAfter = daysAfter || 0;
        //var date = new Date();
       
    
        fetch( "https://api.aladhan.com/gToH?date="+(date.getDate()+daysAfter)+"-"+(date.getMonth()+1)+"-"+date.getFullYear())
            .then(response => {
                if (!response.ok) { console.error(response) }
                else {
                return response.json()
                }
            }) 
            .then( hijriJSON => {
                console.log("hijriJSON ",hijriJSON)
                hijriJSON = hijriJSON.data.hijri
                setHijriJSON(hijriJSON)
                console.log("hijriJSON 1",hijriJSON['month'])
                console.log("hijriJSON 1",hijriJSON['month']['en'])
                // hijriDate.current.innerHTML=
                //  "<p>"+(Number(hijriJSON.day))+"-<em>"+hijriJSON['month']['en']+"</em>-"+hijriJSON['year']+"</p>"
                //  +"<p>"+date.getDate()+"-"+monthNames[date.getMonth()]+"-"+date.getFullYear()+"</p>";
            })
            .catch(err => console.log(err))
      }, [])
      return hijriJSON? (
    
        <div  className={style}>
            <div>
            {(Number(hijriJSON.day)) +' '+ hijriJSON['month']['en'] +' '+ hijriJSON['year']}
            </div>
            <p>{date.getDate()}-{monthNames[date.getMonth()]}-{date.getFullYear()}</p>
        </div>
       ) : ( <div  className={style}></div>)
    
}
export default HijriDate