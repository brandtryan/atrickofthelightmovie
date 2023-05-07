let myFont;
function preload() {
  myFont = loadFont('assets/CourierPrime-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(0);
  let y1 = map(mouseY, 0, windowHeight, 0, 255);
  fill(y1);
  textFont(myFont);
  textSize(30);
  text('a trick of the light', mouseX, windowHeight);
}