let cam;

function setup() {
	createCanvas(100, 100, WEBGL);
	// Create a camera.
	// createCamera() sets the newly created camera as
	// the current (active) camera.
	cam = createCamera();
}

function draw() {
	background(204);
	// Move the camera away from the plane by a sin wave
	cam.camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
	plane(10, 10);
}
