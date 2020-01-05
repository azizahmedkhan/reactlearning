import { makeStyles } from '@material-ui/core/styles';


const masjideumarStyle =  makeStyles({
    sectionContainer :{
        width: '100%!important',
        float:'left'
    },
    centerContainer : {
        float: 'left',
        clear: 'both',
        width: '100%',
        margin: '20px 0 0 10px'
    },
    infoPanel :{
        width: '25%',
        width: '25%',
        height: '100%',
        color: '#fff',
        position: 'relative',
        background: 'rgba(0,0,0,0.6)',
        border: '4px solid #fff',
        backgroundSize: '585px',
        fontSize: '55px',
        borderRadius: '10px',
        marginTop: '5%',
        textAlign:'left'
       
    },
    leftPanel : {
        float: 'left',  
        marginLeft: '2%',
    },
    rightPanel : {
        float: 'right',
        marginRight: '2%',
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
        marginTop: '25px',
        width: '95%'
    },
    prayerTime  :{
        width: '18%',
        height: '145px',
        padding: '10px',
        borderRadius: '10px',
        background: 'rgba(0,0,0,0.6)',
        border: '4px solid #fff',
        float: 'left',
        marginLeft: '2%',
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
    clockArea : {
        width: '45%',
        height: '100%',
        color: '#fff',
        position: 'relative',
        display: 'inline-block'
    },
    header: {
        width: '100%',
        margin:'0',
        height: '185px',
    },
    masjidName : {
        fontSize:'40px',
        height:'5px',
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
        backgroundSize:'448px',
        height:'100%',
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
    footer :{
        width: '100%',
        borderBottom: '3px solid #cf1818',
        bottom: '0px',
        fontFamily: 'black_sans',
        fontweight: '500',
        lineHeight: '27px',
        fontSize: '20px',
        color: '#fff'
    },
    footerLeft :{
        margin: '0 auto',
        height: '27px',
        margin: '-27px auto 0 auto',
        float: 'left',
        width: '60%',
        height: '14px',
        cursor: 'pointer',
        float: 'left',
        margin: '4px 2px 0 0',
    },
    footerRight : {
        padding: '0 0 0 5px',
        borderRadius: '5px 5px 0 0',
        display: 'block',
        marginLeft: '80%',
        width: '20%',
    },
    clearfix :{
        clear: 'both'

    }
});
  export default masjideumarStyle;