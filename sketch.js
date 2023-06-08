let spinnerSize = 192;
let spinnerSpeed = 7;
let spinnerColor;
let checkspin = 0;
let timer = 0;
let fade;
let fadeAmount = 1.25;
let increment = 0;
let circles = [];

function setup(){
  createCanvas(500, 500);
  clearcheck = true;
  morphed = false;
  fade = 0;
  t = -2.03*PI/5;
  spinnerColor = color(86, 4, 112);
  k=300;
  l=100;
  showtext = false;
  showheart = false;
  m = 0;

  
    
  
  
}

function draw(){
  cursor();
  background(137, 7, 176);
  heartColor = color(86, 4, 112, fade);
  

  if(clearcheck){
  fill(spinnerColor);
  stroke(spinnerColor)
  strokeWeight(spinnerSize / 10);
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
      morphed = true;
      frameCount = 0;
    }
  }
  else{
    cursor();
  }  
  
  }
  else{
    if(morphed){
    if(k>182.4){
      strokeWeight(spinnerSize / 10);
      fill(137, 7, 176);
      rect(250, 250, k, l);
      k=k-2.13;
      l=l+1.5;
    }
    else{
    if(increment <= 300/2){
      background(137, 7, 176);
      increment = increment+2.5;
    }
    rect(250, 250, spinnerSize - (spinnerSize / 20),spinnerSize - (spinnerSize / 20), increment);
    if(increment == 150){
      morphed = false;
      frameCount = 0;
    }
  }
  }
  else{
 if(frameCount<349){
  
  spin();

}
  else{
    if (fade>255) fade=255;
  
    fade += fadeAmount;
    if(t<0){
      arc(150, 275, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), -2.03*PI/5, t, OPEN);
      arc(350, 275, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), PI-t, PI+2.03*PI/5, OPEN);
      t = t+0.015;
    }
    else{
      fill(255,0, 212, fade);
      stroke(255,0,212, fade);
      rectMode(CENTER);
      rect(250, 302, 100, 40);
      rect(250, 290, 100, 40);
      rect(250, 295, 135, 20);
      rect(185, 240, 20, 60);
      rect(315, 240, 20, 60);
      noStroke();
      rect(217, 247, 27, 65);
      rect(283, 247, 27, 65);
      stroke(spinnerColor);
      noFill();
      arc(150, 275, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), -2.03*PI/5, 0, OPEN);
      arc(350, 275, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), PI, -PI+2.03*PI/5, OPEN);
      showtext = true;
      
    }

    noFill();
    stroke(spinnerColor);
    strokeWeight(spinnerSize / 10);
    strokeCap(SQUARE);
    arc(width/2, height/2, spinnerSize - (spinnerSize / 20), spinnerSize - (spinnerSize / 20), -PI/4, PI + PI/4, OPEN);

    if(showtext){
      
      noStroke();
      textSize(182.4);
      textFont('Georgia')
      noStroke();
      fill(86, 4, 112);

      if(m<100){
      
      text('I', m, 275);
      text('U', 530-m, 275);

      m = m+1;
      }
      else{
        text('I', 100, 275);
        text('U', 430, 275);
        showheart = true;
      }
      
    }

    if(showheart){
        
      //strokeWeight(spinnerSize / 10);
      //stroke(heartColor)
      //fill(255, fade);
      //heart(250, 190, 180);
      
      hearts();
      if(circles.length>=1000){
        clear();
      }
  }
    
  

}
  }
}
}




function spin(){
  let step = frameCount % (spinnerSpeed * 7.25);
  let angle = map(step, 0, spinnerSpeed * 7.25, 0, TWO_PI);
  console.log(frameCount);
  
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


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function hearts(){
  if(fade>255){
    noStroke();
    var circle = {
      x: random(width),
      y: random(height),
      size: random(10, 100),
      r: random(255), 
      g: random(255)
    }

    if(circle.y < 75 || circle.y > 350){
      circles.push(circle);
    }
  for(let j = 0; j<circles.length; j++){
    fill(circles[j].r, 255, circles[j].g);
    heart(circles[j].x, circles[j].y, circles[j].size);
    }
  }

}




  
  

