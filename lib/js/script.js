var t=90;
 function watch(){
	 var d=new Date();
	 var h=d.getHours();
	 var m=d.getMinutes();
	 var s=d.getSeconds();
 document.getElementById('a').style.transform='rotate('+((h*30)+t)+'deg)';
 document.getElementById('b').style.transform='rotate('+((m*6)+t)+'deg)';
 document.getElementById('c').style.transform='rotate('+((s*6)+t)+'deg)';
 if(h==15&&m==57&&s==30){
	 alert("wake up");
 }
 }
  setInterval(watch,1000);