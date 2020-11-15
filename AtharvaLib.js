function isTouching(R1,R2){
    if (R1.x-R2.x<R1.width/2+R2.width/2 &&
      R2.x-R1.x<R1.width/2+R2.width/2 &&
      R1.y-R2.y<R1.height/2+R2.height/2 &&
      R2.y-R1.y<R1.height/2+R2.height/2){
         
        
        return true;
      } 
      else {
        
        return false;
      }
  }
  function bounceOff(C1,C2){
    if (C1.x-C2.x<C1.width/2+C2.width/2 &&
      C2.x-C1.x<C1.width/2+C2.width/2){
    C1.velocityX=C1.velocityX*(-1);
    C2.velocityX=C2.velocityX*(-1);
      }
    if (C1.y-C2.y<C1.height/2+C2.height/2 &&
      C2.y-C1.y<C1.height/2+C2.height/2){
        C1.velocityY=C1.velocityY*(-1);
        C2.velocityY=C2.velocityY*(-1);
  
      }
  }