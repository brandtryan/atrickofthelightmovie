// video source: https://vimeo.com/90312869
// let img;
let vid;
let theta = 0;

function setup() {
	createCanvas(windowHeight, windowHeight, WEBGL);

	// img = loadImage('assets/cat.jpg');
	vid = createVideo(['assets/chaos.mp4']);
	vid.elt.muted = true;
	vid.loop();
	vid.hide();
}

function draw() {
	background(50);
	translate(0, 0, 0);
	push();
	rotateZ(theta * mouseX * 0.001);
	rotateX(theta * mouseX * 0.001);
	rotateY(theta * mouseX * 0.001);
	//pass image as texture
	normalMaterial();
	texture(vid);
	sphere(250);
	pop();
	translate(440, 0, 0);
	push();
	rotateZ(theta * 0.1);
	rotateX(theta * 0.1);
	rotateY(theta * 0.1);
	// texture(img);
	// box(100, 100, 100);
	// pop();
	theta += 0.02;
}
