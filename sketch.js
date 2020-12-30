var fixedRect, movingRect;
var object1, object2;
var obj1, obj2

function setup() {
  
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(1000,400, 50,150);
  object1.shapeColor = "yellow"
  object2 = createSprite(100,400,50,50)
  object2.shapeColor = "blue";
  object2.velocityX = 10;

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object1 , object2))
  {
    object1.shapeColor = "red";
    object2.velocityX = -10;
  object2.shapeColor = "red";

  }
  else
  {
    object1.shapeColor = "yellow";
    object2.shapeColor = "blue";
  }
  drawSprites();
}



