import React, {useState, useEffect} from 'react';

function Announcement ({announcement}){
    console.log('style is [', announcement)

    if (announcement) {
        return (
        <div>
            {announcement['Title']} <br/>
            {announcement['FirstLine']} <br/>
            {announcement['SecondLine']} <br/>
            {announcement['ThirdLine']} <br/>
            {announcement['FourthLine']} <br/>
            {announcement['FifthLine']}<br/>
            {announcement['SixthLine']} <br/>
        </div>
    )
        } else { return(<div>
            </div>)
        }
}
export default Announcement 