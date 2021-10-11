let state = 0 ;
//let timer = 0 ;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch(state){
    case 0:
      background('red');

      fill(255)
      for (var j = 0; j <= height; j += 20) {
    for (var i = 0; i <= width; i += 20) {
      rect(i, j, 200, 5);
    }
      }
      text('state 0', 100, 100)
      break ;

       case 1:
       background('yellow');
      text('state 1', 100, 100)

       fill(255)
      for (var j = 0; j <= height; j += 20) {
    for (var i = 0; i <= width; i += 20) {
      ellipse(i, j, 5, 5);
    }
      }


      break ;

       case 2:
       background('blue');
      text('state 2', 100, 100)
       for (var j = 0; j <= height; j += 20) {
    for (var i = 0; i <= width; i += 20) {
      triangle(i, j, 320, 100, 310, 80);
    }
      }
      break ;

      case 3:
       background('green');
      text('state 3', 100, 100)
      for (var j = 0; j <= height; j += 20) {
    for (var i = 0; i <= width; i += 20) {
      rect(i, j, 5, 20);
    }
      }

      break ;

      case 4:
       background('purple');
      text('state 4', 100, 100)
       for (var j = 0; j <= height; j += 20) {
    for (var i = 0; i <= width; i += 20) {
      ellipse(i, j, 20, 28);
    }
      }
      break ;


  }

//  timer++ ;
//  if(timer >=5*60){
//    timer = 0 ;
  //  state++ ;
  //  if(state > 4) state = 0 ;


  //}

}

function mouseReleased(){

  state = state + 1;

  if (state > 4){
    state = 0 ;
  }


}
