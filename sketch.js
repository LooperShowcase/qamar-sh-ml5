let player;
let playerImg;
let obsImg;
let obstacles = [];
let obs2;
let bg;
let wordClassifier;

function preload() {
  playerImg = loadImage("player.png");
  obsImg = loadImage("obs.png");
  bg = loadImage("backgroung.jpg");
  obs2 = loadImage("obs2.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1000, 700);
  player = new Player();
  wordClassifier.classify(hearWord);
}

function hearWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
function draw() {
  background(bg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("GAME OVER!!");
      textSize(101);
      fill(163, 7, 20);
      text("GAME OVER!!", 202, 360);
      noLoop();
    }
  }

  player.show();
  player.move();
}
