import React, {useState, useEffect} from 'react';

function JumaPanel ({juma}){
    console.log('style is [', juma)
    if(juma) {
    return (
        <div>
        {juma['Title']} <br/>
        {juma['FirstLine']} <br/>
        {juma['SecondLine']} <br/>
        {juma['ThirdLine']} <br/>
        {juma['FourthLine']} <br/>
        {juma['FifthLine']}<br/>
        {juma['SixthLine']} <br/> 
        </div>
    )
    } else { return(<div>
        </div>)
    }
}

export default JumaPanel