import React, {useState, useEffect} from 'react';
import { StylesContext } from '@material-ui/styles';

function InfoPanel ({info}){
    if (info) {
        return (
        <div>
            <span style = {{textAlign:'center'}}>{info['Title']} </span>
            {info['FirstLine']} <br/>
            {info['SecondLine']} <br/>
            {info['ThirdLine']} <br/>
            {info['FourthLine']} <br/>
            {info['FifthLine']}<br/>
        </div>
    )
        } else { return(<div>
            </div>)
        }
}
export default InfoPanel