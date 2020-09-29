function preload() {
  // put preload code here
}
function setup() {
  createCanvas(600, 600);
  noFill();
  background(0,0,0);
}

function draw() {
  var t = frameCount*2;
  stroke(lerpColor(color(46, 255, 241, 20), color(250, 110, 22, 20), frameCount / 520));
  translate(width / 2, height / 2);
  rotate(t / 100);
  rect(t / 140, t / 60, atan(t / 60) * 200, cos(t / 60) * 200);
  frameRate(900);
  if (frameCount >= 990) {
    noLoop();
  }
}

