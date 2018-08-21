	var store='https://nimble-fig.cloudvent.net/users/founder';
var liveDir=store+'/live/';
var staticDir=store+'/static/';

loadScript(liveDir+'2018imeta.tabshare.js?v=0');
loadScript(liveDir+'2017imeta.tabshare.js');

function loadRecord(){a=location.href;
	hash=a.slice(a.indexOf('#'));wait();
	rec=location.hash.replace('#tabshare','');
	loadScript(staticDir+'tabjs/'+rec+'.tabshare.js');
};

if(location.href.indexOf('#tabshare')>0){loadRecord()}

// lazy load icos and backgound img from cdn
var cicdn='https://a1ugk98en.cloudimg.io/cdno/n/n/https://img.tabshare.cloud';
document.body.style.backgroundImage='url('+cicdn+'/paper/escher-sq.png)';
$id('png-ico').href=cicdn+'/ico/favicon-16x16.png';
$id('touch-ico').href=cicdn+'/ico/apple-touch-icon.png';
$id('mac-ico').href=cicdn+'/ico/safari-pinned-tab.svg';

// $id('old-ico').href=cicdn+'/ico/favicon.ico';

function changeViewPort(key, val) {
    var reg = new RegExp(key, "i"), oldval = document.querySelector('meta[name="viewport"]').content;
    var newval = reg.test(oldval) ? oldval.split(/,\s*/).map(function(v){ return reg.test(v) ? key+"="+val : v; }).join(", ") : oldval+= ", "+key+"="+val ;
    document.querySelector('meta[name="viewport"]').content = newval;
}

if( /iPad|iPhone|iPod|Android/i.test(navigator.userAgent) ){
    window.addEventListener("orientationchange", function() { 
        changeViewPort("maximum-scale", 1);
        changeViewPort("maximum-scale", 10);
    }
}
