let numberOfTouches ;
let lonely;
let two;
let three;
let alright;
let five;

function setup() {
  createCanvas(600, 600);

  lonely = loadImage("assets/lonly.jpeg");
  two = loadImage("assets/two.jpeg");
  three = loadImage("assets/three.jpeg");
  alright = loadImage("assets/alright.jpeg");
  five = loadImage("assets/five.jpeg");


}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
    //image()
      text("Please touch screen", 5, 22) ;
      image(two, width/2, height/2, 200, 200) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
       image(lonely, 50, 50, 200, 200);
      break ;

      case 2:
      text("Wow (sarcastic), two fingers is the best you can do?", 5, 22) ;
            // put a picture here
            image(two, 50, 50, 200, 200);
      break ;

      case 3:
     text("Well its better than two.", 5, 22) ;
            // put a picture here
            image(three, 50, 50, 200, 200);
      break ;

      case 4:
     text("Now we are getting some where", 5, 22) ;
            // put a picture here
            image(alright, 50, 50, 200, 200);
      break ;

      case 5:
     text("Now that is a High Five", 5, 22) ;
            // put a picture here
            image(five, 50, 50, 200, 200);
      break ;

  }

}
