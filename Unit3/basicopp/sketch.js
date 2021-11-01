// let myCar;

// let cars =[] ;
let rain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object

  // myCar = new Car();
  for (let i = 0; i < 10; i++) {
    rain.push(new Rain());
  }
}

function draw() {
  background(100);

  // myCar.display();
  // myCar.move();

  for (let i = 0; i < rain.length; i++) {
    rain[i].display();
    rain[i].move();
  }
}

// Car class
class Rain {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(100), random(100));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
     textSize(this.size);
    text("Rain", this.pos.x, this.pos.y );
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.x = height;
  }
}
