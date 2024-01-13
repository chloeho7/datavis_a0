let angle = 0;

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(0); 

    let hr = hour();
    let min = minute();
    let sec = second();
    if (sec == 1){
      console.log(min)
    }
    
    let secAngle = map(sec, 0, 60, 0, 360);
    let minAngle = map(min, 0, 60, 0, 360);
    let hrAngle = map(hr % 12, 0, 12, 0, 360);
    
    push();
    translate(width / 2, height / 2);
    rotate(-90);
    
    push();
    rotate(hrAngle);
    fill(255, 0, 0);
    noStroke();
    ellipse(100, 0, 50, 50);
    fill(255);
    pop();
    
    push();
    rotate(minAngle-hrAngle);
    fill(0, 0, 255);
    noStroke();
    ellipse(150, 0, 75, 75);
    fill(255);
    pop();

    push();
    rotate(hrAngle);
    fill(255);
    noStroke();
    rect(0, 0, 50, 10);
    pop();
    
    push();
    rotate(minAngle-hrAngle);
    fill(255);
    noStroke();
    rect(0, 0, 75, 5);
    pop();
    
    push();
    rotate(secAngle);
    fill(255, 255, 255);
    noStroke();
    ellipse(200, 0, 100, 100);
    pop();
   
    push();

    
    
    pop();
    

    
  
    push();
    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(hr%12, 0, -90);
    pop();
    

    pop();

    
    angle += 0.02;
    rotate(angle);
}