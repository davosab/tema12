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

  startBtn = button("START", 40, 80, "#6AA84F", changeLetter);
  stopBtn = button("STOP", 160, 80, "#CC0000", stopLetter);

}

function button(text, x, y, bg, f) {
  let btn = createButton(text);
  btn.position(x, y);
  btn.style("background", bg);
  btn.style("border-radius", "6px");
  btn.style("height", "30px");
  btn.style("width", "100px");
  btn.mousePressed(f);
  return btn;
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