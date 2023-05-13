var words = ["a", "trick", "of", "the", "light"];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
  index = index + 1;
}
