var canvas;
var img1;
// var img2;
// var bSize=85;
// var spacing=bSize * 0.85;
var translator;
var translated;




//sketch
function setup(){


	
	var input = createElement("textarea","Enter some text!");
	var button = createButton("Translate");
	button.position=(1100,20);
	button.mousePressed(translate);
	translated=createP("");
	canvas=createCanvas(2200,2200);
	background(0);
	canvas.postion=(600,600);
	img1=loadImage('http://upload.wikimedia.org/wikipedia/commons/3/31/553px-lib_maple_leaf.png');
    var credit = createElement("text","^ draw ^");



	function translate(){
		var forTrans = input.value();
		var len = forTrans.length;

		if (len == '0') {
			alert("Enter something!");
		} 
		else if(forTrans=='Enter some text!'){
			alert("Enter something!");

		}
		else{
 //for (var x=0; x<forTrans.length; x+1){
 			var newText = forTrans.replace(/ou/g,'oo');
 			var punct = newText.replace(/[\.\/!?\\\-]/g,'');
		 	// var newText = forTrans.replace("ou", "oo");
		 	console.log('newText', punct);
		 	translated.html(punct + "," + 'eh?');
	 	}



	}
}



//beaver background
// img2=loadImage('http://clipartist.info/openclipart.org/SVG/ArtFavor/beaver01-1200px.png');
// for (var x = 0; x < width+50; x += spacing+75)
//   {
//     for (var y = 0; y < height+50; y += spacing+15)
//     {
//         push();
//      if (y/3 % 2 == 0) { 
//         translate(x +75, y);
//     }else
//         translate(x, y);
//         image(img2, 0, 0, bSize, bSize);
//         pop();
//     }
// }


function draw(){

	if (mouseIsPressed){
		image(img1, mouseX, mouseY, 100, 100);
		loadPixels();
	}
	
}


// console.log('Hello!');


