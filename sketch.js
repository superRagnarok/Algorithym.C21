var A1,A2,A3,A4;
function setup() {
  createCanvas(800,400);
  A1 = createSprite(400,200,100,50);
  A1.shapeColor="magenta";
  A1.velocityY=1;
  A2 = createSprite(400,100,50,50);
  A2.shapeColor="cyan";
  
  A3 = createSprite(400,300,50,50);
  A3.shapeColor="yellow";
  A3.velocityY=-1;
  A4 = createSprite(600,200,50,50);
  A4.shapeColor="coral";
}

function draw() {
  background(0);
  A2.x=mouseX;
  A2.y=mouseY;
  

      
        if (isTouching(A2,A3)){
          A3.shapeColor="orange";
          A2.shapeColor="blue";
        } else{
          A3.shapeColor="magenta";
          A2.shapeColor="cyan";
        }
       bounceOff(A1,A3);  
  drawSprites();
}
