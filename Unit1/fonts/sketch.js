let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/hamberger.ttf") ;
  f2 = loadFont("assets/sushi.ttf") ;
  textAlign(CENTER) ;

}

function draw() {
  background("green")
  textFont(f1) ;
  textSize(48) ;
  text ("Hello World", width/2, 100) ;

  textFont(f2) ;
  textSize(24) ;
  text ("Im a nerd", width/2, 160) ;

}
