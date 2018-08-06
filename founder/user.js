var store="https://nimble-fig.cloudvent.net/users/founder";

var liveDir=store+"/live/";
var staticDir=store+"/static/";

loadScript(liveDir+"2018imeta.tabshare.js?v=0");
loadScript(liveDir+"2017imeta.tabshare.js");

function loadRecord(){
  a=location.href; hash=a.slice(a.indexOf('#'));
  wait(); rec=location.hash.replace('#tabshare','');
  loadScript(staticDir+'tabjs/'+rec+'.tabshare.js');
};

document.body.style.backgroundImage="url('https://cdn.tabshare.cloud/img/real-carbon-fibre.png')";
if(location.href.indexOf('#tabshare')>0){loadRecord()}
