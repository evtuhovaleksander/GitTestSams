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
	
	
	x.fillStyle="red";
	  x.fillRect(0,0,320,320)
	//x.fillStyle="white";
	 // x.fillRect(40,40,280,280)
	
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




var bls=[];


function circle(x, y, r, vvx, vvy , colll) // класс задающий круг
{
    this.x = x; // координата х
    this.y = y; // координата у
    this.r = r; // радиус
    this.vx=vvx;
    this.vy=vvy;
    this.coll=colll;
    
    this.draw = function(globalAlpha) // метод рисующий круг
    {
        context.globalAlpha = globalAlpha; // "прозрачность"
        context.fillStyle = this.coll; // цвет заливки
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        context.fill();
    };
    
    this.update = function(idd)
    {
    	
    			var changedir=false;
    			
    			if (this.y - this.r < 0 || this.y + this.r > 320) // соприкосновение с "полом" и "потолком" холста
    	        {
    	            changedir=true;
    	        }
    			/*for(var k=0; k<bls.length; k++) 
    			{
    	    		if(idd!=k)
    	    		{
    	    			if (sqrt((this.y-bls[k].y)^2+(this.x-bls[k].x)^2)<this.r){changedir=true;}
    	    		}
    	    	}*/
    			if(changedir){this.vy = -this.vy;}
    			
    			
    			changedir=false;
    			
    	        if (this.x - this.r < 0 || this.x + this.r > 320) // соприкосновение с левой и правй "стенкой" холста 
    	        {
    	            changedir=true;
    	        }
    	        
    	       /* for(var k=0; k<bls.length; k++) 
    			{
    	    		if(idd!=k)
    	    		{
    	    			if (sqrt((this.y-bls[k].y)^2+(this.x-bls[k].x)^2)<this.r){changedir=true;}
    	    		}
    	    	}*/
    	        
    	        if(changedir){this.vx = -this.vx;}
    	        // приращение координат
    	        this.x += this.vx;
    	        this.y += this.vy;
    		
    		
    		};

    	
    };
    
    
    

function rect(x, y, width, height) // класс задающий прямоугольник
{
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.draw = function(color, globalAlpha) // функция рисует прямоугольник согласно заданным параметрам
    {
        context.globalAlpha = globalAlpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.width, this.height);
    };
}




function draw() // рисуем на холсте
{
    game.draw("#000", 0.1); // рисуем фон
    bls[0].update(0);
    bls[0].draw();
    bls[1].update(1);
    bls[1].draw();
    bls[2].update(2);
    bls[2].draw();
}





function initball() // Инициализация переменных
{
    game = new rect(0, 0, 320, 320); // прямоугольник закрашивающий фон
    bls[0] = new circle(game.width/2, game.height/2, 24, 1, 3 , "red"); // шар
    bls[1] = new circle(game.width/2, game.height/2, 24, 3, 1 , "green"); // шар
    bls[2] = new circle(game.width/2, game.height/2, 24, 5, 1 , "blue"); // шар
    
    var canvas = document.getElementById("examplecanvas");
    canvas.width = game.width; // ширина холста
    canvas.height = game.height; // высота холста
    context = canvas.getContext("2d");
   
    setInterval(draw, 1000 / 50); //отрисовываем 50 раз за секунду
}















//initial
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),
    
    //parameters
    total = w,
    accelleration = .05,
    
    //afterinitial calculations
    size = w/total,
    occupation = w/total,
    repaintColor = 'rgba(0, 0, 0, .04)'
    colors = [],
    dots = [],
    dotsVel = [];

//setting the colors' hue
//and y level for all dots
var portion = 360/total;
for(var i = 0; i < total; ++i){
  colors[i] = portion * i;
  
  dots[i] = h;
  dotsVel[i] = 10;
}

function anim(){
  window.requestAnimationFrame(anim);
  
  ctx.fillStyle = repaintColor;
  ctx.fillRect(0, 0, w, h);
  
  for(var i = 0; i < total; ++i){
    var currentY = dots[i] - 1;
    dots[i] += dotsVel[i] += accelleration;
    
    ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
    ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
    
    if(dots[i] > h && Math.random() < .01){
      dots[i] = dotsVel[i] = 0;
    }
  }
}

anim();























