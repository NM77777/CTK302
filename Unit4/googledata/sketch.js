var bubbles = [];
let url = "";

function setup() {
  // let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

    let key = "1MiN1gkJHhYla2o2B-PEWLXzqavn6sbPP4bGmCRnwCNE"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Breakfest"],
        data[i]["Lunch"],
        data[i]["Dinner"],
    data[i]["Your Name"]));// THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("purple");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(breakfest, lunch, dinner, name) {
    // only the order of these parameters matters!
    this.breakfest = breakfest;
    this.lunch = lunch;
    this.dinner = dinner;
    this.yourname = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("black");
    noFill();
    rect(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.breakfest + "\n" + this.lunch + "\n" + this.dinner + "\n" +this.yourname,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;


  }


}
