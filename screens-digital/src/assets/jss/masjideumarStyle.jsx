import { makeStyles } from '@material-ui/core/styles';


const masjideumarStyle =  makeStyles({
    footer :{
        width: '100%',
        borderBottom: '3px solid #cf1818',
        bottom: '0px',
        fontFamily: 'black_sans',
        fontweight: '500',
        lineHeight: '27px'
    },
    footerLeft :{
        margin: '0 auto',
        height: '27px',
        margin: '-27px auto 0 auto',
        float: 'left',
        width: '60%px',
        height: '14px',
        cursor: 'pointer',
        float: 'left',
        margin: '4px 2px 0 0',
    },
    footerRight : {
       
        fontSize: '12px',
        padding: '0 0 0 5px',
        borderRadius: '5px 5px 0 0',
        display: 'block',
        marginLeft: '90%'
    },
    clearfix :{
        clear: 'both'

    },
    sectionContainer :{
        width: '100%!important',
        float:'left'
    },
    weatherContentContainer : {
        float: 'left',
        clear: 'both',
        width: '2000px',
        margin: '20px 0 0 10px'
    },
    leftPanel : {
        width: '470px',
        height: '470px',
        marginLeft: '-31px',
        color: '#fff',
        position: 'relative',
        float: 'left',
        backgroundImage: 'url(clientlibs_less.min.f6c06e4….css)',
        backgroundSize: '585px',
        fontSize: '55px',
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.6)',
        border: '4px solid #fff',
    },
    rightPanel : {
        width: '400px',
        height: '470px',
        color: '#fff',
        position: 'relative',
        float: 'right',
        marginRight: '215px',
        fontSize: '55px',
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.6)',
        border: '4px solid #fff'
    },
    jumaatTimings : {
        float: 'left',
        clear: 'left',
        marginLeft: '25px',
        fontSize: '55px',
        color: '#fff',
        display: 'block'
        
    },
    timingPanel : {
        float: 'left',
        clear: 'left',
        marginTop: '25px'
    },
   

      prayerTime  :{
        
        width: '310px',
        height: '145px',
        padding: '10px',
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.6)',
        border: '4px solid #fff',
        float: 'left',
        marginLeft: '18px',
        marginTop: '0',
        textAlign: 'center',
       

        '& p': {
            float: 'left',
            margin: '4px 0 0 2px',
            fontSize: '50px',
            textShadow: '0 0 1px rgba(229,229,229,0.6)',
            fontFamily: 'black_sans',
            fontWeight: '400',
            color: '#fff',
           
        },
        '& h3': {
            margin:'-18px',
            color: '#fff',
            fontFamily: 'black_sans',
            fontWeight: '400',
            fontSize: '55px',
            textShadow: '0 0 1px rgba(229,229,229,0.6)',
            textAlign: 'center',
            textTransform: 'capitalize',
            marginBottom: '6px'
        }
       
    },
    locationDetail : {
        width: '730px',
        height: '470px',
        color: '#fff',
        position: 'relative',
        display: 'inline-block'
    },
    weatherHeader: {
        position:'relative',
        zIndex:'2',
        margin:'10px 0 0 30px',
        width: '100%',
        margin:'0'
    },
    masjidName : {
        fontSize:'40px',
        backgroundSize:'356px',
        height:'30px',
        width:'63%',
        marginLeft: '790px',
        color: '#fff',
         
    },
    hijriDate :{
        fontSize:'40px',
        height:'30px',
        width:'17%',
        position:'relative',
        float: 'right',
        marginRight: '215px',
        color: '#fff',
        p :{
            color: '#fff'
        }
    },
    headerImage: {
        backgroundSize:'356px',
        height:'146px',
        width:'25.6%',
        marginLeft: '380px',
        position:'relative',
        display: 'inline-block',
        
    },
    mattService:{
        width:'300px',
        marginLeft:'10px',
        color:'#fff',
        position:'relative',
        float:'left'
    },

    masjidName : {
        fontSize:'40px',
        backgroundSize:'356px',
        height:'146px',
        width:'63%',
        marginLeft: '750px'
    }

});
  export default masjideumarStyle;