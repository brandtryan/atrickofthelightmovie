// video source: https://vimeo.com/90312869
// let img;
let vid;
let theta = 0;

function setup() {
	createCanvas(1080, 1920, WEBGL);

	// img = loadImage('assets/cat.jpg');
	vid = createVideo(['assets/chaos.mp4']);
	vid.elt.muted = false;
	vid.loop();
	vid.hide();
}

function draw() {
	background(0);
	translate(-0, -0, -0);
	push();
	rotateZ(theta * mouseX * 0.001);
	rotateX(theta * mouseX * 0.001);
	rotateY(theta * mouseX * 0.001);
	//pass image as texture
	// texture(vid);
	// sphere(250);
	// pop();
	translate(-0, -0, -0);
	push();
	rotateZ(theta * 0.1);
	rotateX(theta * 0.1);
	rotateY(theta * 0.1);
	normalMaterial();
	texture(vid);
	box(300, 300, 300);
	pop();
	theta += 0.02;
}