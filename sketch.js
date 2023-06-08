let spinnerSize = 192;
let spinnerSpeed = 10;
let spinnerColor;


function setup(){
  createCanvas(500, 500);
  clearcheck = true;
  spinnerColor = color(86, 4, 112);
}

function draw(){
  cursor();

  background(205, 51, 255);
  if(clearcheck){
  fill(0,0,0);
  rectMode(CENTER);
  rect(250, 250, 300, 100);
  textAlign(CENTER, CENTER);
  fill(255,255,255);
  textSize(33)
  text('CLICK TO LOAD', 250, 250)
  if(mouseX>=100&&mouseX<=400&&mouseY>=200&&mouseY<=300){
    cursor(HAND);
    if(mouseIsPressed){
      clearcheck = false;
    }
  }
  else{
    cursor();
  }  
  
  }
  else{
    let step = frameCount % (spinnerSpeed * 7.25);
  let angle = map(step, 0, spinnerSpeed * 7.25, 0, TWO_PI);
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  noFill();
  stroke(spinnerColor);
  strokeWeight(spinnerSize / 10);
  strokeCap(SQUARE);
  arc(0, 0, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), 0, PI + HALF_PI, OPEN);
  pop();
  }
}




  
  

