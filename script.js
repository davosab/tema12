let canvas;
let startBtn;
let stopBtn;
let i = 0;
let letterCycle;
let running = false;
let letters = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];
let colour = {r: 0, g: 0, b: 0};

function setup() {
  createCanvas(300, 300);

  startBtn = createButton("START");
  startBtn.position(40, 80);
  startBtn.style("background", "#6AA84F");
  startBtn.style("border-radius", "6px");
  startBtn.style("height", "30px");
  startBtn.style("width", "100px");

  stopBtn = createButton("STOP");
  stopBtn.position(160, 80);
  stopBtn.style("background", "#CC0000");
  stopBtn.style("border-radius", "6px");
  stopBtn.style("height", "30px");
  stopBtn.style("width", "100px");

  startBtn.mousePressed(changeLetter);
  stopBtn.mousePressed(stopLetter);
}

function changeLetter() {
  if (running) return;
  running = true
  letterCycle = setInterval(() => {
    if (i == 25) i = 0;
    else i++;
    colour = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255)
    };
  }, 500);
}

function stopLetter() {
  clearInterval(letterCycle);
  running = false;
}

function draw() {
  background("#eee");

  textSize(28)
  textAlign(CENTER, CENTER);
  fill(colour.r, colour.g, colour.b);
  text(letters[i], 150, 170);

}