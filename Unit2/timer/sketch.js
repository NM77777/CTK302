let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
    background('red');
      text("This one is the fastest", 100, 100);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 1;
      }

      break;

    case 1:
    background('blue');
    fill('white');
      text("This one is the slowest", 100, 100);
      timer++;
      if (timer > 6 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
    background('green');
    fill('black');
      text("This one alright I guess.\n Hey look a circle.", 100, 100);
      ellipse(300, 300, 50, 50);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
