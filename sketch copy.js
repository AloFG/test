let words = ["axolotl", "dog", "panda", "penguin"];

let index = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text(words[index], 12, 200);

}

function mousePressed(){
  index = index + 1;

  if (index >= words.length) {
    index = 0;
  }
}