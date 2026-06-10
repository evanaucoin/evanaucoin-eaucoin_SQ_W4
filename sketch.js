// Global variable to track which scene is currently active
let currentScene = "scene1";

function setup() {
  createCanvas(800, 500);
  textFont("monospace");
}

function draw() {
  background(0);

  if (currentScene === "scene1") {
    scene1();
  } else if (currentScene === "scene2A") {
    scene2A();
  } else if (currentScene === "scene2B") {
    scene2B();
  } else if (currentScene === "scene3A1") {
    scene3A1();
  } else if (currentScene === "scene3A2") {
    scene3A2();
  } else if (currentScene === "scene3B1") {
    scene3B1();
  } else if (currentScene === "scene3B2") {
    scene3B2();
  } else if (currentScene === "ending1") {
    ending1();
  } else if (currentScene === "ending2") {
    ending2();
  } else if (currentScene === "ending3") {
    ending3();
  } else if (currentScene === "ending4") {
    ending4();
  } else if (currentScene === "ending5") {
    ending5();
  } else if (currentScene === "ending6") {
    ending6();
  } else if (currentScene === "ending7") {
    ending7();
  } else if (currentScene === "ending8") {
    ending8();
  }
}

// Reusable button function
// label  - text displayed on the button
// x, y   - center position of the button
// action - unused here, scene change is done by checkButton() in each scene
function drawButton(label, x, y, action) {
  let w = 280;
  let h = 44;
  let x1 = x - w / 2;
  let y1 = y - h / 2;

  let hovered =
    mouseX > x1 && mouseX < x1 + w && mouseY > y1 && mouseY < y1 + h;

  stroke(255);
  strokeWeight(1);
  fill(hovered ? 60 : 20);
  rect(x1, y1, w, h, 4);

  noStroke();
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// Helper called inside each scene to detect a button click
// Returns true if the mouse is pressed inside the button area
function checkButton(x, y) {
  let w = 280;
  let h = 44;
  let x1 = x - w / 2;
  let y1 = y - h / 2;
  return mouseIsPressed && mouseX > x1 && mouseX < x1 + w && mouseY > y1 && mouseY < y1 + h;
}

// Shared helper: draw an array of story text lines starting at startY
function drawStoryText(lines, startY) {
  fill(255);
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  let y = startY;
  for (let line of lines) {
    text(line, 60, y, 680, 200);
    y += 24;
  }
}

// Shared helper: draw the scene title in light blue at the top
function drawTitle(title) {
  fill(200, 200, 255);
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text(title, width / 2, 30);
}

// Shared restart button used by all ending scenes
function drawRestartButton() {
  drawButton("[ Play Again ]", width / 2, 440, "scene1");
  if (checkButton(width / 2, 440)) {
    currentScene = "scene1";
  }
}
