let state = 0 ;



function setup() {
  createCanvas(500, 500);
}

function draw() {
switch(state) {

case 0:
background('white') ;
text('What do you call a happy cowboy?', 100, 100)
break ;

case 1:
background('yellow')
text('a jolly rancher', 100, 100) ;


  break;

}
}

function mouseReleased(){
  state++ ;
  if (state > 1) {
    state = 0;
  }
}
