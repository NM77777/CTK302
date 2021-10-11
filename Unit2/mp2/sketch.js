let state = 0;
let timer = 0;
let mic;
let vol;
let crabe1;
let crabe2;
let crabe3;
let palm;
let coconut1;
let coconut2;
let y = 250;
let song1;
let song2;
let song3;

function setup() {
  createCanvas(700, 700);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  crabe1 = loadImage("assets/sleepingcrabe.png");
  crabe2 = loadImage("assets/shockedcrabe.png");
  crabe3 = loadImage("assets/dizzycrabe.png");
  palm = loadImage("assets/palmtreetop.png");
  coconut1 = loadImage("assets/coconut.png");
  coconut2 = loadImage("assets/coconutright.png");
  song1 = loadSound("assets/treehit.wav")
  song2 = loadSound("assets/bonk.mp3")
  song3 = loadSound("assets/coconuthit.wav")

}

function draw() {

  //Start screen//
  switch (state) {
    case 0:
      background(94, 200, 242);
      fill(241, 174, 114);
      rect(0, 0, 200, 800);
      fill('black');
      textSize(50);
      text("The Crab", 325, 100);
      textSize(30);
      text("Click above crab to start", 275, 150);
      fill(253, 233, 200);
      rect(0, 550, 800, 400);
      image(crabe1, 50, 400, 400, 250);
      break;

      //sleepingcrabe scean//

    case 1:
      background(94, 200, 242);
      fill(241, 174, 114);
      rect(0, 0, 200, 800);
      fill('black');
      textSize(30);
      text("Aww the crab is sleeping.", 268, 100);
      textSize(30);
      text("Don't", 400, 150);
      fill('red');
      textSize(80);
      text("Yell", 370, 230);
      textSize(30);
      fill('black');
      text("At", 423, 275);
      text("It!", 426, 315);
      fill(253, 233, 200);
      rect(0, 550, 800, 400);
      image(crabe1, 50, 400, 400, 250);
      // get the sound input
      vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
      if (vol > .2) {
        state = 2;
        //place sound here//
        song1.play();
      }
      break;

      //crab wakes up! scean//

    case 2:
      background(94, 200, 242);
      fill(241, 174, 114);
      rect(0, 0, 200, 800);
      fill(253, 233, 200);
      rect(0, 550, 800, 400);
      image(crabe2, 35, 400, 400, 250);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 3;
        song2.play();
      }
      break;

      //coconut fall scean  300, 250 text 380,560//

    case 3:
      background(94, 200, 242);
      image(palm, 0, 100, 500, 500);
      image(coconut1, 300, y, 125, 150);
      fill('black')
      textSize(50);
      text("Oh \n NO!", 480, 550);

      timer++
      y = y + 8;
      //  if (y > height) {
      //  y = 250;
      //    }

      if (timer > 3 * 60) {
        timer = 0;
        state = 4;
        y = 250;
        song3.play();

      }
      break;

      //crabe getting hit scean//

    case 4:

      background(94, 200, 242);
      fill('black');
      textSize(25)
      text("I told you not to yell at the crab.", 275, 150);
      fill(241, 174, 114);
      rect(0, 0, 200, 800);
      fill(253, 233, 200);
      rect(0, 550, 800, 400);
      image(crabe3, 50, 400, 400, 250);
      image(coconut2, 497, 480, 200, 200);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;


  }

 //fill('white');
  //text(mouseX + ", " + mouseY, 15, 15);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
