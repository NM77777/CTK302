
let cars = [];
let frogPos;

function setup() {
  createCanvas(500, 500);

  // Spawn an object

  // myCar = new Car();

  for (let i = 0; i < 100; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80);
}

function draw() {
  background('white');


game();

}

function game(){
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist (frogPos)) < 50) {
      cars.splice(i,1) ;
    }
  }
  //frog
  fill('green')
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();



}

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(100));
    this.vel = createVector(0, random(5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80) ;
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    text("HELLO", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
