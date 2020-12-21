var fixedrect, movingrect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedrect= createSprite(200, 200, 50, 80);
  fixedrect.shapeColor= "green";
  
  movingrect= createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";

  car=createSprite(200, 400, 50, 70);
  car.shapeColor="blue";
  car.velocityX=4;

  wall= createSprite(700, 400, 50, 70);
  wall.shapeColor="brown";
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x)
  
  if(isTouching(car, wall))
  {
      car.shapeColor="red";
      //car.velocityX=0;
  }
  bounceOff(car, wall);
  drawSprites();
} 

  










