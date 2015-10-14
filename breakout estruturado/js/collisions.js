function collisionBricks(){
  for(c = 0; c<brickColumnCount; c++){
    for(r = 0; r<brickRowCount; r++){
      var b = bricks[c][r];
      if (b.status == 1) {
        //verifica a colisao da bola com o brick
        if((x>= b.x && x <= b.x + brickWidth) && (y >= b.y && y <= b.y + brickHeight)){
          if(y >= b.y + (brickHeight/2)){
            vy = -vy;
          }
          else if(y <= b.y + brickHeight){
            vy = -vy;
          }
          else if(x < b.x){
            vx = -vx;
          }
          else if(x > b.x){
            vx = -vx;
          }
          hit.play();
          b.status = 0;
          blocksBricked += 1;
          context.drawImage(blood, b.x, b.y, 50, 50);
          xtoDelete = b.x;
          ytoDelete = b.y;
          played = true;
          }
        }
      }
    }
  }


function collisionPaddle(){
//bonce ball horinzontal
  if(x + vx >= canvas.width - ballRadius) {
    vx = -vx;
  }
  if (y <= 65){
    vy = -vy;
  }
  //check ball y = paddle y
  if(y + ballRadius >= canvas.height-ballRadius) {
    //check touch on paddle
    if(x >= paddleX && x <= paddleX + paddleWidth) {
        //change direction in function of position in paddle
        if (x+ballRadius >= paddleX && x-ballRadius < paddleX + paddleWidth/5){
          vx = vxi;
          vy = -vyi;
        }
        else if (x+ballRadius>= paddleX + paddleWidth/5 && x-ballRadius < paddleX + 2*paddleWidth/5){
          vx = vxi/2;
          vy = -vyi;
        }
        else if (x+ballRadius >= paddleX + 2*(paddleWidth/5) && x-ballRadius < paddleX + 3*paddleWidth/5){
          vx = 0;
          vy = -(vyi-1);
        }
        else if (x+ballRadius >= paddleX + 3*paddleWidth/5 && x-ballRadius < paddleX + 4*paddleWidth/5){
          vx = -vxi/2;
          vy = -vyi;
        }
        else{
          vx = -vxi
          vy = -vyi;
        }
        vy = -vy;
        hitB.play();
        anime=true;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(y - vy >= canvas.height - ballRadius){
      document.location.reload();
      stage = 1;
      localStorage.setItem("stage", stage);
    }
  }
  //check ball x = paddleLeftX
  if(x + vx <= paddleLeftWidth) {
    //check touch on paddle
    if(y+ballRadius >= paddleLeftY && y+ballRadius <= paddleLeftY + paddleLeftHeight) {
        //change direction in function of position in paddle
        if (y >= paddleLeftY && y < paddleLeftY + paddleLeftHeight/5){
          vy = -vyi;
          vx = -vxi;
        }
        else if (y >= paddleLeftX + paddleWidth/5 && y < paddleLeftX + 2*paddleLeftHeight/5){
          vy = -vyi/2;
          vx = -vxi;
        }
        else if (y >= paddleLeftX + 2*(paddleWidth/5) && y < paddleLeftX + 3*paddleLeftHeight/5){
          vy = 0;
          vx = -(vxi+1);
        }
        else if (y >= paddleLeftX + 3*paddleWidth/5 && y < paddleLeftX + 4*paddleLeftHeight/5){
          vy = vyi/2;
          vx = -vxi;
        }
        else{
          vy = vyi
          vx = -vxi;
        }
        vx = -vx;
        hitB.play();
        anime2=true;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(x <= paddleLeftWidth-ballRadius){
      document.location.reload();
      stage = 1;
      localStorage.setItem("stage", stage);
    }
  }
}
