function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(255);
	plane();
	translate(100, 100, 300);
	plane();
}
