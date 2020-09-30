function setup() {
  createCanvas(800,400);
 fixedRec =  createSprite(100, 200, 100, 100);
 fixedRec.shapeColor = "green";
 fixedRec.debug = true
 movingRec =  createSprite(200, 200, 50, 100);
 movingRec.shapeColor = "green";
 movingRec.debug = true
}

function draw() {
  background(255,255,255);  
  movingRec.x = mouseX;
  movingRec.y = mouseY;
  if(movingRec.x-fixedRec.x < fixedRec.width/2+movingRec.width/2&&
    fixedRec.x-movingRec.x < fixedRec.width/2+movingRec.width/2&&
    movingRec.y-fixedRec.y < fixedRec.height/2+movingRec.height/2&&
    fixedRec.y-movingRec.y < fixedRec.height/2+movingRec.height/2){
    movingRec.shapeColor = "blue";
    fixedRec.shapeColor = "blue";
  }
  else{
    movingRec.shapeColor = "green";
    fixedRec.shapeColor = "green";
  }
  drawSprites();
}