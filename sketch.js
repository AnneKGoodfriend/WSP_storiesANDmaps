var canvas;

var buttons = ["franButton", "chinoButton", "orButton", "davidButton", "jordanButton", "nancyButton"];
var names = ["fran", "chino", "or", "david", "jordan", "nancy"];
var colors = ["#90CAC4", "#FBDC7F", "#7471A5", "#BAAFC6", "#138075", "#10797E"];
// var names2 = [fran, chino, or, david, jordan, nancy];
var onClick = [drawFran, drawChino, drawOr, drawDavid, drawJordan, drawNancy];
var img =[];
var imgPaths =["./colors/FRAN.png", "./colors/CHINO.png", "./colors/OR.png", "./colors/DAVID.png", "./colors/JORDAN.png", "./colors/NANCY.png"]
var audio =[];
var audioPaths =["./audio/fran_mixdown.wav", "./audio/chino_mixdown.wav", "./audio/or_mixdown.wav","./audio/david_mixdown.wav", "./audio/jordan_mixdown.wav","./audio/nancy_mixdown.wav"]

var fran = true;
var chino = true;
var or = true;
var david = true;
var jordan = true;
var nancy = true;

var y = 410;

var map;
var img1;

function preload() {
	map = loadImage("layers/WSPARK.png");
}

function setup() { 
	canvas = createCanvas(779, 386);
	canvas.position(320, 120);
  	canvas.class("lemon");

	background(255);

	image(map, 0, 0);

	for (i = 0; i<buttons.length; i++){

		imgContainer = createDiv('');
		img[i] = createImg(imgPaths[i]);
		img[i].parent(imgContainer);
		imgContainer.addClass('maps');
		img[i].position(320, 120);

		audio[i] = loadSound(audioPaths[i]);

		myContainer = createDiv('');
		buttons[i] = createButton(names[i]);
		buttons[i].mousePressed(onClick[i]);
		buttons[i].style("background-color", colors[i]);
		buttons[i].parent(myContainer);
		myContainer.addClass('buttons');
		myContainer.position(y, 90);
		y +=100;
	}

} 

function draw(){

if (fran){
		img[0].hide();	
	}else{
			img[0].show();

		}

if (chino){
		img[1].hide();	
	}else{
			img[1].show();
		}
if (or){
		img[2].hide();	
	}else{
			img[2].show();
		}
if (david){
		img[3].hide();	
	}else{
			img[3].show();
		}
if (jordan){
		img[4].hide();	
	}else{
			img[4].show();
		}
if (nancy){
		img[5].hide();	
	}else{
			img[5].show();
		}
}

function drawFran(){
if (fran){
	audio[0].play();
	fran = false;
} else {
	audio[0].stop();
	fran = true;
	
}
}

function drawChino(){
	if (chino){
	audio[1].play();
	chino = false;
} else{
	audio[1].stop();
	chino = true;
}
}

function drawOr(){
	if (or){
	audio[2].play();
	or = false;
} else{
	audio[2].stop();
	or = true;
}
}

function drawDavid(){
	if (david){
	david = false;
	audio[3].play();
} else{
	audio[3].stop();
	david = true;
}
}

function drawJordan(){
	if (jordan){
	audio[4].play();
	jordan = false;
} else{
	audio[4].stop();
	jordan = true;
}
}

function drawNancy(){
	if (nancy){
	audio[5].play();
	nancy = false;
} else{
	audio[5].stop();
	nancy = true;
}
}