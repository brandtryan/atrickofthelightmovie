var numFrames = 1358; // The number of frames
var images = []; // Make the array
var currentFrame = 1;

function preload() {
	for (var i = 1; i < numFrames; i++) {
		var imageName = 'assets/images/stills/' + i + '.webp';
		images[i] = loadImage(imageName); // Load each image
	}
}

function setup() {
	createCanvas(1280, 1440);
	frameRate = 1;
}

function draw() {
	background(0);
	imageMode(CENTER);
	image(images[currentFrame], 640, 360);
	currentFrame++; // Next frame
	// if (currentFrame == images.length) {
	// 	currentFrame = 1; // Return to first frame
	// }
}
