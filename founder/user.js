var store="https://users-a6eb349d.cdn.memsites.com/";
var liveDir=store+"/live/";
var staticDir=store+"/static/";

loadScript(liveDir+"2018imeta.tabshare.js");
loadScript(liveDir+"2017imeta.tabshare.js");

function loadRecord(){
  a=location.href; hash=a.slice(a.indexOf('#'));
  wait(); rec=location.hash.replace('#tabshare','')
  loadScript(staticDir+'tabjs/'+rec+'.tabshare.js');
};

if(location.href.indexOf('#tabshare')){loadRecord()}
