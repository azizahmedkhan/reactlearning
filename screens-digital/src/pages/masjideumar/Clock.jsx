import React, {useEffect, useRef} from 'react';
import useInterval from './useInterval'
function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}

function Clock (){
   
    let second = useRef();
    let minute = useRef();
    let hour = useRef();
    useInterval (() => {    
        var d = new Date()
        r(second.current, 6*d.getSeconds())    
        r(minute.current, 6*d.getMinutes())
        r(hour.current, 30*(d.getHours()%12) + d.getMinutes()/2)
    },1000)
    const num = {
        color: '#fff', fill:'white'
    }
    const face =  {
        strokeWidth: '2px', stroke: '#fff'
    }
    const hourStyle = {
        strokeWidth: '1px', fill: '#fff', stroke: '#555'
    }
    const minuteStyle = {
        strokeWidth: '1px', fill: '#fff', stroke: '#555'
    }   
    const secStyle= {strokeWidth: '1px', fill: '#aaa', stroke: '#f55' }
   

    return (
        <div >
        
        <div className="filler"></div>
       
        <svg 
        id="clock" viewBox="0 0 100 100">
          <circle style={face} cx="50" cy="50" r="45" fillOpacity="0.2"/>
          <g id="hands">
            <rect id="hour" ref ={hour} style={hourStyle} x="48.5" y="12.5"
                     width="5" height="40" rx="2.5" ry="2.55" 
                     />
            <rect id="min" ref ={minute} style={minuteStyle} x="48" y="12.5" width="3" height="40" rx="2" ry="2"/>
            <line id="sec" ref ={second} style={secStyle} x1="50" y1="50" x2="50" y2="16" />
          </g>
          <g id="numbers">
            <text style ={num} x="43" y="16" fill="white">12</text>
            <text style ={num} x="65" y="20" fill="white">1</text>
            <text style ={num} x="80" y="35" fill="white">2</text>
            <text style ={num} x="87" y="53" fill="white">3</text>
            <text style ={num} x="80" y="75" fill="white">4</text>
            <text style ={num} x="65" y="88" fill="white">5</text>
            <text style ={num} x="47" y="93" fill="white">6</text>
            <text style ={num} x="28" y="88" fill="white">7</text>
            <text style ={num} x="13" y="75" fill="white">8</text>
            <text style ={num} x="7" y="55" fill="white">9</text>
            <text style ={num} x="11" y="35" fill="white">10</text>
            <text style ={num} x="25" y="21" fill="white">11</text>
          </g>
          </svg>
      
        </div>
    )
}

// function useInterval(callback, delay) {
//     const savedCallback = useRef();
  
//     useEffect(() => {
//       savedCallback.current = callback;
//     });
  
//     useEffect(() => {
//       function tick() {
//         savedCallback.current();
//       }
  
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }, [delay]);
//   }
 export default Clock