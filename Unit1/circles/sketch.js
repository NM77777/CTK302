var radius = 50;

function setup() {
  createCanvas( 400, 400 );
}

function draw() {
  ellipse( mouseX, mouseY, radius, radius );
  fill('green')
}
