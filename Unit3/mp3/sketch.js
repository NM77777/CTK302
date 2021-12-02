let cars = [];
let frogPos;
let maxCars = 10;
let timer = 0;
let state = 0;
let carsEaten = 0;
let reaper;
let ghost;
let forest;
let reaperleft;
let reaperright;
let hs;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);


  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);

  reaperright = loadImage("assets/reaperright.png");
  reaperleft = loadImage("assets/reaperleft.png");
  ghost = loadImage("assets/ghost.png");
  forest = loadImage("assets/forest.jpeg");
  gameover = loadImage("assets/gameover.png");
  hs = loadFont("assets/horroroidstag.ttf") ;
  textAlign(CENTER) ;
      textFont(hs) ; // currently does not work.
  reaper = reaperright;
}

function draw() {
  switch (state) {
    case 0: // welcome
      background("black");

      textSize(50);
      fill("white");
      text("Ghost Reaper", width/2, 100);
      image(reaper, width/2, 330, 500, 400);
      text("Click to start", width/2, 600);
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 10 * 120) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win state
      background("black");
      textSize(28);
      fill("white");
      text("You Win for Now", width/2, height/2);
      break;

    case 3: // lose state
      background("black");
      textSize(28);
      fill("white");
      image(gameover, width/2, height/2, 700, 500);
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won
      resetTheGame();
      state = 0;
      break;

    case 3: // they lost
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("black");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      carsEaten++;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  fill("white");
  textSize(40);
  text("Souls left = " + cars.length + " Souls collected = " + carsEaten, width/2, 50);
  // frog

  image(reaper, frogPos.x, frogPos.y, 150, 100);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];
  carsEaten = 0;

  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }




}

function keyPressed() {
  if (keyCode === LEFT_ARROW) reaper = reaperleft;
  if (keyCode === RIGHT_ARROW) reaper = reaperright;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
