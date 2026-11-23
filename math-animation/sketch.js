let centerX;
let centerY;
let orbitRadius = 120;
let currentAngle = 0;
let angularSpeed = 0.03;
let isPaused = false;

function setup() {
  createCanvas(500, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(240);

  noFill();
  stroke(180);
  ellipse(centerX, centerY, orbitRadius * 2);
  
  fill(220, 50, 50);
  noStroke();
  ellipse(centerX, centerY, 12, 12);
  let dotX = centerX + orbitRadius * cos(currentAngle);
  let dotY = centerY + orbitRadius * sin(currentAngle);

  fill(30, 100, 220);
  ellipse(dotX, dotY, 24, 24);

  stroke(30, 100, 220);
  line(centerX, centerY, dotX, dotY);

  if (!isPaused) {
    currentAngle = currentAngle + angularSpeed;
  }

  fill(20);
  noStroke();
  textSize(14);
  text("Click mouse: Pause / Resume", 15, 25);
  text("Press W / S (or + / -): Change Orbit Speed", 15, 45);
  text("Angle (rad): " + currentAngle.toFixed(2) + " | Speed: " + angularSpeed.toFixed(2), 15, height - 15);
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    isPaused = !isPaused;
  }
}
function keyPressed() {
  if (key === 'w' || key === 'W' || key === '+' || key === '=') {
    angularSpeed += 0.01;
  } else if (key === 's' || key === 'S' || key === '-' || key === '_') {
    angularSpeed = max(0.01, angularSpeed - 0.01);
  }
}
