import { makeStyles } from '@material-ui/core/styles';


const masjideumarStyle =  makeStyles({
    sectionContainer :{
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '13% 3% 43% 28.8% 3%',
        gridGap: '1em',
    },
    header :{
        /* Start on Row 1 */
        gridRow: '1',
        /* Start on the first column line and extend all the to the last column line */
        
      },
      maName :{
        gridRow: '2',
        fontSize:'40px',
        textAlign: 'center',
        color: '#fff',
      },
      clockAndAnnouncements :{
        gridRow: '3',
       
      },
      JTimings :{
        gridRow: '4',
        marginTop: '1em',
      },
      
      footer :{
        gridRow: '4',        
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
        marginTop: '2%',
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
            margin: '-20px 0 0 2px',
            fontSize: '65px',
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
            marginBottom: '0px'
            }
    },
    clockArea : {
        width: '30%',
        height: '100%',
        color: '#fff',
        position: 'relative',
        display: 'inline-block',
        marginLeft: '7%',
        marginTop: '4%',
    },
    
    masjidName : {
        fontSize:'40px',
        height:'5px',
        width:'63%',
        marginLeft: '790px',
        color: '#fff',
    },
    hijriDate :{
        
        height:'100%',
        width:'22%',
        position:'relative',
        float: 'right',
        marginRight: '215px',
        color: '#fff',
        color: '#fff',
        fontSize:'40px',
        '& p' :{
            color: '#fff',
            fontSize:'40px',
            
        }
    },
    headerImage: {
        backgroundSize:'26em',
        height:'100%',
        width:'22%',
        marginLeft: '27em',
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