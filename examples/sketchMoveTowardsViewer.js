function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	x = width / 3;
	y = height / 3;
	z = 0;
}

function draw() {
	translate(x, y, z);
	rectMode(CENTER);
	rect(0, 0, 100, 100);

	z++;
}
