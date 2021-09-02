var f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/sushi.ttf") ;
}

function draw() {
  background("green")
  textFont(f1) ;
  textSize(48) ;
  text ("Hello World", 100, 100) ;

}
