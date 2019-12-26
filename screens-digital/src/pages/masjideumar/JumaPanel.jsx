import React, {useState, useEffect} from 'react';

function JumaPanel (data){
    console.log('style is [', data.announcement)
    return (
        <div>
            {data.announcement}
        </div>
    )
}

export default JumaPanel