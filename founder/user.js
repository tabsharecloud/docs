//dir="https://f002.backblazeb2.com/file/tabshare/founder/"
dir="https://user-a6eb349d.cdn.memsites.com/";

loadScript(dir+"2018imeta.tabshare.js");
loadScript(dir+"2017imeta.tabshare.js");

function loadRecord(){
  a=location.href; hash=a.slice(a.indexOf('#'));
  wait();
  rec=location.hash.replace('#tabshare','')
  loadScript(dir+'tabshares/compiled/'+rec+'.tabshare.js');
};

if(location.href.indexOf('#tabshare')){loadRecord()}
  
