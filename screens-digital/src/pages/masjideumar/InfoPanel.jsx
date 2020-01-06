import React, {useState, useEffect} from 'react';
import { StylesContext } from '@material-ui/styles';

function InfoPanel ({info}){
    if (info) {
        return (
        <div>
            <div style = {{textAlign:'center'}}>{info['Title']} <br/></div>
            {info['FirstLine']} <br/>
            {info['SecondLine']} <br/>
            {info['ThirdLine']} <br/>
            {info['FourthLine']} <br/>
            {info['FifthLine']}<br/>
            {info['SixthLine']} <br/>
        </div>
    )
        } else { return(<div>
            </div>)
        }
}
export default InfoPanel