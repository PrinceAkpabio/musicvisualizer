
let mySound, amplitude;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('./music');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  amplitude = new p5.Amplitude();
}

function draw() {
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 10, 400);
  console.log(size);
  background(2);
  fill('red');
  ellipse(300, 300, size, size);
}

function mousePressed() {
  if (mySound.isPlaying() && mouseIsPressed) {
    mySound.stop()
  } else {
    mySound.play()
  }
}

