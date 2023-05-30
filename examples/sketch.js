let x, y, r, g, b;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  background(0);
  // saveCanvas('myCanvas', 'jpg');
}

function draw() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);
  circle(mouseX, mouseY, random(25, 100));
}
