let ace, cheeseburger, mario ;

function setup() {
  createCanvas(500, 500);
  ace = loadImage("assets/ace.jpg") ;
  cheeseburger = loadImage("assets/cheeseburger.jpg") ;
  mario = loadImage("assets/mario.jpg") ;
  imageMode(CENTER) ;

}

function draw() {
  background('green')
  image(ace, width/2, height/2, 100, 100) ;
  image(cheeseburger, width/2, height/2-120, 100, 100) ;
  image(mario, width/2, height/2+120, 100, 100) ;


}
