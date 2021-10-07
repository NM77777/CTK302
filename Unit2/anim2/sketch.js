let x = 0;

// Reed Cavi's Rain Man

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);



push();
translate(x, 0);
avatar();
pop();

x = x + 3;
if (x > width) {
  x = -200;
}

}

function avatar(){


   //text box
  //  textSize(25)
  //  fill('black');
  // text("By day, Joe Round was just your average fruit sales man. Promonting\n his fruit stand in his world famous orange suit. BUT..... ", 10, 707);



// Joe round

 //legs
fill('white');
rect(286, 478, 50, 150 );
 rect(360, 478, 50, 150 );

//orange suit

fill('orange');
ellipse(351, 387, 250, 250);

//head
fill('white');
ellipse(353,250, 100, 125);

  //orange leaf
  fill(56, 188, 28);
ellipse(316, 140, 40, 100);

//top of orange suit
  fill('orange');
arc(355, 214, 150, 150, -9.4, 0, PIE);

//eyes
  fill('white');
ellipse(335, 233, 30, 30);
ellipse(375, 233, 30, 30);

  fill('black');
ellipse(335, 231, 10, 10);
ellipse(375, 231, 10, 10);

//smile
arc(353, 265, 80, 80, 0, PI);

//arms
fill('white');
  rect(220, 313, 50, 150 );
  rect(435, 313, 50, 150 );




}
