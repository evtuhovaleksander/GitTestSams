var startTime;
var checkTime;

//Initialize function
var init = function () {
	
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;



function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}


var vis=true;
function dopic() {
	var img = document.getElementById('pic1');
	if(vis){img.style.visibility='hidden';}else {img.style.visibility='visible';}vis=!vis;
    
}


function screenfunk() {
	var w=window;
	document.getElementById('divbutton3').innerHTML="screen info: width="+w.screen.width+"   height:"+w.screen.height;
    
}




function colorfunc() {
	$("#text3").css("color","#48ff00");
	$("#text2").css("color","#48ff00");  
	
	
	
	
	
	
	
	
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
