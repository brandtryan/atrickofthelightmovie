function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);

	noStroke(0);
	fill(mouseY);
	ellipse(mouseX, 150, 75, 75);
}
