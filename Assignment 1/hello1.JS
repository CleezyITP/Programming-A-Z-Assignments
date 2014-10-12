



// var fs =require('fs');   ???????
var canvas;
var img2;
var img1;
var bSize=85;
var spacing=bSize * 0.85;
var input;
var translator;




//sketch
function setup(){

input = createElement("textarea","Enter some text!");
var button = createButton("Translate");
button.mousePressed(translate);
translated=createP("");
var forTrans = input.value();



function translate(){
	var len = forTrans.length;
	if (len == '0') {
    alert("Enter something!");
  } 
    else if(forTrans=='Enter some text!'){
  	alert("Enter something!");

  }
    else{

    rplace();

}
     


  }


//console.log(words);

}


//look for 'ou' combinations



canvas=createCanvas(1200,1200);
background(0);
canvas.postion=(600,600);
img1=loadImage('http://upload.wikimedia.org/wikipedia/commons/3/31/553px-lib_maple_leaf.png');

//beaver background
// img2=loadImage('http://clipartist.info/openclipart.org/SVG/ArtFavor/beaver01-1200px.png');
// for (var x = 0; x < width+50; x += spacing+75)
//   {
//     for (var y = 0; y < height+50; y += spacing+15)
//     {
//         applyMatrix();
//      if (y/3 % 2 == 0) { 
//         translate(x +75, y);
//     }else
//         translate(x, y);
//         image(img2, 0, 0, bSize, bSize);
//         resetMatrix();
//     }
// }

function draw(){

if (mouseIsPressed){
image(img1, mouseX, mouseY, 100, 100);
loadPixels();
}
	
	}


	function rplace (){
for (var x=0; x<forTrans.length; x+1){
 forTrans.replace("ou", "oo");
 translated.html(forTrans + "," + 'eh?');
}


// function translate(){

// 	document.getElementById("translator").submit();
// }

//console output 
console.log(phrase + ',' + cannuck);
console.log('Hello!');


