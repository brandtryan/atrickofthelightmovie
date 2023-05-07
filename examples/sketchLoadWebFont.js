let myFont;
function preload() {
  myFont = loadFont('assets/CourierPrime-Italic.ttf');
}

function setup() {
  createCanvas(600, 400);
  background(0);
  fill(100);
  textFont(myFont);
  textSize(36);
  text('a trick of the light', 50, 50);
}

function draw() {
  
}