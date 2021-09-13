function setup() {
  createCanvas(800, 800);
  //rectMode(CENTER);
  ellipseMode(CENTER);
  //noStroke() ;
}

function draw() {
  background(25, 25, 112);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed


    //sun
    fill('white')
    ellipse(675, 75, 100, 100)

  //city

  //side walk
   fill('black');
   rect(0, 586, 800, 100);

  //building
  fill(61, 72, 73);
  rect(0, 0, 500, 600 );

  //window
    fill(255, 255, 191);
    rect(0,0, 200, 200 );

    //text box
     //text box
      textSize(25)
      fill('white');
     text("At night Joe would turn into the blood orange. The fruit based avenger\n of the night. He would cling to the side of bulidings with his spikes.\n Then he would fall onto evil doers plup-erzing them to the ground.  ", 10, 707);


  // Blood Orange


  //orange suit

  fill(138, 3, 3);
  ellipse(351, 277, 250, 250);

  //head
  fill('black');
  ellipse(353,139, 100, 125);

    //orange leaf
    fill('green');
  ellipse(316, 25, 40, 100);

  //top of orange suit
    fill(138, 3, 3);
  arc(355, 102, 150, 150, -9.4, 0, PIE);

    //spikes
    fill(202, 204, 206)
    triangle(321, 285, 385, 285, 354, 390 )
    triangle(235, 248, 240, 301, 135, 270 )
    triangle(464, 248, 463, 301, 550, 270 )


  //eyes
    fill('white');
  ellipse(335, 123, 30, 30);
  ellipse(375, 123, 30, 30);

    //eye brows
    fill('white')
    rect(318, 105, 30, 10 )
    rect(363, 105, 30, 10 )


    fill('black');
  ellipse(335, 121, 10, 10);
  ellipse(375, 121, 10, 10);

  //frown
    fill('white')
 arc(353, 181, 70, 70, -9.4, 0, PIE);





  } else {
    // when the mouse isn't pressed!

    background(0, 204, 255);

    //sun
    fill('yellow')
    ellipse(675, 75, 100, 100)

  //city

  //side walk
   fill('grey');
   rect(0, 586, 800, 100);

  //building
  fill('red');
  rect(0, 0, 500, 600 );

  //window
    fill('white');
    rect(0,0, 200, 200 );

     //text box
      textSize(25)
      fill('black');
     text("By day, Joe Round was just your average fruit sales man. Promonting\n his fruit stand in his world famous orange suit. BUT..... ", 10, 707);



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










  // this shows mouse location - comment it out when you're done!

 //fill(0);
 // text(mouseX + ", " + mouseY, 40, 40);
//}

// record the mouse location in console when clicked
//function mouseReleased() {
 // print(mouseX + ", " + mouseY);
}
