let myFont;
let frames = [];
let stills = [];
function preload() {
	myFont = loadFont('assets/CourierPrime-Bold.ttf');
	for (i = 1; i < 1359; i++) {
		stills[i] = loadImage('assets/images/stills/' + i + '.webp');
	}
}

function setup() {
	// frameRate(1.75);
	createCanvas(windowWidth, windowHeight);
	for (let i = 1; i < 1359; i++) {
		let x = random(width);
		let y = random(height);
		let f = new Frame(x, y);
		frames.push(f);
	}
}

function mousePressed() {
	for (let i = 1; i < stills.length; i++) {
		frames[i].clicked(mouseX, mouseY);
	}
}

function draw() {
	background(0);
	// let y1 = map(mouseY, 0, windowHeight, 0, 255);
	// fill(y1);
	// textFont(myFont);
	// textSize(30);
	// textAlign(CENTER, BASELINE);
	// text('a trick of the light', 250, windowHeight / 2);

	imageMode(CENTER);
	for (let i = 1; i < frames.length; i++) {
		frames[i].move();
		frames[i].show();
	}
}

class Frame {
	constructor(x, y, img) {
		this.x = x;
		this.y = y;
		this.img = random(stills);
	}

	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
	}

	show() {
		image(this.img, this.x, this.y);
	}
}
