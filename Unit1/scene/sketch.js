function setup() {
  createCanvas(720, 400);
}
function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background("blue");
  //noStroke();



  //ground
  fill('green');
  rect(0, 335, 720, 760);


  //house
  fill('brown')
  rect(62, 245, 150, 100)

  //house roof
  fill('red')
  triangle(60, 247, 216, 247, 130, 136)

  fill(255);
  ellipse(600, 122, 72, 72);

  //sun
  fill('yellow')
   ellipse(600, 122, 72, 72);

  //door
  fill('white')
  rect(90, 296, 30, 50 )

  fill('black')
  ellipse(114, 323, 10, 10)

  //window
  fill('white')
  rect(148, 270, 30, 30)

  //trees
  fill('brown')
  rect(392,289, 30, 70)

  fill('green')
  triangle(377, 316, 440, 316, 407, 252 )
    triangle(377, 278, 440, 272, 407, 214 )

  fill('brown')
  rect(505,305, 30, 70)

  fill('green')
  triangle(482, 322, 562, 322, 518, 252 )
    triangle(491, 285, 556, 290, 520, 225 )

  //clouds
  fill('white')
  ellipse(176,55, 50, 50)
    ellipse(176,67, 90, 30)

  fill('white')
  ellipse(326,102, 50, 50)
    ellipse(323, 112, 90, 30)









 // fill('white') ;
  //text(mouseX + "," + mouseY, 15, 15)
}
