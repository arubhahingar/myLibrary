var fixedRect, movingRect;
var movingRect1,fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(900, 200, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(500, 200,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixedRect1.velocityX = -5;
  movingRect1.velocityX = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(movingRect1,fixedRect1);

  drawSprites();
}

