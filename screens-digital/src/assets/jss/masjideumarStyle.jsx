import { makeStyles } from '@material-ui/core/styles';


const masjideumarStyle =  makeStyles({
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
  
// .containerBody{margin:0 auto}
// .bannerAdvert{width:970px;height:250px;margin:20px auto 0 auto}
// .containerContent{margin-top:10px!important;position:relative}
// .containerContent .partiallySupported{margin-top:10px;z-index:10;background:#1f1f1f;display:block;position:relative;height:50px}
// .containerContent .partiallySupported .breaking{float:left}
// .containerContent .partiallySupported .breaking h1{background:#cf1818;color:#fff;float:left;padding:0 10px;height:50px;line-height:50px;text-transform:uppercase;font-family:black_sans;font-weight:500;font-size:18px}
// .containerContent .partiallySupported .breaking p{color:#fff;overflow:hidden;margin:0;padding:3px 45px 0 10px;font-family:black_sans;font-weight:500;font-size:18px;text-shadow:0 0 1px rgba(229,229,229,0.2)}
// .containerContent .partiallySupported .closePopup{position:absolute;top:0;right:0;background:#000;height:50px;width:45px;cursor:pointer}
// .containerContent .partiallySupported .closePopup .close{float:left;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -206px -351px;width:14px;height:14px;margin:18px 0 0 16px}
// .containerContent .partiallySupported.totalFailure{position:fixed;z-index:10001;left:20%;right:20%}
// .containerContent .sectionContainer{background-image:url('./clear-night.jpg')}
// .containerContent .sectionContainer .colContainer{float:left;width:100%}
// .containerContent .sectionContainer .colContainer.searchPage{padding-bottom:40px}
// .containerContent .sectionContainer .colContainer .colLeft{float:left;padding-bottom:160px}
// .containerContent .sectionContainer .colContainer .colLeft .index-banner{width:100%;padding:10px;float:left;box-sizing:border-box}
// .containerContent .sectionContainer .colContainer .colLeft .index-banner img{width:100%}
// .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader{background:#cf1818 url('clientlibs_less/content/images/structure/1nn-banner-background.png?version=763817055') no-repeat;margin:10px;float:left}
// .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader h1{position:relative}
// .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader h1.colSectionHeaderImage{height:100%}
// .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader h1:not(.colSectionHeaderImage){margin-left:20px;color:#fff;font-size:18px;text-transform:uppercase;line-height:42px;height:42px}
// .containerContent .sectionContainer .colContainer .colLeft .featureComponents{float:left;width:100%}
// @media all and (max-width:736px){.containerContent .partiallySupported .breaking h1{width:100%}
// .containerContent .partiallySupported .breaking p{float:left;background:#1f1f1f}
// .containerContent .partiallySupported.totalFailure{position:fixed;z-index:10001;left:0;right:0}
// .containerContent .sectionContainer .colContainer .colLeft .index-banner{float:none;padding:10px 0}
// }
// .containerFoot{z-index:20}
// .containerFoot .footer{margin:0 auto}
// .containerFoot.closed{border-bottom:3px solid #cf1818; bottom: 0px;}
// .diagonalGradientOrangeRed{background:-moz-linear-gradient(-50deg,rgba(227,160,0,0.8) 0,rgba(205,23,23,0.8) 55%);background:-webkit-gradient(linear,left top,right bottom,color-stop(0,rgba(227,160,0,0.8)),color-stop(55%,rgba(205,23,23,0.8)));background:-webkit-linear-gradient(-50deg,rgba(227,160,0,0.8) 0,rgba(205,23,23,0.8) 55%);background:-o-linear-gradient(-50deg,rgba(227,160,0,0.8) 0,rgba(205,23,23,0.8) 55%);background:-ms-linear-gradient(-50deg,rgba(227,160,0,0.8) 0,rgba(205,23,23,0.8) 55%);background:linear-gradient(140deg,rgba(227,160,0,0.8) 0,rgba(205,23,23,0.8) 55%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cce3a000',endColorstr='#cccd1717')}
// .diagonalGradientOrangeRedDark{background:-moz-linear-gradient(-50deg,rgba(176,124,0,0.8) 0,rgba(159,18,18,0.8) 55%);background:-webkit-gradient(linear,left top,right bottom,color-stop(0,rgba(176,124,0,0.8)),color-stop(55%,rgba(159,18,18,0.8)));background:-webkit-linear-gradient(-50deg,rgba(176,124,0,0.8) 0,rgba(159,18,18,0.8) 55%);background:-o-linear-gradient(-50deg,rgba(176,124,0,0.8) 0,rgba(159,18,18,0.8) 55%);background:-ms-linear-gradient(-50deg,rgba(176,124,0,0.8) 0,rgba(159,18,18,0.8) 55%);background:linear-gradient(140deg,rgba(176,124,0,0.8) 0,rgba(159,18,18,0.8) 55%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ccb07c00',endColorstr='#cc9f1212')}
// a{text-decoration:none;color:#4d4d4d}
// h1,h2,h3,h4{margin:0;font-family:black_sans;font-weight:500;color:#000;font-weight:normal}
// p{color:#4d4d4d;margin:6px 0 0 0}
// p a{color:#cf1818;text-decoration:none;display:normal}
// p a:hover{text-decoration:underline}
// img{display:block;margin:0;border:0;padding:0;text-decoration:none}
// .relative{position:relative}
// .absolute{position:absolute}
// .fixed{position:fixed}
// .uppercase{text-transform:uppercase}
// .clearfix{clear:both}
// .centreBlock{text-align:center}
// .centreBlock:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// .centred{display:inline-block;vertical-align:middle}
// .loadingMoreContent{height:60px;padding:10px 10px 30px 10px;bottom:0;left:0;text-align:center;text-transform:uppercase}
// .loadingMoreContent.tile{width:100%;padding:10px 0;cursor:pointer;cursor:hand}
// @media all and (min-width:1026px){.loadingMoreContent.tile{width:880px}
// }
// @media all and (min-width:737px){.loadingMoreContent.tile{position:absolute;height:110px;padding:10px 10px 10px 10px;bottom:0;left:0;text-align:center;text-transform:uppercase}
// }
// .loadingMoreContent .spinner{height:60px;width:100%;background:#fff;box-shadow:1px 1px 3px 0 rgba(0,0,0,0.1);text-align:center}
// .loadingMoreContent .spinner:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// .loadingMoreContent .spinner .icon{background:transparent url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -280px -398px;width:37px;height:37px;display:inline-block;vertical-align:middle}
// .loadingMoreContent .spinner .icon.spinIt{-webkit-animation:loadingSpin 3s infinite linear;-moz-animation:loadingSpin 3s infinite linear;-o-animation:loadingSpin 3s infinite linear;animation:loadingSpin 3s infinite linear}
// .loadingMoreContent .noContent{display:none}
// .loadingMoreContent .noContent .spinner .icon{background-position:-291px -352px;width:15px;height:28px}
// .loadingMoreContent .noContent p{color:#cf1818}
// .loadingMoreContent .noContent a{font-family:black_sans;font-weight:500;color:#cf1818;cursor:pointer}
// .loadingMoreContent .noContent:hover a{text-decoration:underline}
// .loadingMoreContent .error{display:none}
// .loadingMoreContent .error p{color:#cf1818}
// .loadingMoreContent .error a{font-family:black_sans;font-weight:500;color:#cf1818;cursor:pointer}
// @media all and (min-width:737px) and (max-width:1279px){.containerHead{width:100%}
// .containerHead .globalNavUpperBar{width:100%}
// .containerHead .globalNavUpperBar ul.globalNav{display:block}
// .containerBody{width:auto}
// .containerBody .containerContent{width:100%;margin:0 auto}
// .containerBody .containerContent .breakingContainer{width:920px;margin-left:60px;margin-bottom:10px}
// .containerBody .containerContent .breakingContainer .breaking p{font-size:14px}
// .containerBody .containerContent .partiallySupported{width:920px;margin-left:60px;margin-bottom:10px}
// .containerBody .containerContent .partiallySupported .breaking p{font-size:14px}
// .containerBody .containerContent .sectionContainer .colContainer{position:relative}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft{width:600px!important}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader,.containerBody .containerContent .sectionContainer .colContainer .colLeft .featureComponents{width:580px}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader .colSectionHeaderImage img,.containerBody .containerContent .sectionContainer .colContainer .colLeft .featureComponents .colSectionHeaderImage img{width:100%}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .searchResult,.containerBody .containerContent .sectionContainer .colContainer .colLeft .resultDescription{width:580px}
// .containerBody .containerContent .sectionContainer .colContainer .loadingMoreContent.tile{width:580px}
// }
// @media all and (min-width:2000px){.globalNavUpperBar .globalNav{width:2000px!important}
// .containerHead .header .fixedItem{width:2000px}
// .containerHead .upperBar .globalNav{width:2000px}
// .containerBody .containerContent{width:2000px;margin:0 auto}
// .containerBody .containerContent .breakingContainer{width:1190px;margin-left:75px;margin-bottom:12px}
// .containerBody .containerContent .partiallySupported{width:1190px;margin-left:75px}

// .containerBody .containerContent .sectionContainer .colContainer{position:relative}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft{width:900px}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader,.containerBody .containerContent .sectionContainer .colContainer .colLeft .featureComponents{width:880px}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .searchResult,.containerBody .containerContent .sectionContainer .colContainer .colLeft .resultDescription{width:880px}
// .containerFoot .footer{width:2000px}
// .containerFoot .footer .footerClosed{padding:0 15px}
// }
// @media all and (min-width:737px) and (max-width:990px){.oneNewsLiveContainer{margin-right:60px!important}
// .containerBody .containerContent .sectionContainer .colRight{display:none}
// .containerHead .header .upperBar{width:100%}
// .containerBody .containerContent .breakingContainer{width:580px;float:none;margin-left:auto;margin:0 auto;height:auto;position:relative}
// .containerBody .containerContent .breakingContainer .closePopup{position:absolute;top:0;right:0}
// .containerBody .containerContent .breakingContainer .breakingShare{position:absolute;right:45px}
// .containerBody .containerContent .breakingContainer.breakNews{*zoom:1}
// .containerBody .containerContent .breakingContainer.breakNews:before,.containerBody .containerContent .breakingContainer.breakNews:after{content:' ';display:table}
// .containerBody .containerContent .breakingContainer.breakNews:after{clear:both}
// .containerBody .containerContent .breakingContainer.breakNews a .breaking{float:left;clear:left}
// .containerBody .containerContent .breakingContainer.breakNews a .breaking p{float:left;clear:left;line-height:22px;margin:10px}
// .containerBody .containerContent .breakingContainer.breakNews a .breaking p.breakHeader{margin:0;line-height:45px}
// .containerBody .containerContent .sectionContainer{width:600px!important;float:none;margin:0 auto}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft{width:100%}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft .colSectionHeader,.containerBody .containerContent .sectionContainer .colContainer .colLeft .featureComponents{float:left}
// .containerBody .containerContent .sectionContainer .colContainer .colLeft.narrow .tile,.containerBody .containerContent .sectionContainer .colContainer .colLeft.narrow .advert{position:static!important;float:left}
// }
// @media all and (min-width:737px) and (max-width:750px){.oneNewsLiveContainer{margin-right:10px!important}
// .sectionContainer{float:left!important;margin:0 0 0 0!important}
// .containerBody .containerContent .vertBanner .vertLogo{margin-left:10px;margin:0 0 0 10px}
// }
// @media all and (min-width:1026px) and (max-width:1279px){
// .containerHead .globalNavUpperBar .globalNav{width:1020px}
// .containerBody .containerContent{width:1020px;margin:0 auto}
// }
// body.device-mobile .colSectionHeader{display:none}
// body.device-mobile .containerBody .containerContent .breakingContainer{width:100%;margin-left:0;margin-bottom:5px}
// .headerLogin{font-size:14px;float:right;margin-right:20px;line-height:30px;color:#c5ccd0;padding-right:15px;cursor:pointer;position:relative}
// .headerLogin:after{content:'';border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent;position:absolute;top:12px;right:0}
// .headerLoginMenu{width:120px;position:absolute;top:-200px;padding:0;line-height:normal;z-index:1999;box-shadow:-1px -1px 0 0 #c5ccd0;background:#1f1f1f;-webkit-transition:z-index 1s step-start,top 1s;-moz-transition:z-index 1s step-start,top 1s;-ms-transition:z-index 1s step-start,top 1s;-o-transition:z-index 1s step-start,top 1s;transition:z-index 1s step-start,top 1s}
// .headerLoginMenu:before{content:'';background:#1f1f1f;width:15px;height:15px;position:absolute;top:-7px;left:50px;box-shadow:-1px -1px 0 0 #c5ccd0;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}
// .headerLoginMenu.active{top:34px;z-index:2001;-webkit-transition:z-index 1s step-end,top 1s;-moz-transition:z-index 1s step-end,top 1s;-ms-transition:z-index 1s step-end,top 1s;-o-transition:z-index 1s step-end,top 1s;transition:z-index 1s step-end,top 1s}
// .headerLoginMenu a{padding:12px;color:#fff;display:block;text-shadow:0 0 1px rgba(229,229,229,0.6);font-family:black_sans;font-weight:400;font-size:16px;cursor:pointer}
// .searchContainer{float:right;height:60px;margin-right:15px;text-align:center;position:relative;z-index:16}
// .searchContainer:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// .searchContainer:before{margin:0}
// .searchContainer .searchIcon{width:60px;height:60px;position:absolute;right:0;top:0;z-index:2;cursor:pointer}
// .searchContainer .searchIcon .icon{float:left;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -7px -446px;width:20px;height:20px;margin:20px 0 0 20px}
// .searchContainer .searchIcon.active{background:#cf1818}
// .searchContainer .searchIcon.active .icon{background-position:-32px -445px}
// .searchContainer .searchBox{position:relative;z-index:2}
// .searchContainer .searchBox .searchField{padding:10px 40px 10px 10px;margin:0;border-radius:4px;border:1px solid #c5ccd0;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.1);width:245px;z-index:1}
// .searchContainer .searchBox .searchField:focus{outline:none!important;border-radius:4px;box-shadow:2px 2px 4px 0 rgba(151,50,50,0.2);border:1px solid #cf1818}
// .searchContainer .searchBox .searchField::-webkit-input-placeholder{color:#999}
// .searchContainer .searchBox .searchField:-moz-placeholder{color:#999;opacity:1}
// .searchContainer .searchBox .searchField::-moz-placeholder{color:#999;opacity:1}
// .searchContainer .searchBox .searchField:-ms-input-placeholder{color:#999}
// .searchContainer .searchBox.hidden{overflow:hidden;z-index:1}
// .searchContainer .searchBox.hidden .searchField{cursor:default;pointer-events:none}
// .searchContainer .twitter-typeahead{display:block!important}
// .searchContainer .tt-dropdown-menu{z-index:905;background:white;background:rgba(255,255,255,0.92);width:100%;border-radius:0,0,4px,4px;box-shadow:0 1px 4px 0 rgba(0,0,0,0.2)}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags{margin:10px 0 0 0;padding:0}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion{border-bottom:1px solid #d9d9d9;padding:0;color:#4d4d4d;font-size:14px;cursor:pointer;padding:15px;margin:0;font-family:black_sans;font-weight:400;line-height:1.2}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion:last-child{border-bottom:0 none}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion p{text-align:left}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion p strong{color:#000;font-weight:normal;font-family:black_sans;font-weight:500}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion.tt-cursor{background:#f4f4f4}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion.tt-cursor p{color:#cf1818}
// .searchContainer .tt-dropdown-menu .tt-dataset-tags .tt-suggestions .tt-suggestion.tt-cursor p strong{color:#cf1818}
// body.device-mobile .loadingMoreContent.tile{width:100%!important;margin:0 0 0 0!important;bottom:0;padding:0;float:left}
// body.device-mobile .containerBody{background:#f4f4f4;width:100%}
// body.device-mobile .containerBody .containerContent{margin-top:0!important}
// @media all and (max-width:1279px){body.device-mobile .containerBody .containerContent .vertBanner{display:none}
// body.device-mobile .containerBody .containerContent .sectionContainer{width:100%;max-width:100%;padding:0;margin:0}
// }
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft,body.device-mobile .colLeft{width:100%}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabs,body.device-mobile .colLeft .colLeftTabs{background:#1f1f1f;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:3px solid #cf1818;width:100%;padding:6px 6px 0 6px;float:left;margin-bottom:0}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabs .tabHeader,body.device-mobile .colLeft .colLeftTabs .tabHeader{font-family:black_sans;font-weight:500;position:relative;width:33%;text-align:center;text-transform:uppercase;color:#fff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px;float:left;line-height:50px;height:50px;cursor:pointer;box-shadow:inset 1px 0 0 0 rgba(255,255,255,0.2)}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabs .tabHeader:first-child,body.device-mobile .colLeft .colLeftTabs .tabHeader:first-child{box-shadow:none}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabs .tabHeader.active:after,body.device-mobile .colLeft .colLeftTabs .tabHeader.active:after{content:'';border-bottom:10px solid #cf1818;border-right:7px solid transparent;border-left:7px solid transparent;position:absolute;bottom:0;left:0;right:0;width:0;margin:0 auto}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .page,body.device-mobile .colLeft .page{display:block;width:100%}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabContainer,body.device-mobile .colLeft .colLeftTabContainer{float:left;width:100%;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;display:none}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabContainer.active,body.device-mobile .colLeft .colLeftTabContainer.active{display:block}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage,body.device-mobile .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage{position:relative}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage img,body.device-mobile .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage img{width:100%;max-width:100%}
// body.device-mobile .containerBody .containerContent .sectionContainer .colContainer .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage .tileOverlayNumber,body.device-mobile .colLeft .colLeftTabContainer .tile .tileContentHolder .tileImage .tileOverlayNumber{position:absolute;bottom:-15px;right:0;z-index:2;font-family:black_sans;font-weight:700;font-size:96px;min-width:78px;text-align:center;color:#fff;line-height:100px;text-shadow:0 0 1px #fff}
// body.device-mobile.storyPageBody .containerBody{background:#fff!important}
// .burger a.menuIcon{background:#fff url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat 18px -480px;cursor:pointer;cursor:hand;display:block;width:100%;height:100%}
// .burgerMenu{position:absolute;width:300px;background-color:#1f1f1f;border:1px solid #404242;border-top:0;border-left:none;z-index:-10;top:-1000px}
// .burgerMenu ul{list-style:none;margin:0;padding:0}
// .burgerMenu a{font-family:black_sans;font-weight:400;font-size:16px;color:#fff}
// .burgerMenu .menuLeft{width:210px;float:left}
// .burgerMenu .menuLeft .topMenu{border-right:1px solid #404242}
// .burgerMenu .menuLeft .topMenu .topMenuItem{width:189px}
// .burgerMenu .menuLeft .topMenu .topMenuItem>a{padding-left:30px;font-size:18px;display:block;font-family:black_sans;font-weight:500;text-transform:uppercase;position:relative}
// @media all and (max-width:736px){.burgerMenu .menuLeft .topMenu .topMenuItem>a{padding:12px 0 12px 12px}
// }
// .burgerMenu .menuLeft .topMenu .topMenuItem>a:hover{color:#cf1818}
// .burgerMenu .menuLeft .topMenu .topMenuItem>a:hover:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:26px;top:-8px;left:-10px;top:14px;left:14px}
// .burgerMenu .menuLeft .topMenu .topMenuItem>a:hover:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:26px;top:-8px;left:-10px;top:14px;left:14px}
// .burgerMenu .menuLeft .topMenu .subMenu{border-top:1px solid #404242}
// .burgerMenu .menuLeft .topMenu .subMenu li{padding:12px 0 12px 24px;line-height:normal}
// .burgerMenu .menuLeft .topMenu .subMenu li a{position:relative;display:block;padding-left:6px;text-transform:capitalize}
// .burgerMenu .menuLeft .topMenu .subMenu li a:hover{color:#cf1818}
// .burgerMenu .menuLeft .topMenu .subMenu li a:hover:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:26px;top:-8px;left:-10px;top:-6px}
// .burgerMenu .menuLeft .topMenu .subMenu li a:hover:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:26px;top:-8px;left:-10px;top:-6px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover{position:relative;width:275px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a{position:relative;width:170px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a:before{display:none}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a:after{content:''}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a.fauxTop{font-size:18px;line-height:normal;font-family:black_sans;text-transform:uppercase;position:relative}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a.more:after{border-top:5px solid #fff;border-right:5px solid transparent;border-left:5px solid transparent;position:absolute;top:8px;left:50px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a:hover{color:#fff}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a:hover:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:26px;top:-8px;left:-10px;top:-6px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover>a:hover:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:26px;top:-8px;left:-10px;top:-6px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer{overflow:hidden;width:0;-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s;transition:all .4s;position:absolute;left:300px;bottom:0}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems{position:relative;border-left:10px solid transparent;padding:0}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems:before{content:'';border-top:8px solid transparent;border-right:8px solid #1f1f1f;border-bottom:8px solid transparent;position:absolute;bottom:12px;left:-8px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems li{padding:9px 18px;background:#1f1f1f}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems li:first-child{padding-top:18px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems li:last-child{padding-bottom:18px}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover .hideContainer .subMenuRolloverItems li a{border:0;width:100%;height:100%}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover:hover,.burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover.active{background:#cf1818}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover:hover>a,.burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover.active>a{color:#fff}
// .burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover:hover .hideContainer,.burgerMenu .menuLeft .topMenu .subMenu li.subMenuRollover.active .hideContainer{width:155px!important;-webkit-transition:all 0s;-moz-transition:all 0s;-ms-transition:all 0s;-o-transition:all 0s;transition:all 0s}
// .burgerMenu .menuRight{width:90px;position:absolute;top:0;left:210px}
// .burgerMenu .menuRight .menuIcons>li{position:relative}
// .burgerMenu .menuRight .menuIcons>li>a{height:90px;width:90px;display:block;border-bottom:1px solid #404242;position:relative}
// .burgerMenu .menuRight .menuIcons>li>a .menuIconCentre{position:relative;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center}
// .burgerMenu .menuRight .menuIcons>li>a p{border:none!important;float:none;margin:0;line-height:normal;text-transform:uppercase;color:#fff;font-family:black_sans;font-weight:500;font-size:11px;padding:10px 5px 0 5px;height:auto}
// .burgerMenu .menuRight .menuIcons>li>a p:hover{background:transparent}
// .burgerMenu .menuRight .menuIcons>li>a:hover{background-color:#cf1818;border-bottom:1px solid #cf1818}
// .burgerMenu .menuRight .menuIcons>li .hideContainer{overflow:hidden;width:0;-webkit-transition:all .3s;-moz-transition:all .3s;-ms-transition:all .3s;-o-transition:all .3s;transition:all .3s;position:absolute;left:90px;top:0}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu{float:right;position:relative;padding:0;border-left:10px solid transparent}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu:before{content:'';border-top:8px solid transparent;border-right:8px solid #1f1f1f;border-bottom:8px solid transparent;position:absolute;top:40px;left:-6px}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu li{padding:9px 18px;background:#1f1f1f}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu li:first-child{padding-top:18px}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu li:last-child{padding-bottom:18px}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu li a{border:0;width:100%;height:100%;display:block;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-ms-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}
// .burgerMenu .menuRight .menuIcons>li .hideContainer .subMenu li:hover a{opacity:.6}
// .burgerMenu .menuRight .menuIcons>li:hover .hideContainer,.burgerMenu .menuRight .menuIcons>li.active .hideContainer{width:221px;-webkit-transition:all 0s;-moz-transition:all 0s;-ms-transition:all 0s;-o-transition:all 0s;transition:all 0s}
// .burgerMenu .menuRight .menuSocial{text-align:center}
// .burgerMenu .menuRight .menuSocial li{font-size:11px;line-height:40px;height:40px;cursor:pointer}
// .burgerMenu .menuRight .menuSocial li a{text-align:center;display:block;position:relative}
// .burgerMenu .menuRight .menuSocial li a:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// .burgerMenu .menuRight .menuSocial li a .icon{display:inline-block;vertical-align:middle;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat}
// .burgerMenu .menuRight .menuSocial li a .icon.fb{background-position:-9px -285px;width:19px;height:18px}
// .burgerMenu .menuRight .menuSocial li a .icon.tw{background-position:-9px -326px;width:20px;height:16px}
// .burgerMenu .menuRight .menuSocial li a .icon.gplus{background-position:-8px -364px;width:21px;height:20px}
// .burgerMenu .menuRight .menuSocial li a .icon.email{background-position:-10px -407px;width:17px;height:14px}
// .burgerMenu .menuRight .menuSocial li .facebookShare:hover a{background-color:#4d6fae}
// .burgerMenu .menuRight .menuSocial li .twitterShare:hover a{background-color:#60baef}
// .burgerMenu .menuRight .menuSocial li .googlePlusShare:hover a{background-color:#de4b39}
// .burgerMenu .menuRight .menuSocial li .emailShare:hover a{background-color:#cf1818}
// .burgerMenu .menuRight .menuSocial .menuHeading{color:#fff;text-transform:uppercase;cursor:default!important}
// .burgerMenu .menuRight .menuSprite{background:transparent url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat;margin:0 auto}
// .burgerMenu .menuRight .menuSprite.weather{background-position:0 0;width:35px;height:35px}
// .burgerMenu .menuRight .menuSprite.newsOnTV{background-position:-6px -85px;width:26px;height:24px}
// .burgerMenu .menuRight .menuSprite.sendStory{background-position:-4px -173px;width:27px;height:22px}
// .burgerMenu .menuRight .menuSprite.newsTeam{background-position:0 -123px;width:35px;height:35px}
// .burgerMenu .mCustomScrollBox{overflow:hidden;overflow-x:visible;max-width:none}
// .burgerMenu .mCustomScrollBox .mCSB_container{margin:0}
// .burgerMenu .mCustomScrollBox .mCSB_scrollTools{visibility:hidden}
// .device-mobile .burger{width:60px;top:0;left:0;height:60px;line-height:60px;position:absolute;z-index:11}
// .device-mobile .burger.active a.menuIcon{background-color:white}
// .device-mobile .burger a.menuIcon{background-position:13px -480px;background-color:white}
// .device-mobile .burger a.menuIcon:visited,.device-mobile .burger a.menuIcon:hover{background-color:white}
// .device-mobile .burgerMenu{z-index:-1;visibility:hidden;height:100%!important;position:fixed;top:0;left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-x:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-o-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}
// .device-mobile .burgerMenu .slidemenu-body{position:relative;height:100%;overflow:hidden}
// .device-mobile .burgerMenu .slidemenu-body .scrollIt{position:relative;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}
// .device-mobile .burgerMenu .newsOnTVHolder{-webkit-transition:all 1s;-moz-transition:all 1s;-ms-transition:all 1s;-o-transition:all 1s;transition:all 1s;background:#1f1f1f;width:100%;position:absolute;top:0;left:0;bottom:0;z-index:20;-webkit-transform:translate3d(-100%,0,0);-moz-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);-o-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition:transform .4s ease-in-out;-moz-transition:transform .4s ease-in-out;-ms-transition:transform .4s ease-in-out;-o-transition:transform .4s ease-in-out;transition:transform .4s ease-in-out}
// .device-mobile .burgerMenu .newsOnTVHolder.active{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
// .device-mobile .burgerMenu .newsOnTVHolder .lbHeader{height:80px;float:left;width:100%;background:#eaeaea}
// .device-mobile .burgerMenu .newsOnTVHolder .lbHeader .lbLogo{float:left;margin:20px 0 0 0}
// .device-mobile .burgerMenu .newsOnTVHolder .lbHeader .lbLogo .goBack{float:left;padding:12px 16px;font-size:22px;line-height:22px;text-shadow:0 0 1px rgba(77,77,77,0.3);cursor:pointer}
// .device-mobile .burgerMenu .newsOnTVHolder .lbHeader .lbLogo .goBack:before,.device-mobile .burgerMenu .newsOnTVHolder .lbHeader .lbLogo .goBack span{display:inline;float:left;padding:0 8px}
// .device-mobile .burgerMenu .newsOnTVHolder .lbHeader .lbLogo .goBack:before{content:'\2329';line-height:16px;padding:0 8px 0 0}
// .device-mobile .burgerMenu .newsOnTVHolder .lbContent{float:left;clear:left;width:100%}
// .device-mobile .burgerMenu .newsOnTVHolder .newsOnTVContainer{background:#1f1f1f;margin:0;padding:0;list-style:none;position:relative}
// .device-mobile .burgerMenu .newsOnTVHolder .newsOnTVContainer li{padding:9px 18px;background:#1f1f1f}
// .device-mobile .burgerMenu .newsOnTVHolder .newsOnTVContainer li:first-child{padding-top:18px}
// .device-mobile .burgerMenu .newsOnTVHolder .newsOnTVContainer li a{border:0;width:100%;height:100%;display:block;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s;transition:all .2s}
// .device-mobile .burgerMenu .newsOnTVHolder .newsOnTVContainer li a img{width:100%}
// .device-mobile .burgerMenu .menuLeft{width:100%;float:none;padding-right:90px;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
// .device-mobile .burgerMenu .menuLeft .topMenu a{position:relative;display:block;width:100%;height:100%;text-transform:capitalize;padding-left:12px;padding:12px 6px 12px 12px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;background:0}
// .device-mobile .burgerMenu .menuLeft .topMenu a:hover:before,.device-mobile .burgerMenu .menuLeft .topMenu a:hover:after{height:0;width:0;border-top:0;border-left:none;border-right:0;border-bottom:0;border:none top:0;left:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem{clear:left;width:100%}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem>a{text-transform:uppercase}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem>a:hover:before,.device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem>a:hover:after{height:0;width:0;border-top:0;border-left:none;border-right:0;border-bottom:0;border:none top:0;left:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem .typeMenu{border-top:1px solid #404242;margin-right:10px}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem .typeMenu li{display:inline-block;white-space:nowrap}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem .typeMenu li a{position:relative;display:block;width:100%;height:100%;text-transform:uppercase;padding:12px 0 12px 6px;font-size:10px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem .typeMenu li a:first-child{padding-left:7px}
// .device-mobile .burgerMenu .menuLeft .topMenu .topMenuItem .typeMenu li:first-child a{padding-left:12px}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover{position:relative;width:100%;line-height:normal;margin-right:10px}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .subMenuRolloverLink,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .subMenuRolloverLink,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .subMenuRolloverLink:hover,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .subMenuRolloverLink:hover{text-transform:uppercase}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .subMenuRolloverLink:after,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .subMenuRolloverLink:after,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .subMenuRolloverLink:hover:after,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .subMenuRolloverLink:hover:after{content:'';border-top:5px solid #fff;border-right:5px solid transparent;border-left:5px solid transparent;display:block;width:0;position:absolute;top:18px;left:auto;right:18px!important}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .hideContainer,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .hideContainer{overflow:hidden;width:100%;max-height:0;float:left;-webkit-transition:all .3s;-moz-transition:all .3s;-ms-transition:all .3s;-o-transition:all .3s;transition:all .3s}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .hideContainer .subMenuRolloverItems,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .hideContainer .subMenuRolloverItems{position:relative;padding:0;height:100%;width:100%}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .hideContainer .subMenuRolloverItems li,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .hideContainer .subMenuRolloverItems li{background:#1f1f1f}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover .hideContainer .subMenuRolloverItems li:first-child,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover .hideContainer .subMenuRolloverItems li:first-child{border-top:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover.active,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover.active{background:#cf1818}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover.active .subMenuRolloverLink:after,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover.active .subMenuRolloverLink:after{border-bottom:5px solid #fff;border-top:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover.active .subMenuRolloverLink:hover,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover.active .subMenuRolloverLink:hover{color:#fff!important}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover.active .hideContainer,.device-mobile .burgerMenu .menuLeft .topMenu .subMenuRollover:hover.active .hideContainer{max-height:10000px;-webkit-transition:all 0s;-moz-transition:all 0s;-ms-transition:all 0s;-o-transition:all 0s;transition:all 0s}
// .device-mobile .burgerMenu .menuLeft .topMenu .leftMenuFooter{clear:left;width:100%}
// .device-mobile .burgerMenu .menuLeft .topMenu .leftMenuFooter a:first-child{border-top:1px solid #404242;margin-right:20px;padding-top:12px}
// .device-mobile .burgerMenu .menuLeft .topMenu .leftMenuFooter a.copy{color:#4d4d4d}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenu{border-top:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenu li{margin-right:10px;padding:0}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenu li:first-child{border-top:1px solid #404242}
// .device-mobile .burgerMenu .menuLeft .topMenu .subMenu li a{padding-left:12px}
// .device-mobile .burgerMenu .menuRight{width:90px;position:absolute;top:61px;right:0;left:initial}
// .device-mobile .burgerMenu .menuRight .menuIcons>li>a{text-align:center}
// .device-mobile .burgerMenu .menuRight .menuIcons>li>a:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// .device-mobile .burgerMenu .menuRight .menuIcons>li>a p{margin:0;line-height:normal;text-transform:uppercase;color:#fff;font-family:black_sans;font-weight:500;font-size:11px;padding:10px 5px 0 5px}
// .device-mobile .searchContainer{float:none;margin-right:0;height:60px;text-align:center;position:relative;border-bottom:1px solid #404242;background-color:#1f1f1f}
// .device-mobile .searchContainer:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em!important}
// .device-mobile .searchContainer .searchBox{position:absolute;left:0;top:15px;z-index:2;width:100%;padding-left:40px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
// .device-mobile .searchContainer .searchBox .searchField,.device-mobile .searchContainer .searchBox .searchField:focus{width:100%;padding:10px;margin:0;color:#fff;background:transparent;border:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;box-shadow:none}
// .device-mobile .searchContainer .searchIcon{width:40px;height:60px;position:absolute;left:0;top:0}
// .device-mobile .searchContainer .searchIcon .icon{background-position:-32px -445px;margin:20px 0 0 10px}
// .device-mobile .containerFoot{position:relative}
// .device-mobile .containerFoot .footer{width:100%}
// .containerFoot{-webkit-transition:all .6s cubic-bezier(0.77,0,0.175,1);-moz-transition:all .6s cubic-bezier(0.77,0,0.175,1);-ms-transition:all .6s cubic-bezier(0.77,0,0.175,1);-o-transition:all .6s cubic-bezier(0.77,0,0.175,1);transition:all .6s cubic-bezier(0.77,0,0.175,1);position:fixed;background:#fff;width:100%;box-shadow:inset 0 80px 0 0 #cf1818;border-bottom:3px solid #fff;z-index:2001}
// .containerFoot .footerClosed{height:27px;margin:-27px auto 0 auto}
// .containerFoot .footerClosed .footerBackToTop{float:left;line-height:27px; }
// .containerFoot .footerClosed .footerBackToTop a.footerBackToTopLink{cursor:pointer}
// .containerFoot .footerClosed .footerBackToTop a.footerBackToTopLink div{font-family:black_sans;font-weight:500;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -141px -275px;width:20px;height:14px;cursor:pointer;float:left;margin:4px 2px 0 0}
// .containerFoot .footerClosed .footerBackToTop a.footerBackToTopLink span{float:left;color:#f8f9fa;font-size:30px}
// .containerFoot .footerClosed .footerCopy{float:right;font-family:black_sans;font-weight:500;font-size:12px;line-height:27px;padding:0 0 0 5px;border-radius:5px 5px 0 0;background:-moz-linear-gradient(top,rgba(255,255,255,0.7) 0,rgba(255,255,255,0.7) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,0.7)),color-stop(100%,rgba(255,255,255,0.7)));background:-webkit-linear-gradient(top,rgba(255,255,255,0.7) 0,rgba(255,255,255,0.7) 100%);background:-o-linear-gradient(top,rgba(255,255,255,0.7) 0,rgba(255,255,255,0.7) 100%);background:-ms-linear-gradient(top,rgba(255,255,255,0.7) 0,rgba(255,255,255,0.7) 100%);background:linear-gradient(to bottom,rgba(255,255,255,0.7) 0,rgba(255,255,255,0.7) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3ffffff',endColorstr='#b3ffffff',GradientType=0)}
// .containerFoot .footerClosed .footerCopy .copy{float:left;margin-right:6px;color:#999}
// .containerFoot .footerClosed .footerCopy .footerCopyLinks{float:left;list-style:none;margin:0;padding:0}
// .containerFoot .footerClosed .footerCopy .footerCopyLinks li{float:left;margin:0;padding:0 6px 0 0}
// .containerFoot .footerClosed .footerCopy .footerCopyLinks li a{color:#cf1818;text-transform:capitalize;border-left:1px solid #999;padding-left:6px}
// }
// .colRight{width:300px;margin-top:10px;float:right;-webkit-transform:all .2s;transform:all .2s}
// .colRight .tile{float:none;width:272px;height:210px}
// .colRight .tile .tileContentHolder{box-shadow:none}
// .colRight .tile .tileContentHolder .tileContent{margin-top:10px;padding:0;z-index:3}
// .colRight .tile .tileContentHolder .tileContent .tileContentHeading{font-family:black_sans;font-weight:500;color:#000;font-size:16px;line-height:20px;text-shadow:none;font-size:18px;line-height:21px}
// .colRight .tile .tileContentHolder .tileImage{position:relative}
// .colRight .tile .tileContentHolder .tileImage img{max-width:100%;width:100%}
// .colRight .tile .tileContentHolder .tileImage .tileOverlayNumber{position:absolute;bottom:-15px;right:-11px;z-index:2;font-family:black_sans;font-weight:700;font-size:96px;min-width:78px;text-align:center;color:#fff;line-height:100px;text-shadow:0 0 1px #fff}
// .colRight .tile.rightFeature{width:272px;height:auto;margin-bottom:10px}
// .colRight .tile.rightFeature .tileContentHolder .tileContent .tileContentHeading{font-family:black_sans;font-weight:500;color:#000;font-size:16px;line-height:20px;text-shadow:none;font-size:18px;line-height:21px;text-align:left}
// .colRight .tile:hover .tileContentHeading{color:#cf1818}
// .colRight .colRightContainer{background:#1f1f1f}
// .colRight .colRightContainer .colRightTabs{height:36px;padding:7px 0}
// .colRight .colRightContainer .colRightTabs .tabHeader{font-family:black_sans;font-weight:500;position:relative;float:left;text-align:center;text-transform:uppercase;color:#fff;font-size:16px;line-height:16px;height:16px;padding:5px 0;margin:10px 0 0 0;cursor:pointer;cursor:hand;box-shadow:inset 1px 0 0 0 rgba(255,255,255,0.2)}
// .colRight .colRightContainer .colRightTabs .tabHeader:first-child{box-shadow:none}
// .colRight .colRightContainer .colRightTabs .tabHeader:hover{color:#cf1818}
// .colRight .colRightContainer .colRightTabs .tabHeader.active:after{content:'';border-bottom:10px solid #cf1818;border-right:7px solid transparent;border-left:7px solid transparent;position:absolute;bottom:-14px}
// .colRight .colRightContainer .colRightTabContainer{width:279px;background:#fff;margin:7px;padding:10px 0 7px 7px;display:none;position:relative}
// .colRight .colRightContainer .colRightTabContainer:before{content:'';width:100%;border-top:3px solid #cf1818;position:absolute;top:0;left:0}
// .colRight .colRightContainer .colRightTabContainer.active{display:block}
// .colRight:not(.story){position:initial}
// .colRight:not(.story).fixed{position:fixed}
// .colRight:not(.story) .colRightContainer{padding-bottom:1px;margin-bottom:20px}
// .colRight:not(.story) .colRightContainer .colRightTabs .tabHeader{width:50%}
// .colRight:not(.story) .colRightContainer .colRightTabs .tabHeader.active:after{left:64px}
// .colRight.story .tile .tileContentHolder{box-shadow:none;position:relative}
// .colRight.story .tile .tileContentHolder .progress{position:absolute;display:flex;top:0;left:0;height:100%;background:#eaeaea;overflow:hidden;-webkit-transition:width .2s linear;-moz-transition:width .2s linear;-o-transition:width .2s linear;-ms-transition:width .2s linear;transition:width .2s linear}
// .colRight.story .tile .tileContentHolder .progress.scrolled{width:100%}
// .colRight.story .tile .tileContentHolder .progress.below{width:0}
// .colRight.story .tile .tileContentHolder .tileImage{position:relative}
// .colRight.story .tile .tileContentHolder .tileContent{margin-top:10px;padding:0;z-index:3;position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
// .colRight.story .tile:hover .tileContentHeading{color:#cf1818}
// .colRight.story .colRightContainer{margin-bottom:40px;padding-bottom:24px;position:relative}
// .colRight.story .colRightContainer .colRightTabs{padding:10px 0 7px 0}
// .colRight.story .colRightContainer .colRightTabs .tabHeader{width:100px}
// .colRight.story .colRightContainer .colRightTabs .tabHeader.active:after{left:43px}
// .colRight.story .colRightContainer .colRightTabContainerHeader{width:100%;line-height:31px;background:#cf1818;text-transform:uppercase;position:absolute;top:60px;left:0;z-index:5}
// .colRight.story .colRightContainer .colRightTabContainerHeader p{padding:0 10px;margin:0;color:#fff;text-shadow:0 0 1px rgba(229,229,229,0.6);font-family:black_sans;font-weight:500}
// .colRight.story .colRightContainer .colRightTabContainerHeader+.tile.latest a{position:relative;z-index:2}
// .colRight.story .colRightContainer .colRightTabContainerHeader+.tile.latest a:after{position:absolute;content:'';height:60px;width:80px;background:#eaeaea;top:-8px;left:0;z-index:1}
// .colRight.story .colRightContainer .colRightTabContainerHeader+.tile.latest a time{display:none}
// .colRight.story .colRightContainer.hasSectionHeader .colRightTabContainer{padding-top:40px}
// .colRight.story .colRightContainer .colRightTabContainer{height:100%;margin:7px;padding:7px 0 7px 7px}
// .colRight.story .colRightContainer .colRightTabContainer:before{content:'';width:100%;border-top:3px solid #cf1818;position:absolute;top:0;left:0}
// .colRight.story .colRightContainer .colRightTabContainer.active{display:block}
// .colRight.story .colRightContainer .colRightTabContainer .advert.sponsored{width:252px;height:auto;border-bottom:1px solid #ccc;margin-bottom:10px;padding-bottom:10px}
// .colRight.story .colRightContainer .colRightTabContainer .advert.sponsored .interior{padding:0}
// .colRight.story .colRightContainer .colRightTabContainer .advert.sponsored .interior .sponsoredContent{width:152px}
// .colRight.story .colRightContainer .tile.popular{width:264px;height:210px}

// .colRight.story .colRightContainer .tile.popular .tileOverlayNumber{position:absolute;bottom:-15px;right:4px;z-index:2;font-family:black_sans;font-weight:700;font-size:96px;min-width:78px;text-align:center;color:#fff;line-height:100px;text-shadow:0 0 1px #fff}
// .colRight.story .colRightContainer .tile.popular .tileContent .tileContentHeading{font-family:black_sans;font-weight:500;color:#000;font-size:16px;line-height:20px;text-shadow:none;font-size:18px;line-height:21px}
// .colRight.story .colRightContainer .tile.rightFeature{width:264px;height:auto;margin-bottom:10px}
// .colRight.story .colRightContainer .tile.rightFeature .tileContentHeading{font-family:black_sans;font-weight:500;color:#000;font-size:16px;line-height:20px;text-shadow:none;font-size:18px;line-height:21px}
// .colRight.story .colRightContainer .tile.latest{width:264px;height:auto;border-bottom:1px solid #ccc;margin-bottom:10px;position:relative;clear:left}
// .colRight.story .colRightContainer .tile.latest .tileContentHeading{font-family:black_sans;font-weight:500;color:#000;font-size:16px;line-height:20px;font-size:18px;line-height:21px;text-shadow:none;position:relative}
// .colRight.story .colRightContainer .tile.latest.video .tileContent{float:left;width:154px;margin:0;padding:0;min-height:100px;overflow:hidden}
// .colRight.story .colRightContainer .tile.latest.image .tileContent{float:left;width:154px;padding:0;margin:0;min-height:100px;overflow:hidden}
// .colRight.story .colRightContainer .tile.latest .tileImage{width:100px;height:100px;float:left;margin-right:7px;margin-bottom:10px}
// .colRight.story .colRightContainer .tile.latest .tileImage img{width:100px;height:100px}
// .colRight.story .colRightContainer .tile.latest time{color:#999;font-size:12px;font-family:black_sans;font-weight:400;position:relative;text-shadow:0 0 1px rgba(229,229,229,0.2);top:auto;left:auto;white-space:nowrap;line-height:normal;background:transparent;padding:0;z-index:4}
// .colRight.story .colRightContainer .tile.latest:first-child .tileContentHolder .tileContent{margin-top:0}
// .colRight.homeRight .colRightContainer .colRightTabs .tabHeader{width:100%}
// .colRight.homeRight .colRightContainer .colRightTabs .tabHeader.active:after{display:none}
// body.device-mobile .tile.rightFeature{float:none}
// body.device-mobile .tile.rightFeature .tileContentHolder{position:relative;background:#fff;margin-bottom:20px;-webkit-box-shadow:1px 1px 3px 0 rgba(0,0,0,0.1);-moz-box-shadow:1px 1px 3px 0 rgba(0,0,0,0.1);box-shadow:1px 1px 3px 0 rgba(0,0,0,0.1)}
// body.device-mobile .tile.rightFeature .tileContentHolder .tileImage{width:100%}
// body.device-mobile .tile.rightFeature .tileContentHolder .tileContent{margin-top:0;padding:10px}
// body.device-mobile .tile.rightFeature .tileContentHolder .tileContent h4{font-size:21px;font-family:black_sans;font-weight:500}
// body.storyPageBody,body.bg.storyPageBody{background:#fff!important}
// .colLeft .tagItem{float:left;margin:8px 20px 8px 0;padding:2px 6px 2px 3px;text-transform:uppercase;background:#000;overflow-y:hidden;position:relative;transition:all .3s;-moz-transition:all .3s;-webkit-transition:all .3s}
// .colLeft .tagItem a{float:left;font-family:black_sans;font-weight:500;font-size:14px;padding-left:4px;position:relative;color:#FFF}
// .colLeft .tagItem a:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .colLeft .tagItem a:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .colLeft .tagItem:hover{-webkit-box-shadow:inset 300px 0 0 0 #cf1818;-moz-box-shadow:inset 300px 0 0 0 #cf1818;box-shadow:inset 300px 0 0 0 #cf1818}
// .colLeft .tagItem:hover a{color:#fff}
// .colLeft .tagItem:after{content:'';border-top:3px solid #000;border-left:3px solid transparent;position:absolute;height:18px;top:-8px;left:-10px;top:0;left:auto;right:0}
// .colLeft .colStorySectionHeader{margin:10px}
// @media all and (min-width:737px){.storyItemContainer{float:left;clear:left;width:880px}
// }
// .storyItemContainer{padding:0 10px;margin-bottom:20px}
// .storyItemContainer hr{background:#eee;height:5px;width:100%;border:0;clear:both}
// .storyItemContainer #related_content hr{height:3px;background-color:#1f1f1f;float:left;margin-top:30px}
// .storyItemContainer .storyPage.title{border-bottom:1px solid #eee;margin-bottom:10px;position:relative;padding:10px 0 0 0}
// .storyItemContainer .storyPage.title h1{width:auto;font-size:40px;font-family:black_sans;font-weight:500;height:auto;line-height:normal}
// .storyItemContainer .storyPage.title .timeShare{float:left}
// .storyItemContainer .storyPage.title .timeShare .red-square{color:#fff;font-size:13px;font-family:black_sans;font-weight:400;float:left;line-height:30px;white-space:nowrap;background:#cf1818;padding:0 10px}
// .storyItemContainer .storyPage.title .timeShare .red-square.sponsored{text-transform:uppercase;background-color:#f3f3f2;margin-right:0;color:black;font-weight:bold}
// .storyItemContainer .storyPage.title .timeShare .storyShare{float:left;clear:left;margin-top:10px;line-height:30px;background:transparent}
// .storyItemContainer .storyPage.title .timeShare .storyShare .shareShare{float:left;background:#1f1f1f;color:#fff;font-size:14px;font-family:black_sans;font-weight:400;text-shadow:0 0 1px rgba(229,229,229,0.6);text-transform:capitalize;text-align:center}
// .storyItemContainer .storyPage.title .timeShare .storyShare span{float:left;width:64px;text-align:center}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon{background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat;width:65px;height:30px;margin:0;float:left}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.fb{background-color:#6a6a6a;background-position:-77px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.tw{background-color:#9d9d9d;background-position:-140px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.gplus{background-color:#808080;background-position:-203px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.email{background-color:#898989;background-position:-267px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .shareButtons{float:left}
// .storyItemContainer .storyPage.title .timeShare .storyShare .shareButtons a{display:block;float:left}
// .storyItemContainer .storyPage.title .storyTalent{position:relative;float:left;clear:left;width:100%}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot{float:right;width:80px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot img{width:100%;float:right;max-width:100%}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail{position:absolute;bottom:0;left:0;margin-right:100px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail h4,.storyItemContainer .storyPage.title .storyTalent .storyTalentDetail p{white-space:nowrap;margin:0;float:left}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail h4 i,.storyItemContainer .storyPage.title .storyTalent .storyTalentDetail p i{display:block;position:relative;width:14px;height:14px;float:right;margin:1px 0 0 5px;background:#000 url('clientlibs_less/content/images/structure/link_sq.png') center center no-repeat}
// .storyItemContainer .storyPage.title.source .storyTalent .storyTalentMugshot{float:right}
// .storyItemContainer .storyPage.title.source .storyTalent .storyTalentMugshot img{width:auto}
// @media all and (min-width:737px){.storyItemContainer .storyPage.title{margin:10px 0}
// .storyItemContainer .storyPage.title h1{padding-bottom:40px}
// .storyItemContainer .storyPage.title .timeShare{position:absolute;left:0;bottom:0;height:60px;float:left}
// .storyItemContainer .storyPage.title .timeShare .red-square{font-family:black_sans;font-weight:400;text-shadow:0 0 1px rgba(229,229,229,0.6);margin-right:10px}
// .storyItemContainer .storyPage.title .timeShare .red-square.sponsored{text-transform:uppercase;background-color:#f3f3f2;margin-right:0;color:black;font-weight:bold}
// .storyItemContainer .storyPage.title .timeShare .storyShare{margin-left:0;margin-top:0}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.shareIcon{display:block;background-color:#1f1f1f;background-position:-276px -452px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.fb:hover{background-color:#3b5998;background-position:-77px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.tw:hover{background-color:#55acee;background-position:-140px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.gplus:hover{background-color:#dc4e41;background-position:-203px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.email:hover{background-color:#cf1818;background-position:-267px -554px}
// .storyItemContainer .storyPage.title .timeShare .storyShare:hover,.storyItemContainer .storyPage.title .timeShare .storyShare.active{background:transparent}
// .storyItemContainer .storyPage.title .timeShare .storyShare:hover .shareShare,.storyItemContainer .storyPage.title .timeShare .storyShare.active .shareShare{background:#1f1f1f}
// .storyItemContainer .storyPage.title .timeShare .storyShare:hover .shareButtons,.storyItemContainer .storyPage.title .timeShare .storyShare.active .shareButtons{display:block}
// .storyItemContainer .storyPage.title .timeShare .storyShare:hover .shareIcon,.storyItemContainer .storyPage.title .timeShare .storyShare.active .shareIcon{display:block!important;float:right}
// .storyItemContainer .storyPage.title .storyTalent{position:absolute;right:0;bottom:0;width:275px}
// .storyItemContainer .storyPage.title .storyTalent.sourceTags{position:static;float:right;width:auto}
// .storyItemContainer .storyPage.title .storyTalent.sourceTags p,.storyItemContainer .storyPage.title .storyTalent.sourceTags span,.storyItemContainer .storyPage.title .storyTalent.sourceTags img{line-height:19px;float:left;margin:0 5px}
// .storyItemContainer .storyPage.title .storyTalent.sourceTags p.sep,.storyItemContainer .storyPage.title .storyTalent.sourceTags span.sep,.storyItemContainer .storyPage.title .storyTalent.sourceTags img.sep{margin:0}
// .storyItemContainer .storyPage.title .storyTalent.sourceTags img{max-height:19px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot{position:absolute;bottom:0;right:0;width:60px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot img{width:60px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail{right:70px;text-align:right;margin-right:0}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail h4,.storyItemContainer .storyPage.title .storyTalent .storyTalentDetail p{float:none}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail.noImage{right:0}
// .storyItemContainer .storyPage.title .storyTalent a{display:block}
// .storyItemContainer .storyPage.title .storyTalent a.byline{float:right;height:100px}
// .storyItemContainer .storyPage.title .storyTalent a:hover h4{color:#cf1818}
// .storyItemContainer .storyPage.title .storyTalent a:hover h4 i{background-color:#cf1818}
// .storyItemContainer .storyPage.title .storyTalent a:hover .storyTalentMugshot img{opacity:.7}
// .storyItemContainer .storyPage.title.source h1{width:100%}
// .storyItemContainer .storyPage.title.source .storyTalent .storyTalentMugshot{height:auto;float:none}
// .storyItemContainer .storyPage.title.source .storyTalent .storyTalentMugshot img{height:auto}
// .storyItemContainer .storyPage.title+.rightSideBar{margin-top:20px}
// }
// .storyItemContainer .storyPage.heading{margin:20px 0;color:#000;font-family:black_sans;font-weight:400;font-size:24px;line-height:30px}
// .storyItemContainer .storyPage.heading.wide{width:100%}
// .storyItemContainer .storyPage.heading.wide+.video.right,.storyItemContainer .storyPage.heading.wide+.image.right,.storyItemContainer .storyPage.heading.wide+.stYoutube.right,.storyItemContainer .storyPage.heading.wide+.gallery.right{margin-top:0}
// .storyItemContainer .storyPage.heading b{font-family:black_sans;font-weight:700}
// .storyItemContainer .storyPage.heading .storyHeading,.storyItemContainer .storyPage.heading ul.soFar{line-height:normal}
// .storyItemContainer .storyPage.heading .storyHeading li:first-letter ,.storyItemContainer .storyPage.heading ul.soFar li:first-letter {text-transform:capitalize}
// .storyItemContainer .storyPage.paragraph{max-width:870px;margin:20px 0;font-size:18px;line-height:24px}
// .storyItemContainer .storyPage.paragraph p{max-width:550px;margin:0;word-wrap:break-word}
// .storyItemContainer .storyPage.paragraph p img.embedded{max-width:550px}
// .storyItemContainer .storyPage.paragraph p b{font-family:black_sans;font-weight:700}
// .storyItemContainer .storyPage.video{padding-bottom:10px;border-bottom:1px solid #eee;width:auto}
// .storyItemContainer .storyPage.video.inline{float:left;width:100%;margin-bottom:10px}
// .storyItemContainer .storyPage.video.wide{float:left}
// .storyItemContainer .storyPage.video .storyPageVideo{position:relative}
// .storyItemContainer .storyPage.video .storyPageVideo img{position:relative;z-index:2;width:100%}
// .storyItemContainer .storyPage.video .storyPageVideo img.state-image{width:27px!important;height:27px;position:absolute;top:0;right:0;z-index:3}
// .storyItemContainer .storyPage.video .storyPageVideo object,.storyItemContainer .storyPage.video .storyPageVideo iframe{position:absolute;top:0;left:0;z-index:1}
// .storyItemContainer .storyPage.video .storyPageVideo h4{position:absolute;font-family:black_sans;font-weight:400;bottom:10px;left:10px;color:#fff}
// .storyItemContainer .storyPage.video .heading{margin:20px 0;font-family:black_sans;font-weight:400;font-size:28px;line-height:36px}
// .storyItemContainer .storyPage.video .caption{display:inline-block;color:#4d4d4d;margin:10px 0 0 0}
// @media all and (min-width:737px){.storyItemContainer .storyPage.video{height:auto}
// .storyItemContainer .storyPage.video .storyPageVideo{float:left;width:540px;height:304px}
// .storyItemContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper{width:540px;height:304px;position:absolute;top:0;left:0}
// .storyItemContainer .storyPage.video .storyPageVideo img{width:100%;height:auto}
// .storyItemContainer .storyPage.video.inline{float:left;margin:0 20px 20px 0;max-width:530px;width:530px}
// .storyItemContainer .storyPage.video.right{float:right;clear:right;margin:0 0 20px 20px;max-width:530px;width:530px}
// .storyItemContainer .storyPage.video.rightSmall{max-width:300px;width:300px;margin:0 0 20px 20px;float:right;clear:right}
// .storyItemContainer .storyPage.video.rightSmall .storyPageVideo{width:300px;height:169px}
// .storyItemContainer .storyPage.video.rightSmall .storyPageVideo .brightcove-experience-wrapper,.storyItemContainer .storyPage.video.rightSmall .storyPageVideo img{width:300px;height:169px}
// .storyItemContainer .storyPage.video.wide .storyPageVideo{max-width:880px;width:880px;height:495px}
// .storyItemContainer .storyPage.video.wide .storyPageVideo .brightcove-experience-wrapper,.storyItemContainer .storyPage.video.wide .storyPageVideo img{max-width:880px;width:880px;height:495px}
// }
// .storyItemContainer .storyPage.quote{max-width:530px;position:relative;margin:10px 0;padding:10px 0 5px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;clear:left}
// .storyItemContainer .storyPage.quote:before{content:'';position:absolute;top:9px;left:0;background:transparent url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -289px -318px;width:25px;height:16px}
// .storyItemContainer .storyPage.quote blockquote{font-family:black_sans;font-weight:500;font-style:italic;color:#000;quotes:none;margin:0;margin-left:30px}
// .storyItemContainer .storyPage.quote blockquote q{font-size:24px}
// .storyItemContainer .storyPage.quote blockquote cite{font-size:16px;line-height:1.7em;color:#4d4d4d}
// .storyItemContainer .storyPage.quote.inline blockquote q{font-size:24px;float:none}
// .storyItemContainer .storyPage.relatedStories.wide{width:100%;float:left;clear:left;margin:20px 0 0 0;padding:0 0 20px 0;border-bottom:3px solid #1f1f1f}
// .storyItemContainer .storyPage.relatedStories.wide h3{font-size:18px;float:left;border-bottom:0;padding-bottom:0;margin-bottom:0;position:absolute}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags{position:relative;padding-left:60px;margin-bottom:10px;padding-bottom:10px;float:left;clear:left}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem{float:left;margin:0 0 10px 15px;padding:2px 6px 2px 3px;text-transform:uppercase;overflow-y:hidden;background:#000;-webkit-box-shadow:inset 0 0 0 0 #cf1818;-moz-box-shadow:inset 0 0 0 0 #cf1818;box-shadow:inset 0 0 0 0 #cf1818;position:relative;transition:all .3s;-moz-transition:all .3s;-webkit-transition:all .3s}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem a{float:left;font-family:black_sans;font-weight:500;font-size:14px;padding-left:4px;position:relative;color:#FFF}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem a:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem a:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem:hover{-webkit-box-shadow:inset 300px 0 0 0 #cf1818;-moz-box-shadow:inset 300px 0 0 0 #cf1818;box-shadow:inset 300px 0 0 0 #cf1818}
// .storyItemContainer .storyPage.relatedStories.wide .relatedTags .tagItem:hover a{color:#fff}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems{float:left;clear:left;width:100%;margin:0 0 10px 0}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem{float:left;margin:15px 30px 0 0;width:197px}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem:nth-child(4n){margin:15px 0 0 0}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem:nth-child(5){clear:left}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem:nth-child(4n+5){clear:left}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem.image,.storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem.video{border:0;border-bottom:0;padding:0;padding-bottom:0}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem .relatedImage{float:left;width:100%;margin:0 0 5px;height:auto}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem .relatedImage img{width:100%}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem h4{width:100%;float:left;clear:left;font-family:black_sans;font-weight:500;font-size:14px}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem .imageLead{-webkit-transition:all .3s;-moz-transition:all .3s;-ms-transition:all .3s;-o-transition:all .3s;transition:all .3s}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem a{float:left}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem a:hover{cursor:pointer;cursor:hand}
// .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem a:hover .imageLead{opacity:.7;-webkit-transition:all 0s;-moz-transition:all 0s;-ms-transition:all 0s;-o-transition:all 0s;transition:all 0s}
// .storyItemContainer .storyPage.image{margin:20px 20px 20px 0}
// .storyItemContainer .storyPage.image.inline{max-width:530px;padding-bottom:10px;border-bottom:1px solid #eee;float:left}
// .storyItemContainer .storyPage.image.right{max-width:530px;margin-left:20px;float:right;clear:right}
// .storyItemContainer .storyPage.image.rightSmall{max-width:300px;width:300px;margin:0 0 20px 20px;float:right;clear:right}
// .storyItemContainer .storyPage.image.wide{max-width:100%}
// .storyItemContainer .storyPage.image .storyPageImage{position:relative}
// .storyItemContainer .storyPage.image .storyPageImage img{width:100%}
// .storyItemContainer .storyPage.image .storyPageImage .state-image{width:27px;height:27px;position:absolute;top:0;right:0}
// .storyItemContainer .storyPage.image p{margin-top:10px}
// .storyItemContainer .storyPage.map{margin:20px 20px 20px 0;width:100%;padding-bottom:10px;border-bottom:1px solid #eee}
// .storyItemContainer .storyPage.map .storyMap{height:300px}
// .storyItemContainer .storyPage.map .storyPageMap{position:relative}
// .storyItemContainer .storyPage.map .storyPageMap .storyMap{width:100%}
// .storyItemContainer .storyPage.map p{padding:0 10px;margin-top:10px}
// @media all and (min-width:737px){.storyItemContainer .storyPage.map.inline{float:left;max-width:530px}
// .storyItemContainer .storyPage.map.right{max-width:530px;margin-left:20px;float:right;clear:right;border-bottom:0}
// .storyItemContainer .storyPage.map.rightSmall{width:300px;margin-left:20px;float:right;clear:right;border-bottom:0}
// .storyItemContainer .storyPage.map.rightSmall .storyMap{height:200px}
// .storyItemContainer .storyPage.map.wide{max-width:880px;clear:left;border-bottom:0}
// .storyItemContainer .storyPage.map.wide .storyMap{height:490px}
// .storyItemContainer .storyPage.map p{padding:0}
// }
// .storyItemContainer .storyPage.stYoutube{margin:20px 20px 20px 0}
// .storyItemContainer .storyPage.stYoutube .youtube,.storyItemContainer .storyPage.stYoutube iframe{position:relative;width:100%;border:0}
// .storyItemContainer .storyPage.stYoutube.inline{width:540px;height:304px;padding-bottom:10px;border-bottom:1px solid #eee;float:left}
// .storyItemContainer .storyPage.stYoutube.inline .youtube,.storyItemContainer .storyPage.stYoutube.inline iframe{height:304px}
// .storyItemContainer .storyPage.stYoutube.right{width:540px;margin-left:20px;float:right}
// .storyItemContainer .storyPage.stYoutube.right .youtube,.storyItemContainer .storyPage.stYoutube.right iframe{height:304px}
// .storyItemContainer .storyPage.stYoutube.wide{width:880px}
// .storyItemContainer .storyPage.stYoutube.wide .youtube,.storyItemContainer .storyPage.stYoutube.wide iframe{height:495px}
// .storyItemContainer .storyPage.stYoutube p{margin-top:10px}
// .storyItemContainer .storyPage.tweet{background:#fff;margin:20px 0 20px 0;float:left;clear:left;width:550px;position:relative}
// .storyItemContainer .storyPage.tweet .sprite{background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat 0 0;padding:0 4px;height:14px;float:left}
// .storyItemContainer .storyPage.tweet .sprite.tweetFav{background-position:-467px -7px;width:16px!important}
// .storyItemContainer .storyPage.tweet .sprite.tweetCycle{background-position:-193px -7px;width:19px!important}
// .storyItemContainer .storyPage.tweet .sprite.tweetArrow{background-position:-140px -32px;width:18px!important}
// .storyItemContainer .storyPage.tweet .sprite.tweetTick{background-position:-6px -232px;width:15px!important;height:15px!important}
// .storyItemContainer .storyPage.tweet .sprite.tweetLogo{background-position:-140px -6px;width:14px!important;height:14px!important}
// .storyItemContainer .storyPage.tweet time.tweetDate{display:block;font-family:black_sans;font-weight:400;color:#999;font-size:12px;line-height:16px;border:0}
// .storyItemContainer .storyPage.tweet.reporter{max-width:490px;border:1px solid #e5e5e5;padding:20px 20px 0 20px;padding-bottom:110px!important}
// .storyItemContainer .storyPage.tweet.reporter time.tweetDate{position:absolute;padding:0 0 0 20px;left:0;top:20px}
// .storyItemContainer .storyPage.tweet.reporter p{color:#4d4d4d;font-family:black_sans;font-weight:400;line-height:18px;font-size:16px;padding:0;border:0}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer{position:absolute;left:0;bottom:0;width:100%;height:110px;background:url('clientlibs_less/content/images/structure/storytwitterteammemberbackground.png?version=763817055') no-repeat left bottom}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamMugshot{position:absolute;bottom:0;left:0;float:left}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamMugshot img{width:100px}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail{width:168px;position:absolute;bottom:0;left:110px;padding-bottom:40px}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail .twitterDetails{font-family:black_sans;font-weight:500;color:#000;font-size:14px}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail .twitterDetails a{float:left;width:auto}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail .twitterDetails img{float:left;margin-right:6px}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail .twitterDetails span{float:left}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail .twitterDetails span.name{font-size:12px;color:#999}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .newsTeamDetail:after{content:'';border-left:15px solid #fff;border-bottom:15px solid transparent;position:absolute;bottom:20px;left:0}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .tweetFollow{position:absolute;right:20px;bottom:50px}
// .storyItemContainer .storyPage.tweet.reporter .newsTeamContainer .tweetFollow a{float:left;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -336px -133px;width:58px;height:20px}
// .storyItemContainer .storyPage.tweet.reporter .twitterLinks{position:absolute;top:20px;right:10px}
// .storyItemContainer .storyPage.tweet.reporter .twitterLinks a{float:left;margin:0 10px 0 0}
// .storyItemContainer .storyPage.tweet.reporter .twitterLinks img{float:left}
// .storyItemContainer .storyPage.tweet.reporter .twitterLinks span{float:left}
// .storyItemContainer .storyPage.tweet.reporter time{position:absolute;top:20px;left:20px;font-size:12px}
// .storyItemContainer .storyPage.tweet.reporter .storyPageContent{margin-top:40px}
// .storyItemContainer .storyPage.tweet.reporter.image{padding:0;min-width:350px;max-width:530px}
// .storyItemContainer .storyPage.tweet.reporter.image .storyPageContent>img{width:100%}
// .storyItemContainer .storyPage.tweet.reporter.image .storyPageContent>p{padding:20px}
// .storyItemContainer .storyPage.tweet.standard{padding:20px 20px 60px 20px}
// .storyItemContainer .storyPage.tweet.standard time.tweetDate{position:absolute;padding:0 0 0 20px;left:0;bottom:5px}
// .storyItemContainer .storyPage.tweet.standard p{color:#4d4d4d;font-family:black_sans;font-weight:400;line-height:18px;font-size:16px;padding:0;border:0}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer{position:absolute;left:0;top:0;width:100%;height:80px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamMugshot{position:absolute;top:20px;left:20px;float:left}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamMugshot img{width:50px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail{position:absolute;top:30px;left:90px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail .twitterDetails{font-family:black_sans;font-weight:500;font-size:14px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail .twitterDetails a{float:left;color:#cf1818;width:auto}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail .twitterDetails img{float:left;margin-right:6px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail .twitterDetails span{float:left}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .newsTeamDetail .twitterDetails span.name{font-size:12px;clear:left}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .tweetFollow{position:absolute;right:20px;top:20px}
// .storyItemContainer .storyPage.tweet.standard .newsTeamContainer .tweetFollow a{float:left;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -336px -133px;width:58px;height:20px}
// .storyItemContainer .storyPage.tweet.standard .twitterLinks{position:absolute;bottom:5px;right:10px}
// .storyItemContainer .storyPage.tweet.standard .twitterLinks a{float:left;margin:0 10px 0 0}
// .storyItemContainer .storyPage.tweet.standard .twitterLinks img{float:left}
// .storyItemContainer .storyPage.tweet.standard .twitterLinks span{float:left}
// .storyItemContainer .storyPage.tweet.standard time{position:absolute;bottom:20px;left:20px;color:#c4c4c4;font-size:12px}
// .storyItemContainer .storyPage.tweet.standard .storyPageContent{padding:60px 0 30px 0;float:left}
// .storyItemContainer .storyPage.tweet.standard.image{padding:0}
// .storyItemContainer .storyPage.tweet.standard.image .storyPageContent>img{width:100%}
// .storyItemContainer .storyPage.tweet.standard.image .storyPageContent>p{padding:20px}
// .storyItemContainer .storyPage.instagram{position:relative;margin:10px 20px 20px 0;height:605px;overflow:hidden;width:100%}
// .storyItemContainer .storyPage.instagram iframe{width:100%;height:100%;position:absolute;top:0;left:0}
// .storyItemContainer .storyPage.instagram p{margin-top:10px}
// @media all and (min-width:737px){.storyItemContainer .storyPage.instagram{max-width:530px}
// .storyItemContainer .storyPage.instagram.inline{width:530px}
// .storyItemContainer .storyPage.instagram.rightSmall{max-width:300px;width:300px;height:370px;float:right;margin:0 0 20px 20px}
// .storyItemContainer .storyPage.instagram:first-child{margin-top:0}
// }
// .storyItemContainer .storyPage.vine{float:left;clear:both}
// .storyItemContainer .storyPage.gallery{margin:20px 20px 20px 0}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a{position:absolute;top:120px;width:40px;height:60px;z-index:101;background:rgba(0,0,0,0.2)}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-prev{left:0;border-radius:0 5px 5px 0}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-prev div{width:16px;height:22px;position:absolute;top:18px;left:10px;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -357px -167px}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-prev:hover{background:-moz-linear-gradient(left,rgba(207,24,24,0.6) 0,#cf1818 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(207,24,24,0.6)),color-stop(100%,#cf1818));background:-webkit-linear-gradient(left,rgba(207,24,24,0.6) 0,#cf1818 100%);background:-o-linear-gradient(left,rgba(207,24,24,0.6) 0,#cf1818 100%);background:-ms-linear-gradient(left,rgba(207,24,24,0.6) 0,#cf1818 100%);background:linear-gradient(to right,rgba(207,24,24,0.6) 0,#cf1818 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00cf1818',endColorstr='#cf1818',GradientType=1)}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-next{right:0;border-radius:5px 0 0 5px}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-next div{width:16px;height:22px;position:absolute;top:18px;right:10px;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -335px -167px}
// .storyItemContainer .storyPage.gallery .cycle-slideshow a.cycle-next:hover{background:-moz-linear-gradient(left,#cf1818 0,rgba(207,24,24,0.6) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#cf1818),color-stop(100%,rgba(207,24,24,0.6)));background:-webkit-linear-gradient(left,#cf1818 0,rgba(207,24,24,0.6) 100%);background:-o-linear-gradient(left,#cf1818 0,rgba(207,24,24,0.6) 100%);background:-ms-linear-gradient(left,#cf1818 0,rgba(207,24,24,0.6) 100%);background:linear-gradient(to right,#cf1818 0,rgba(207,24,24,0.6) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cf1818',endColorstr='#00cf1818',GradientType=1)}
// .storyItemContainer .storyPage.gallery .cycle-slideshow .cycle-pager{position:absolute;bottom:0;left:0;right:0;text-align:center;z-index:110}
// .storyItemContainer .storyPage.gallery .cycle-slideshow .cycle-pager span{color:#7b7c88;font-size:40px;cursor:pointer}
// .storyItemContainer .storyPage.gallery .cycle-slideshow .cycle-pager span.cycle-pager-active{color:#fff}
// .storyItemContainer .storyPage.gallery .cycle-slideshow .cycle-pager span:hover{color:#cf1818}
// .storyItemContainer .storyPage.gallery.inline{width:530px}
// .storyItemContainer .storyPage.gallery.inline img{width:530px;height:290px}
// .storyItemContainer .storyPage.gallery.right{width:530px;margin-left:20px;float:right}
// .storyItemContainer .storyPage.gallery.right img{width:530px;height:290px}
// .storyItemContainer .storyPage.gallery.wide{width:880px}
// .storyItemContainer .storyPage.gallery.wide img{width:880px;height:490px}
// .storyItemContainer .storyPage.gallery.wide a{top:210px}
// .storyItemContainer .storyPage.gallery p{margin-top:10px}
// .storyItemContainer .storyPage.updated.heading.wide{margin-top:0;padding-top:20px;background:-moz-linear-gradient(top,#f5f5f5 0,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#f5f5f5),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(top,#f5f5f5 0,rgba(255,255,255,0) 100%);background:-o-linear-gradient(top,#f5f5f5 0,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(top,#f5f5f5 0,rgba(255,255,255,0) 100%);background:linear-gradient(to bottom,#f5f5f5 0,rgba(255,255,255,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5',endColorstr='#00ffffff',GradientType=0)}
// .storyItemContainer .storyPage.updated.heading.wide .storyHeading{font-size:18px;color:#cf1818;text-transform:uppercase;margin:0 0 0 20px;font-family:black_sans;font-weight:500}
// .storyItemContainer .storyPage.updated.heading.wide ul{list-style:none;padding-left:30px;margin:10px 0}
// .storyItemContainer .storyPage.updated.heading.wide ul li{padding-left:10px;font-size:18px;margin:10px 0;position:relative;color:#000}
// .storyItemContainer .storyPage.updated.heading.wide ul li:before{content:'\002022';color:#cf1818;position:absolute;top:0;left:-10px}
// .storyItemContainer .storyPage.updated.heading.wide .relatedTags{margin-left:20px}
// .storyItemContainer .storyPage.updated.heading.wide .relatedTags .tagItem{float:left;margin:8px 20px 8px 0;padding:2px 6px 2px 3px;text-transform:uppercase;background:#000;position:relative}
// .storyItemContainer .storyPage.updated.heading.wide .relatedTags .tagItem a{float:left;font-family:black_sans;font-weight:500;font-size:14px;padding-left:4px;position:relative;color:#FFF}
// .storyItemContainer .storyPage.updated.heading.wide .relatedTags .tagItem a:before{content:'';border-right:3px solid transparent;border-bottom:3px solid #cf1818;background-color:#cf1818;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .storyItemContainer .storyPage.updated.heading.wide .relatedTags .tagItem a:after{content:'';border-top:3px solid #cf1818;border-left:3px solid transparent;position:absolute;height:18px;top:-8px;left:-10px;top:-2px;left:-3px}
// .storyItemContainer .storyPage.updated.shareBar{position:relative;margin:20px 0;width:100%;float:left;clear:left}
// .storyItemContainer .storyPage.updated.shareBar .timeShare{height:30px;width:100%;border-top:1px solid #eee}
// .storyItemContainer .storyPage.updated.shareBar .timeShare time,.storyItemContainer .storyPage.updated.shareBar .timeShare .red-square{color:#fff;font-size:14px;font-family:black_sans;font-weight:400;float:left;text-shadow:0 0 1px rgba(229,229,229,0.6);line-height:30px;background:#cf1818;padding:0 10px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare{float:right;cursor:pointer}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .shareShare{float:left;padding:7px 10px 6px 10px;color:#fff;font-size:14px;font-family:black_sans;font-weight:400;text-shadow:0 0 1px rgba(229,229,229,0.6);text-transform:capitalize;background:#1f1f1f}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare span{float:left}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon{background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat;width:34px;height:30px;margin:0;float:left}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.shareIcon{background-color:#1f1f1f;background-position:-274px -451px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.fb{background-position:-344px -228px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.fb:hover{background-position:-344px -266px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.tw{background-position:-380px -228px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.tw:hover{background-position:-381px -266px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.gplus{background-position:-414px -227px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.gplus:hover{background-position:-418px -266px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.email{background-position:-448px -227px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .icon.email:hover{background-position:-455px -266px}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .shareButtons{float:left;display:none}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare .shareButtons a{display:block;float:left}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare:hover,.storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare.active{background:transparent}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare:hover .shareShare,.storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare.active .shareShare{background:#1f1f1f}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare:hover .shareButtons,.storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare.active .shareButtons{display:block}
// .storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare:hover .shareIcon,.storyItemContainer .storyPage.updated.shareBar .timeShare .storyShare.active .shareIcon{float:right}
// @media all and (min-width:737px) and (max-width:1279px){.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft{width:600px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer{width:600px;padding:0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .tile.advert+.storyPage.quote{clear:both}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.tweet{margin-right:0;width:600px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.heading b{font-family:black_sans;font-weight:700}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.heading .wide{max-width:600px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem{float:left;margin:10px 15px 10px 0;width:190px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem.video{width:190px;margin:10px 15px 10px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem:nth-child(3n){margin:10px 0 10px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem:nth-child(4){clear:left}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem:nth-child(3n+4){clear:left}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem:nth-child(5){clear:none}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem:nth-child(4n+5){clear:none}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage .relatedItem .relatedImage{margin:0 0 5px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.title{min-height:180px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.title h1{font-family:black_sans;font-weight:700;width:92%;line-height:42px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.paragraph{max-width:600px;margin:20px 0;font-size:16px;line-height:21px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.paragraph p{max-width:600px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.paragraph p b{font-family:black_sans;font-weight:700}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video{max-width:600px;width:600px;margin:0 0 20px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video .storyPageVideo,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video .brightcove-experience-wrapper{width:600px;height:337px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.right,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.inline,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.wide{max-width:600px;width:600px;margin:0 0 20px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.right .storyPageVideo h4,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.inline .storyPageVideo h4,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.wide .storyPageVideo h4{bottom:4px;left:6px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.right .caption,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.inline .caption,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.wide .caption{margin:10px 0 0 0;padding:0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.right img,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.inline img,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.wide img{width:100%;height:auto}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.rightSmall{max-width:300px;width:300px;margin:0 0 20px 10px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.rightSmall .storyPageVideo,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.rightSmall .brightcove-experience-wrapper{width:300px;height:169px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.rightSmall .caption{margin:10px 0 0 0;padding:0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.video.rightSmall img{width:100%;height:auto}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.image.inline{max-width:300px;margin:0 15px 15px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.image.right{max-width:300px;margin:0 0 15px 15px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.image.rightSmall{max-width:300px;margin:0 0 15px 15px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.inline{width:300px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.inline img{width:300px;height:200px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.inline a{top:75px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.right{width:300px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.right img{width:300px;height:200px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.right a{top:75px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.wide{width:100%}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.wide img{width:100%;height:390px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.gallery.wide a{top:170px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.inline{max-width:300px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.inline .storyMap{height:200px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.right{max-width:300px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.right .storyMap{height:200px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.rightSmall{max-width:300px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.rightSmall .storyMap{height:200px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.wide{max-width:600px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.map.wide .storyMap{height:400px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.quote{width:100%}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.inline{width:300px;height:169px;float:left}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.inline .youtube,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.inline iframe{height:169px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.right{width:300px;height:169px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.right .youtube,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.right iframe{height:169px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.wide{width:100%;position:relative;padding-bottom:56.25%;float:left;height:0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.wide .youtube,.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.stYoutube.wide iframe{position:absolute;top:0;left:0;width:100%;height:100%}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.instagram.inline{max-width:300px;height:370px!important}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.rightSideBar{margin-left:10px}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.inline{max-width:300px;margin:0 15px 15px 0}
// .containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.rightSmall{max-width:300px;margin:0 0 15px 0}
// }
// @media all and (min-width:2000px){.containerBody .containerContent .sectionContainer .colContainer.storyPage .colLeft .storyItemContainer .storyPage.title h1{font-family:black_sans;font-weight:700;font-size:38px;line-height:42px;width:92%}
// }
// .device-mobile .colLeft{padding-bottom:0!important}
// .device-mobile .storyItemContainer{margin-bottom:0!important}
// .device-mobile .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem{width:100%}
// .device-mobile .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem .relatedImage{width:inherit;max-width:200px}
// .device-mobile .storyItemContainer .storyPage.relatedStories.wide .relatedItems .relatedItem h4{width:200px;margin-left:15px}
// .device-mobile .storyItemContainer .storyPage.title h1{font-size:30px}
// .device-mobile .storyItemContainer .storyPage.heading{font-size:22px;line-height:28px}
// .device-mobile .storyItemContainer .storyPage.quote:before{top:7px}
// .device-mobile .storyItemContainer .storyPage.quote blockquote{line-height:1.7em}
// .device-mobile .storyItemContainer .storyPage.quote blockquote q{font-size:22px}
// .device-mobile .storyItemContainer .storyPage.quote blockquote cite{font-size:14px}
// .device-mobile .storyItemContainer .storyPage.stYoutube{width:100%;position:relative;padding-bottom:56.25%;height:0;margin:20px 0;float:none}
// .device-mobile .storyItemContainer .storyPage.stYoutube iframe{position:absolute;top:0;left:0;width:100%;height:100%}
// .device-mobile .storyItemContainer .storyPage.video.smart .storyPageVideo>img{visibility:hidden}
// .device-mobile .storyPageCategory{text-align:center;background:#1f1f1f;color:#fff;border-bottom:3px solid #cf1818;text-transform:uppercase;font-size:22px;padding:4px 0 0 0;line-height:50px;height:auto}
// .device-mobile .storyItemContainer .storyPage.tweet{width:300px}
// .device-mobile .storyItemContainer .storyPage.tweet.standard.image{min-width:100%}
// .device-mobile .storyItemContainer .storyPage.tweet.standard.image .storyPageContent{padding-bottom:10px}
// .device-mobile .storyItemContainer .storyPage.tweet.standard.image .storyPageContent time.tweetDate{position:static;float:left;clear:both;padding:0 20px}
// .device-mobile .storyItemContainer .storyPage.tweet.standard.image .twitterLinks{position:static;float:left;clear:both;padding:10px 20px}
// .device-tablet .storyItemContainer .storyPage.video.smart .storyPageVideo>img{visibility:hidden}
// #more_stories{float:left;clear:left;width:100%;box-sizing:border-box;position:relative}
// #more_stories h3{font-size:18px;float:left;border-bottom:0;border-bottom:3px solid #000;margin-bottom:10px;padding-bottom:10px;width:100%;box-sizing:border-box}
// #more_stories .nextStories{background:#f4f4f4;float:left;clear:left;width:100%}
// #more_stories .tile{background:#fff;position:relative;width:100%;height:auto;border-bottom:1px solid #ccc;margin-bottom:10px;float:none;clear:left;box-shadow:1px 1px 3px 0 rgba(0,0,0,0.1)}
// #more_stories .tile .tileContentHolder{box-shadow:none;overflow:hidden}
// #more_stories .tile .tileContentHolder .tileImage{width:100px;height:100px;float:left;margin-right:15px}
// #more_stories .tile .tileContentHolder .tileImage img{width:100px;height:100px}
// #more_stories .tile .tileContentHolder .tileContent{padding:0 10px;z-index:3;position:relative}
// #more_stories .tile .tileContentHolder .tileContent h4{margin-top:0;font-size:18px;line-height:24px;padding:10px 0}
// #more_stories .tile .tileContentHolder .tileContent time{position:relative;float:none!important;left:auto;top:auto;background-color:transparent;background:transparent;font-family:black_sans;font-weight:400;font-size:12px;color:grey;text-shadow:0 0 1px rgba(229,229,229,0.2);line-height:initial;white-space:nowrap;display:inline;padding:0;margin-left:.5em;z-index:4}
// #more_stories .loadingMoreContent.button,#more_stories .backToTop.button{cursor:pointer;display:block;float:left;border-radius:5px;height:30px;line-height:30px;margin:15px 0 25px 5px;padding:3px 15px;font-size:18px}
// #more_stories .backToTop.button{background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -60px -265px;padding-right:35px;float:right;margin-right:5px}
// #more_stories .loadingMoreContent.button,#more_stories .backToTop.button{color:white;background-color:#cf1818}
// #more_stories .loadingMoreContent.button.noMore,#more_stories .backToTop.button.noMore{background-color:#000}
// body.device-mobile .storyItemContainer{padding:0}
// body.device-mobile .storyItemContainer .title.storyPage h1{padding:0 0 20px 5px}
// body.device-mobile .storyItemContainer .title .timeShare{height:30px}
// body.device-mobile .storyItemContainer .title .timeShare .storyShare{position:absolute;bottom:0;width:100%}
// body.device-mobile .storyItemContainer .title .storyTalent{height:auto!important;position:relative;top:-30px;margin:0;float:right;width:auto}
// body.device-mobile .storyItemContainer .title .storyTalent.sourceTags{padding:10px 0 0 10px;box-sizing:border-box}
// body.device-mobile .storyItemContainer .title .storyTalent.sourceTags p,body.device-mobile .storyItemContainer .title .storyTalent.sourceTags span{line-height:20px;float:left;margin:0 10px 0 0}
// body.device-mobile .storyItemContainer .title .storyTalent.sourceTags span.agency{float:left;margin:0 10px 0 0}
// body.device-mobile .storyItemContainer .title .storyTalent.sourceTags span.agency img{max-height:19px}
// body.device-mobile .storyItemContainer .title .storyTalent .storyTalentDetail{position:initial;white-space:normal;margin:0 65px 0 0;float:left;clear:left}
// body.device-mobile .storyItemContainer .title .storyTalent .storyTalentDetail h4,body.device-mobile .storyItemContainer .title .storyTalent .storyTalentDetail p{float:left;clear:left;font-size:12px}
// body.device-mobile .storyItemContainer .title .storyTalent .noImage{margin:0 5px 0 0}
// body.device-mobile .storyItemContainer .title .storyTalent .storyTalentMugshot{float:none;position:absolute;bottom:0;right:0;width:60px}
// body.device-mobile .storyItemContainer .title .storyTalent.sponsored{top:-35px}
// body.device-mobile .storyItemContainer .title .storyTalent.sponsored .storyTalentDetail a{float:left;clear:left}
// body.device-mobile .storyItemContainer .relatedStories.wide{padding:0}
// body.device-mobile .storyItemContainer .relatedStories.wide h3{left:10px}
// body.device-mobile .storyItemContainer .relatedStories.wide .relatedTags{padding-bottom:0}
// body.device-mobile .storyItemContainer .story_body_holder{padding:0 10px}
// body.device-mobile .storyItemContainer .tweet{margin:20px 0!important}
// body.device-mobile .storyItemContainer .tweet.standard .storyPageContent>p{padding-bottom:0!important}
// body.device-mobile .storyItemContainer .tweet.standard time.tweetDate{position:static;float:left;clear:left;padding:0 0 0 10px}
// body.device-mobile .storyItemContainer .tweet.standard.image .storyPageContent>p{padding-bottom:10px!important}
// body.device-mobile .storyItemContainer .tweet.standard.image time.tweetDate{position:absolute;float:none;clear:none}
// body.device-mobile #more_stories{margin:20px 0 0 0}
// body.device-mobile #more_stories h3{padding:0 10px 7px 10px;border-bottom:0}
// @media all and (min-width:1279px){.storyItemContainer .storyPage.title .timeShare{height:30px}
// .storyItemContainer .storyPage.title .timeShare .storyShare{clear:none;margin-left:0;margin-top:0}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentDetail{right:90px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot{float:none;position:absolute;bottom:0;right:0;width:80px}
// .storyItemContainer .storyPage.title .storyTalent .storyTalentMugshot img{width:80px}
// }
// @media all and (max-width:414px){.storyItemContainer .storyPage.title .timeShare .storyShare span{width:20%}
// .storyItemContainer .storyPage.title .timeShare .storyShare .shareButtons{width:80%}
// .storyItemContainer .storyPage.title .timeShare .storyShare .shareButtons span{width:25%}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon{width:100%}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.fb{background-position-x:-66px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.tw{background-position-x:-130px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.gplus{background-position-x:-192px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.email{background-position-x:-256px}
// }
// @media all and (max-width:375px){.storyItemContainer .storyPage.title .timeShare .storyShare .icon.fb{background-position-x:-70px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.tw{background-position-x:-134px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.gplus{background-position-x:-196px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.email{background-position-x:-260px}
// }
// @media all and (max-width:320px){.storyItemContainer .storyPage.title .timeShare .storyShare .icon.fb{background-position-x:-77px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.tw{background-position-x:-140px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.gplus{background-position-x:-203px}
// .storyItemContainer .storyPage.title .timeShare .storyShare .icon.email{background-position-x:-267px}
// }
// body.searchResultBody{background:#fff}
// .resultDescription{float:left;margin:10px 10px 0 10px}
// .resultDescription p{margin:10px 0;font-family:black_sans;font-weight:400;font-size:32px}
// .searchResult{float:left;clear:left;margin:10px}
// .searchResult a{display:block}
// .searchResult a .searchResultContentHolder{position:relative;float:left;padding-top:20px;margin-top:30px;border-top:1px solid #eee;width:100%}
// .searchResult a .searchResultContentHolder .searchResultImage{width:230px;height:130px;float:left;margin-right:10px}
// .searchResult a .searchResultContentHolder .searchResultImage img{width:230px;height:130px}
// .searchResult a .searchResultContentHolder .searchResultContent h3{font-family:black_sans;font-weight:500;font-size:20px}
// .searchResult a time{color:#fff;font-size:12px;font-family:black_sans;font-weight:300;position:absolute;text-shadow:0 0 1px rgba(229,229,229,0.6);top:-30px;left:0;line-height:30px;padding:0 10px;z-index:4;background:#1f1f1f}
// .oneNewsLiveContainer{position:absolute;right:0;top:5px;margin-right:70px;z-index:2}
// .oneNewsLiveContainer a{margin:0;width:245px;display:block;z-index:1;-webkit-transition:opacity 1s;-moz-transition:opacity 1s;-ms-transition:opacity 1s;-o-transition:opacity 1s;transition:opacity 1s;opacity:1;overflow:hidden;cursor:default}
// .oneNewsLiveContainer a img{max-width:100%}
// .oneNewsLiveContainer.hidden{overflow:hidden;z-index:1}
// .oneNewsLiveContainer.hidden a{opacity:0;cursor:default}
// body.device-mobile .oneNewsLiveMobileContainer{display:none;float:left;margin:0}
// body.device-mobile .oneNewsLiveMobileContainer:after{content:'';display:block;width:100%;height:6px;margin:0 0 -6px 0;position:relative;z-index:999;background:-moz-linear-gradient(top,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(0,0,0,0.3)),color-stop(100%,rgba(0,0,0,0)));background:-webkit-linear-gradient(top,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 100%)}
// body.device-mobile .oneNewsLiveMobileContainer img{max-width:100%;width:100%}
// .advert{position:relative}
// .advert div.title{width:100%;text-align:center;font-size:12px;font-family:Arial,sans-serif;color:#bab8b3;margin-top:10px}
// .device-mobile .advert div.title{margin-bottom:10px}
// #bottomFooterAd.advert.labelled.height_50{text-align:center;padding-top:0}
// #bottomFooterAd.advert.labelled.height_50 div.title{margin-top:0}
// div.colLeft.packed .advert div.title{margin-bottom:16px}
// .device-mobile .colLeft .advert{height:auto;width:100%;margin-left:auto;margin-right:auto;z-index:1;float:left;clear:both}
// .storyItemContainer .advert.right{float:right;height:auto;margin:10px 0 10px 10px;max-width:300px;padding:0;min-height:inherit;clear:right}
// .colRight .advert{min-height:250px;margin-bottom:35px}
// .colRight .advert .title{margin-bottom:10px}
// .colRightContainer .page-container .advert{width:264px;height:auto;min-height:inherit;border-bottom:1px solid #ccc;margin-bottom:10px;position:relative;clear:left;padding-bottom:10px}
// .device-desktop #billboardAd{padding-bottom:10px}
// #billboardAd-container{width:970px;margin-left:auto;margin-right:auto;position:relative;min-height:20px}
// @media all and (max-width:1279px){#billboardAd-container{margin-right:0;margin-left:60px}
// }
// @media all and (max-width:1025px){#billboardAd-container{margin-right:0;margin-left:0}
// #billboardAd-container button.open{right:10px}
// }
// #billboardAd-container .banner-ad-button{position:absolute;top:0;right:0;z-index:10;background:#000}
// #billboardAd-container .banner-ad-button button{padding:2px 5px 1px 20px;border:0;font-size:13px;cursor:pointer;display:none;white-space:nowrap}
// #billboardAd-container .banner-ad-button button.close{color:#fff;background:#000 url('clientlibs_less/content/images/content/ad-close.png?version=763817055') no-repeat 0 -1px}
// #billboardAd-container .banner-ad-button button.open{color:#fff;background:#000 url('clientlibs_less/content/images/content/ad-open.png?version=763817055') no-repeat 0 -1px;top:-9px;position:absolute;width:80px}
// #cboxOverlay{background:url('clientlibs_less/content/images/structure/lightbox_overlay.png?version=763817055') repeat 0 0;position:fixed;width:100%;height:100%;top:0;left:0;z-index:9999;overflow:hidden}
// #colorbox,#cboxWrapper{position:absolute;top:0;left:0;z-index:9999;overflow:hidden}
// #colorbox{outline:0;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box}
// #colorbox #cboxTopLeft{width:21px;height:21px;background:transparent}
// #colorbox #cboxTopRight{width:21px;height:21px;background:transparent;position:relative;z-index:5}
// #colorbox #cboxTopRight #cboxClose{background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817055') no-repeat -126px -240px;width:24px;height:24px;text-indent:-9999px;border:0;padding:0;margin:7px 0 0 -11px;overflow:visible;cursor:pointer}
// #colorbox #cboxTopRight #cboxClose:active,#colorbox #cboxTopRight #cboxClose:focus{outline:0}
// #colorbox #cboxBottomLeft{width:21px;height:21px;background:transparent}
// #colorbox #cboxBottomRight{width:21px;height:21px;background:transparent}
// #colorbox #cboxMiddleLeft{width:21px;background:transparent}
// #colorbox #cboxMiddleRight{width:21px;background:transparent}
// #colorbox #cboxTopCenter{height:21px;background:transparent}
// #colorbox #cboxBottomCenter{height:21px;background:transparent}
// #colorbox #cboxContent{background:#fff;position:relative;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box}
// #colorbox #cboxContent #cboxError{padding:50px;border:1px solid #ccc}
// #colorbox #cboxContent #cboxLoadedContent{margin-bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box}
// #colorbox #cboxContent #cboxTitle{position:absolute;bottom:4px;left:0;margin:0;text-align:center;width:100%;color:#949494}
// #colorbox #cboxContent #cboxCurrent{position:absolute;bottom:4px;left:58px;color:#949494}
// #colorbox #cboxContent #cboxLoadingOverlay,#colorbox #cboxContent #cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;height:100%}
// #colorbox #cboxContent #cboxPrevious,#colorbox #cboxContent #cboxNext,#colorbox #cboxContent #cboxSlideshow{border:0;padding:0;margin:0;overflow:visible;width:auto;cursor:pointer;background:0}
// #colorbox #cboxContent #cboxPrevious:active,#colorbox #cboxContent #cboxNext:active,#colorbox #cboxContent #cboxSlideshow:active,#colorbox #cboxContent #cboxClose:active{outline:0}
// #colorbox #cboxContent .cboxPhoto{float:left;margin:auto;border:0;display:block;max-width:none;-ms-interpolation-mode:bicubic}
// #colorbox #cboxContent .cboxIframe{width:100%;height:100%;display:block;border:0;background:#fff}
// .lightboxContainer{width:466px;min-height:800px}
// @-webkit-keyframes progress{to{background-position:30px 0}
// }
// @-moz-keyframes progress{to{background-position:30px 0}
// }
// @keyframes progress{to{background-position:30px 0}
// }

// .containerBody .containerContent .breakingContainer.breakWeather{width:auto;margin-left:0;padding-left:75px;margin-bottom:0}
// .weatherContainer{margin-top:-9px;width:2000px;float:left;background:url('clientlibs_less/content/images/content/weatherbackgrounds/Sunny_Fine.jpg?version=763817056') no-repeat 0 0;background-repeat:no-repeat;background-position:0 0}
// .weatherContainer.day.partcloudy{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/light-cloud.jpg?version=763817056')}
// .weatherContainer.day.fine{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Sunny_Fine.jpg?version=763817056')}
// .weatherContainer.day.fewshowers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .weatherContainer.day.showers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .weatherContainer.day.drizzle{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .weatherContainer.day.fog{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Fog_v2.jpg?version=763817056')}
// .weatherContainer.day.rain{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain.jpg?version=763817056')}
// .weatherContainer.day.hail{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Hail.jpg?version=763817056')}
// .weatherContainer.day.snow{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/snow_v1.jpg?version=763817056')}
// .weatherContainer.day.thunder{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Thunder.jpg?version=763817056')}
// .weatherContainer.day.wind{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Wind.jpg?version=763817056')}
// .weatherContainer.day.cloud{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/cloudy_v1.jpg?version=763817056')}
// .weatherContainer.night.partcloudy{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/clear-night.jpg?version=763817056')}
// .weatherContainer.night.fine{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/clear-night.jpg?version=763817056')}
// .weatherContainer.night.fewshowers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .weatherContainer.night.showers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .weatherContainer.night.drizzle{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .weatherContainer.night.fog{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .weatherContainer.night.rain{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/storm.jpg?version=763817056')}
// .weatherContainer.night.hail{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Hail.jpg?version=763817056')}
// .weatherContainer.night.snow{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Snow_v2.jpg?version=763817056')}
// .weatherContainer.night.thunder{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/lighting.jpg?version=763817056')}
// .weatherContainer.night.wind{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .weatherContainer.night.cloud{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .weatherContainer .colContainer .weatherContentContainer{float:left;clear:both;width:2000px;margin:20px 0 0 10px}
// .weatherContainer .colContainer .weatherUpperContainer{float:left;width:2000px;min-height:1000px;position:relative;margin-left:65px}
// .weatherContainer .colContainer .weatherUpperContainer p{color:#fff}
// .weatherContainer .colContainer .weatherUpperContainer .icon{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat}

// #.weatherContainer .colContainer .weatherUpperContainer .leftPanel {width:470px;height:450px;margin-left:-31px;color:#fff;position:relative;float:left;background-size:450px;font-size: 45px;}
// .weatherContainer .colContainer .weatherUpperContainer .leftPanel{width:470px;height:470px;margin-left:-31px;color:#fff;position:relative;float:left;background-image:url('');background-size:585px;}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail{width:730px;height:470px;color:#fff;position:relative; display: inline-block;}
// .weatherContainer .colContainer .weatherUpperContainer .rightPanel{width:400px;height:470px;color:#fff;position:relative; float: right; margin-right: 215px;}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail svg{width:100%;height:100%}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail svg path.bg{fill:rgba(0,0,0,0.2);stroke:#000;stroke-width:4px}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail svg path.day{fill:#bbb}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail svg path.marker{fill:#fff}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast{display:none}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.active{display:block}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .forecastName{position:absolute;top:10%;width:100%;text-align:center;text-transform:uppercase;font-size:24px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .current{display:none}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .max,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast .min{position:absolute;font-size:60px;font-family:black_sans;font-weight:400;bottom:58%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .max::before,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast .min::before{display:inline-block;vertical-align:-10px;margin-right:5px;content:'';width:33px;height:63px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .max{right:50%;margin-right:6%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .max::before{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -322px -395px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .min{left:50%;margin-left:6%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .min::before{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -359px -395px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .sunrise,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast .sunset{font-family:black_sans;font-weight:400;text-align:center;font-size:16px;position:absolute;top:46%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .sunrise span,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast .sunset span{font-family:black_sans;font-weight:500}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .sunrise{left:10%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .sunset{right:10%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon{position:absolute;top:52%;left:50%;width:70px;height:70px;margin-left:-35px;margin-top:-40px;background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -9999px -9999px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.fine{background-position:-28px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.partcloudy{background-position:-25px -127px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.fewshowers{background-position:-110px -127px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.showers{background-position:-186px -127px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.drizzle{background-position:-419px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.fog{background-position:-893px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.rain{background-position:-342px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.hail{background-position:-187px -205px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.snow{background-position:-656px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.thunder{background-position:-195px -43px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.wind{background-position:-893px -127px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationIcon.cloud{background-position:-106px -205px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .situationDescription{position:absolute;top:60%;width:80%;padding:0 10%;font-family:black_sans;font-weight:400;font-size:18px;text-align:center}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast .windIcon,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast .windDirection{display:none}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .max,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast.observation .min{position:absolute;font-size:30px;font-family:black_sans;font-weight:400;bottom:57%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .max::before,.weatherContainer .colContainer .weatherUpperContainer .locationDetail .forecast.observation .min::before{display:inline-block;vertical-align:-4px;margin-right:5px;content:'';width:17px;height:32px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .max{margin-right:15%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .max::before{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -200px -406px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .min{margin-left:15%}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .min::before{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -231px -412px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .current{position:absolute;width:100%;text-align:center;bottom:52%;display:block;font-size:112px;font-family:black_sans;font-weight:300}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .current span{position:absolute;top:-22px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .windIcon{display:block;position:absolute;bottom:12%;left:50%;margin-left:-29px;width:58px;height:58px;background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -120px -399px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .windIcon div{display:block;width:20px;height:30px;margin:14px 19px 14px 19px;background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -80px -407px}
// .weatherContainer .colContainer .weatherUpperContainer  .forecast.observation .windDirection{display:block;position:absolute;bottom:6%;width:100%;font-family:black_sans;font-weight:400;font-size:18px;text-align:center}
// .weatherContainer .colContainer .weatherUpperContainer .map{float:right;margin-top:-50px;width:386px;height:473px;background:url('clientlibs_less/content/images/structure/weathermap.png?version=763817056') no-repeat 0 0;position:relative}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast{position:absolute;width:110px;height:22px;padding:8px 6px;border-radius:5px;background:rgba(0,0,0,0.6);cursor:pointer;display:none}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.active{display:block}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.kaitaia{top:10px;left:65px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.whangarei{top:20px;left:200px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.auckland{top:80px;left:120px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hamilton{top:120px;left:135px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.tauranga{top:85px;left:265px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.napier{top:165px;left:305px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.palmerston-north{top:205px;left:255px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.wellington{top:245px;left:235px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.taupo{top:125px;left:260px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.new-plymouth{top:160px;left:110px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.nelson{top:235px;left:70px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.greymouth{top:275px;left:30px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.christchurch{top:320px;left:200px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.queenstown{top:370px;left:-25px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.dunedin{top:400px;left:150px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.invercargill{top:430px;left:-20px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hokitika{top:315px;left:15px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps{margin-top:3px;white-space:nowrap}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps span{padding:0 2px 0 0;color:#808080}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps .high{color:#e30000}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps .high+.degs{color:#e30000}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps .low{color:#74f3ff}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .temps .low+.degs{color:#74f3ff}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon{float:left;width:38px;height:38px;margin-top:-8px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.partcloudy{background-position:-570px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.fine{background-position:-25px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.fewshowers{background-position:-615px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.showers{background-position:-661px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.drizzle{background-position:-252px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.fog{background-position:-525px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.rain{background-position:-207px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.hail{background-position:-388px -341px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.snow{background-position:-388px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.thunder{background-position:-116px -286px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast .icon.wind{background-position:-236px -341px}
// .weatherContainer .colContainer .weatherUpperContainer .
// map .locationForecast .icon.cloud{background-position:-335px -341px}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.kaitaia .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.auckland .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hamilton .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.new-plymouth .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.nelson .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.greymouth .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hokitika .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.queenstown .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.invercargill .temps{float:right}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.kaitaia .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.auckland .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hamilton .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.new-plymouth .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.nelson .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.greymouth .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.hokitika .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.queenstown .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.invercargill .icon{float:right}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.whangarei .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.tauranga .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.napier .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.palmerston-north .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.wellington .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.taupo .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.christchurch .temps,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.dunedin .temps{float:left}
// .weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.whangarei .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.tauranga .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.napier .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.palmerston-north .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.wellington .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.taupo .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.christchurch .icon,.weatherContainer .colContainer .weatherUpperContainer .map .locationForecast.dunedin .icon{float:left}
// .weatherContainer .colContainer .weatherUpperContainer .timings{float:left;clear:left;margin-left:25px;font-size:55px;color:#fff;}
// .weatherContainer .colContainer .weatherUpperContainer .forecasts{float:left;clear:left;margin-top:25px}
// .weatherContainer .colContainer .weatherUpperContainer .leftPanel .forecastItem{width:450px;height:450px;padding:10px;border-radius:10px;background:rgba(0,0,0,0.6);border:4px solid #fff;float:left;margin:0px;margin-top:0;text-align:center}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem{width:310px;height:145px;padding:10px;border-radius:10px;background:rgba(0,0,0,0.6);border:4px solid #fff;float:left;margin:9px;margin-top:0;text-align:center}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem.active,.weatherContainer .colContainer .weatherUpperContainer .forecastItem:hover{cursor:pointer}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem h3{color:#fff;font-family:black_sans;font-weight:400;font-size:55px;text-shadow:0 0 1px rgba(229,229,229,0.6);text-align:center;text-transform:capitalize;margin-bottom:6px}
// .weatherContainer .colContainer .weatherUpperContainer .juma {height:450px; width:350px; }
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails{display:inline-block;vertical-align:middle}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails .tempIcon{width:15px;height:25px;float:left;background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat;margin:4px 2px 0 0}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails .tempIcon.high{background-position:-267px -415px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails .tempIcon.low{background-position:-297px -417px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails p{float:left;margin:4px 0 0 2px;font-size:50px;text-shadow:0 0 1px rgba(229,229,229,0.6);font-family:black_sans;font-weight:400}
// .weatherContainer .colContainer .weatherUpperContainer .rrHeading{float:left;color:#fff;text-shadow:0 0 1px rgba(229,229,229,0.6);font-family:black_sans;font-weight:400;margin:0;height:60px;line-height:60px;font-size:30px}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarDate{float:left;clear:left}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarDate time{color:#fff;font-size:12px;text-shadow:0 0 1px rgba(229,229,229,0.6);line-height:30px;background:#cf1818;padding:0 10px;float:left;clear:left}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarDate p{float:left;text-transform:uppercase;margin-left:10px}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityList{float:left;clear:left;margin:20px 0}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityList .city{float:left;line-height:40px;padding:20px 10px;min-width:140px;text-align:center;color:#fff;text-transform:uppercase;border:2px solid transparent;border-radius:10px;background:rgba(0,0,0,0.6);font-size:18px;font-family:black_sans;font-weight:500;margin-right:20px;cursor:pointer}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityList .city.active{border:2px solid #fff}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap{float:left;clear:left;width:530px;height:530px}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap .rainMap{display:none}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap .rainMap img{width:530px;height:530px}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap .rainMap.active{display:block}
// .weatherContainer .colContainer .weatherUpperContainer .rainRadarKey{float:left;clear:left;background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat -28px -526px;width:599px;height:39px;margin-top:20px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastHeading{float:left;color:#fff;font-family:black_sans;font-weight:400;font-size:30px;height:60px;line-height:60px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastDate{float:left;clear:left}
// .weatherContainer .colContainer .weatherUpperContainer .forecastDate time{color:#fff;font-size:12px;font-family:black_sans;font-weight:300;text-shadow:0 0 1px rgba(229,229,229,0.6);line-height:30px;background:#cf1818;padding:0 10px;float:left;clear:left}
// .weatherContainer .colContainer .weatherUpperContainer .forecastDate p{float:left;margin-left:10px;text-transform:uppercase}
// .weatherContainer .colContainer .weatherUpperContainer .forecastContent{float:left;clear:left;width:854px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastContent p{color:#fff;font-size:16px;width:854px}
// .weatherContainer .colContainer .weatherUpperContainer .storyPage.video{float:left;clear:both;margin:20px 0}
// .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo{width:854px;position:relative;float:left;clear:both;height:480px}
// .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo img{width:100%;z-index:2;position:relative}
// .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper{width:854px;height:480px}
// .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper object,.weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper iframe{position:absolute;top:0;left:0;z-index:1;width:854px;height:480px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer{position:absolute;right:10px;top:10px;width:300px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .video h3{color:#000}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile{height:auto; font-size: 16;}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile.advert.banner{height:360px;width:240px;float:right}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile.advert.banner .title{display:none}

// .weatherTile{width:300px;height:212px;float:left;clear:left}
// .weatherTile .interior{position:relative;padding:10px}
// .weatherTile .interior a{display:block;cursor:pointer}
// .weatherUpperContainer .weatherTile h3{color:#fff}
// @media all and (max-width:1279px){.weatherContainer{width:100%;height:890px}
// .weatherContainer .colContainer .weatherContentContainer .storyPage.video .storyPageVideo{width:540px;height:304px}
// .weatherContainer .colContainer .weatherContentContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper{width:540px;height:304px}
// .weatherContainer .colContainer .weatherContentContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper object,.weatherContainer .colContainer .weatherContentContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper iframe{position:absolute;top:0;left:0;z-index:1;width:540px;height:304px}
// .weatherContainer .colContainer .weatherContentContainer .forecastContent{width:540px}
// .weatherContainer .colContainer .weatherContentContainer .forecastContent p{width:540px}
// .weatherContainer .colContainer .weatherUpperContainer .locationDetail{-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);margin-left:-32px;margin-top:-42px}
// .weatherContainer .colContainer .weatherUpperContainer .map{-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);float:left;margin-top:-80px;margin-left:-50px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem{width:125px;height:60px;padding:5px;margin:8px; border: 2px solid #fff;}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails p{font-size:15px}
// .weatherContainer .colContainer .weatherUpperContainer .forecastItem .forecastDetails .tempIcon{-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);margin:0;margin-top:1px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer{position:absolute;right:10px;top:10px;width:300px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile.advert{height:290px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile.advert.banner{height:360px;width:240px;float:right;position:relative;top:10px;right:10px}
// }
// @media all and (min-width:737px) and (max-width:1025px) and (orientation:landscape){.weatherContainer .colContainer .weatherUpperContainer .weatherContentContainer{margin-left:10px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer{position:absolute;right:10px;top:10px;width:300px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .video h3{color:#000}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile.advert.banner{height:360px;width:240px;float:right;position:relative;top:10px;right:10px}
// .weatherContainer .colContainer .weatherUpperContainer.video .weatherAdsContainer,.weatherContainer .colContainer .weatherUpperContainer.maps .weatherAdsContainer{position:absolute;right:10px;top:136px}
// .weatherContainer .colContainer .weatherUpperContainer.video .weatherAdsContainer .video h3,.weatherContainer .colContainer .weatherUpperContainer.maps .weatherAdsContainer .video h3{color:#FFF}
// }
// @media all and (min-width:737px) and (max-width:1025px) and (orientation:portrait){.weatherContainer .colContainer .weatherUpperContainer{width:680px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherContentContainer{width:680px;margin-left:23px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherContentContainer .locationDetail{-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);margin-left:-70px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherContentContainer .map{-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);margin-left:-60px}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer{position:static}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .tile{position:relative;right:30px;top:77px;float:right}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .weatherTile{float:left}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .weatherTile h3{color:#000}
// .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer .latest{margin-top:67px}
// .weatherContainer .colContainer .weatherUpperContainer.video .weatherAdsContainer .latest h3{color:#FFF}
// }
// .device-mobile .containerBody .containerContent .breakingContainer.breakWeather{padding:12px 10px;box-sizing:border-box}
// .device-mobile .containerBody .containerContent .breakingContainer.breakWeather p{padding:0;margin:0;font-size:14px}
// .device-mobile .containerBody .containerContent .breakingContainer.breakWeather .breakHeader{float:none;font-size:18px;line-height:1em;height:auto;margin:10px 0}
// .device-mobile .weatherContainer{height:auto;background:none!important}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer,.device-mobile .weatherContainer .colContainer .weatherLowerContainer{width:100%;margin:0;padding:10px;box-sizing:border-box}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer{background-repeat:no-repeat;background-position:0 0;background-size:cover}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.partcloudy{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/light-cloud.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.fine{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Sunny_Fine.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.fewshowers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.showers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.drizzle{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzle.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.fog{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Fog_v2.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.rain{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.hail{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Hail.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.snow{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/snow_v1.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.thunder{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Thunder.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.wind{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Wind.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.day.cloud{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/cloudy_v1.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.partcloudy{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/clear-night.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.fine{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/clear-night.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.fewshowers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.showers{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.drizzle{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Rain_Drizzel.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.fog{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.rain{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/storm.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.hail{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Hail.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.snow{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Snow_v2.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.thunder{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/lighting.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.wind{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer.night.cloud{background-image:url('clientlibs_less/content/images/content/weatherbackgrounds/Cloud_Stormy_v3.jpg?version=763817056')}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .weatherContentContainer{width:100%;margin:0}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .locationDetail{-webkit-transform:scale(0.71);-moz-transform:scale(0.71);-ms-transform:scale(0.71);-o-transform:scale(0.71);transform:scale(0.71);margin:-60px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .map{-webkit-transform:scale(0.65);-moz-transform:scale(0.65);-ms-transform:scale(0.65);-o-transform:scale(0.65);transform:scale(0.65);margin:-82px -43px -82px -43px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .forecasts{margin:15px 0}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .forecastItem{float:left;width:40%}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .forecastItem h3{font-size:18px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .weatherAdsContainer{position:static}

// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityList .city{clear:left;margin-bottom:10px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap{width:100%;height:auto}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .rainRadarCityMap .rainMap img{width:100%;height:auto}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .rainRadarKey{display:none}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .forecastContent{width:300px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .forecastContent p{width:300px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo{width:300px;height:169px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper{width:300px;height:169px}
// .device-mobile .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper object,.device-mobile .weatherContainer .colContainer .weatherUpperContainer .storyPage.video .storyPageVideo .brightcove-experience-wrapper iframe{width:300px;height:169px}
// @media screen and (max-width:1024px){.device-mobile .weatherContainer .colContainer .weatherLowerContainer{padding-bottom:20px}
// }
// @media all and (max-width:320px){.device-mobile .weatherContainer .colContainer .weatherUpperContainer.video .weatherAdsContainer{margin:10px -10px}
// }
// @media all and (max-width:1025px){.weatherContainer time{font-family:black_sans!important;font-weight:400!important}
// }
// h1{height:60px;line-height:60px}
// h1.navigationWeather:hover a{color:#000;text-shadow:0 0 1px rgba(190,190,190,0.8)}
// .weatherWidget{float:left;height:60px;line-height:60px;position:relative}
// @media all and (min-width:737px) and (max-width:1279px){.weatherWidget{margin-right:20px}
// }
// .weatherWidget div{float:left;height:60px;line-height:60px}
// .weatherWidget .weatherWidgetIconHolder{text-align:center;margin:0 6px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon{background:url('clientlibs_less/content/images/structure/weathersprites.svg?version=763817056') no-repeat;float:none;line-height:normal;display:inline-block;vertical-align:middle;width:38px;height:38px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.partcloudy{background-position:-570px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.fine{background-position:-25px -610px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.fewshowers{background-position:-615px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.showers{background-position:-661px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.drizzle{background-position:-252px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.fog{background-position:-525px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.rain{background-position:-207px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.hail{background-position:-388px -665px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.snow{background-position:-388px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.thunder{background-position:-116px -614px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.wind{background-position:-236px -665px}
// .weatherWidget .weatherWidgetIconHolder .weatherWidgetIcon.cloud{background-position:-335px -665px}
// .weatherWidget .weatherWidgetDetails .weatherWidgetHigh{color:#cf1818;font-size:16px}
// .weatherWidget .weatherWidgetDetails .weatherWidgetHigh+.weatherWidgetDegrees{color:#cf1818}
// .weatherWidget .weatherWidgetDetails .weatherWidgetLow{color:#39c;font-size:16px}
// .weatherWidget .weatherWidgetDetails .weatherWidgetLow+.weatherWidgetDegrees{color:#39c}
// .weatherWidget .weatherWidgetCity .weatherLink p{padding:0 6px;float:left;font-family:black_sans;font-weight:500;font-weight:normal;line-height:60px;font-size:15px;color:#000;text-transform:capitalize;margin:0;border:none!important;cursor:pointer}
// .weatherWidget .weatherWidgetCity .weatherLink p:hover,.weatherWidget .weatherWidgetCity .weatherLink p.active{background:transparent;border:none!important}
// .weatherWidget .weatherWidgetCity .weatherLink+a{float:left;display:block;width:10px;height:60px;position:relative;cursor:pointer}
// .weatherWidget .weatherWidgetCity .weatherLink+a:after{content:'';border-top:4px solid #1f1f1f;border-right:4px solid transparent;border-left:4px solid transparent;position:absolute;top:28px;right:0}
// body.device-mobile .weatherWidgetHolder{overflow:hidden;position:relative;top:0;right:0;height:60px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
// body.device-mobile .weatherWidgetHolder .weatherWidget{height:60px;background:#fff;z-index:10;position:absolute;top:0;left:0;-webkit-transition:all .4s linear;-moz-transition:all .4s linear;-ms-transition:all .4s linear;-o-transition:all .4s linear;transition:all .4s linear}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable{float:left;width:100%;height:60px;line-height:60px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCity{float:left;height:60px;line-height:60px;overflow:hidden}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCity .wwFullCity{float:left;display:none;height:51px;line-height:53px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCity .abbrv{float:left;display:block}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCity select{background:url(clientlibs_less/content/images/content/drop-down-arrow.png) right no-repeat;border:0;font-family:black_sans;font-weight:500;font-size:14px;height:69px;-webkit-appearance:none;-moz-appearance:none}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetSelectHolder{height:60px;float:left;text-align:center;display:none}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetSelectHolder .weatherWidgetSelect{width:12px;height:30px;line-height:48px;margin:15px;display:inline-block;vertical-align:middle;position:relative}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetSelectHolder .weatherWidgetSelect:after{content:'';border-top:8px solid #1f1f1f;border-right:6px solid transparent;border-left:6px solid transparent;position:absolute;top:12px;left:0}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCity .wwFullCity h2{font-family:black_sans;font-weight:500;color:#000;font-weight:normal;line-height:60px;font-size:16px;cursor:pointer;text-transform:capitalize}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCloseButtonContainer{height:60px;text-align:center;float:right}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCloseButtonContainer:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-12px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCloseButtonContainer .weatherWidgetCloseButton{float:none;visibility:visible;height:25px;width:25px;margin:0;overflow:hidden;display:inline-block;vertical-align:middle}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetCloseButtonContainer .weatherWidgetCloseButton .closeIcon{float:none;border-radius:40px;background:url('clientlibs_less/content/images/structure/sprites.svg?version=763817056') no-repeat -126px -240px;width:24px;height:24px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder{height:50px;line-height:53px;float:left;text-align:center}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a{white-space:nowrap}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a .centreBlock{height:50px;float:left;text-align:center;width:95px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a .centreBlock:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-0.25em}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a .centreBlock .weatherWidgetIconHolder{text-align:center;margin:0;display:inline-block;vertical-align:middle;height:60px;line-height:50px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a .centreBlock .weatherWidgetDetails{display:inline-block;font-family:black_sans;font-weight:500;font-size:14px;vertical-align:middle;float:none;margin:0;height:55px;line-height:60px;min-width:55px}
// body.device-mobile .weatherWidgetHolder .weatherWidget .weatherWidgetHolderTable .weatherWidgetAnchorHolder a.inactive{pointer-events:none}
// body.device-mobile .weatherWidgetHolder .weatherWidget.active .weatherWidgetSelectHolder{display:block}
// body.device-mobile .weatherWidgetHolder .weatherWidget.active .weatherWidgetCity .wwFullCity{display:block}