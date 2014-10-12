
	var img1;
	var larryDavid='"Switzerland is a place where they don\'t like to fight, so they get people to do their fighting for them while they ski and eat chocolate."';
	var translated;
	var replace3=[
					{sorc:"Switzerland", dst:"North Korea"},
					{sorc:"fight", dst:"talk"},
					{sorc:"fighting", dst:"talking"},
					{sorc:"ski", dst:" go about their work"},
					{sorc:"and eat chocolate", dst:""},

				];
    
    var replace2=[
					{sorc:"Switzerland", dst:"Canada"},
					{sorc:"don\'t", dst:""},
					{sorc:"like", dst:"love"},
					{sorc:"to fight", dst:"maple syrup"},
					{sorc:"get people to do their fighting for them", dst:"are passive agressive"},
					{sorc:"ski and eat chocolate", dst:"eat pancakes"},

				];
    
    var replace1=[
					{sorc:"Switzerland", dst:"ITP"},
					{sorc:"they", dst:"people"},
                    {sorc:"fight", dst:"sleep"},
					{sorc:"people", dst:"they"},
					{sorc:"fighting", dst:"sleeping"},
					{sorc:"ski", dst:"perform internet searches"},
					{sorc:"eat chocolate", dst:"make GIFS"},

				];
    



	function setup(){

		img1=loadImage("curb.jpg");
		createCanvas(600,450);
		translated=createP("");

	}
	   

	function draw(){
	    
	    background(img1);
	    translated.html(larryDavid);
	    
	    // Boolean(larryOver)

	if (mouseX >= 190 && mouseX<=326 && mouseY >=123 && mouseY <=334) {
	    println("dance!");

		replaceWords();
	   } else if (mouseX >= 58 && mouseX<=125 && mouseY >=140 && mouseY <=283) {
	    println("dance!");
		replaceWords2();
	   } else if (mouseX >= 385 && mouseX<=460 && mouseY >=110 && mouseY <=246) {
		replaceWords3();
	   } else {
	   	larryDavid='"Switzerland is a place where they don\'t like to fight, so they get people to do their fighting for them while they ski and eat chocolate."';
	   }

println(mouseX, mouseY);
	
	}


function replaceWords(){
   for (i=0; i<replace1.length; i++){
   	var myExp = new RegExp(replace1[i].sorc);
	larryDavid = larryDavid.replace(myExp, replace1[i].dst);
   }
}

function replaceWords2(){
   for (i=0; i<replace2.length; i++){
   	var myExp = new RegExp(replace2[i].sorc);
	larryDavid = larryDavid.replace(myExp, replace2[i].dst);
   }
}

function replaceWords3(){
   for (i=0; i<replace3.length; i++){
   	var myExp = new RegExp(replace3[i].sorc);
	larryDavid = larryDavid.replace(myExp, replace3[i].dst);
   }
}





