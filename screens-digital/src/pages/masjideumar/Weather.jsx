import React, {useState, useEffect, useRef} from 'react';
function Weather (){
    let iframeStyle = {border:'none'}
    return (
        <div>     
        <iframe id="widget-iframe" width="280px" height="159px"
            src="https://services.metservice.com/weather-widget/widget?params=blue|small|landscape|days-2|modern&loc=auckland&type=urban" allowtransparency="true" style={iframeStyle}></iframe>
        </div>
    )
}
export default Weather