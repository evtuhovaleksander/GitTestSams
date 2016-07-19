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

function printfunk() {
var canvas=document.getElementById("draw")
var x=canvas.getContext("2d");
x.fillText("Теперь Вы можете отображать", 15, 40);
x.font = 'italic 30pt Calibri';
x.fillStyle="red";
x.fillText("произвольный текст", 100, 70);
x.fillStyle="blue";
x.font = 'italic 15pt Calibri';
x.fillText("в элементе canvas.", 60, 120);
}

function boardfunk() {
	var canvas=document.getElementById("draw2")
	var x=canvas.getContext("2d");
	
	
	var i;
	var j;
	
	
	x.fillStyle="white";
	  x.fillRect(0,0,320,320)
	
	
	for (i = 0; i < 320; i+=80) {
		for (j = 0; j < 320; j+=80) {
			  var xx=i;
			  var yy=j;
			  x.fillStyle="black";
			  x.fillRect(xx,yy,40,40)
			
		}}		  
		
	
	for (i = 40; i < 320; i+=80) {
		for (j = 40; j < 320; j+=80) {
			  var xx=i;
			  var yy=j;
			  x.fillStyle="black";
			  x.fillRect(xx,yy,40,40)
			
		}}	
	
	
	
	}

function colorfunc() {
	$("#text3").css("color","#48ff00");
	$("#text2").css("color","#48ff00");  
	//$("#text1").animate(backgroundColor:"red", 300);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
