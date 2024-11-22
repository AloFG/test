let num = 23;
let nums = [100, 25, 12, 72]; //elements order 0, 1 ,2 ,3

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);

  ellipse(100, 200, nums[0], nums[0]);
  ellipse(200, 200, nums[1], nums[1]);
  ellipse(300, 200, nums[2], nums[2]);
  ellipse(400, 200, nums[3], nums[3]);

}
