//bricks collision
var desiredFps = 120;

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
          b.status = 0;
          blocksBricked += 1;
          }
        }
      }
    }
  }

function collisionPaddle(){
//bonce bol horinzontal
  if(x + vx >= canvas.width - ballRadius) {
    vx = -vx;
  }
  if (y <= 0){
    vy = -vy;
  }
  //check ball y = paddle y
  if(y + ballRadius >= canvas.height-ballRadius) {
    //check touch on paddle
    if(x >= paddleX && x <= paddleX + paddleWidth) {
        //change direction in function of position in paddle
        if (x+ballRadius >= paddleX && x-ballRadius < paddleX + paddleWidth/5){
          vx = -vxi;
        }
        else if (x+ballRadius>= paddleX + paddleWidth/5 && x-ballRadius < paddleX + 2*paddleWidth/5){
          vx = -vxi/2;
        }
        else if (x+ballRadius >= paddleX + 2*(paddleWidth/5) && x-ballRadius < paddleX + 3*paddleWidth/5){
          vx = 0;
        }
        else if (x+ballRadius >= paddleX + 3*paddleWidth/5 && x-ballRadius < paddleX + 4*paddleWidth/5){
          vx = vxi/2;
        }
        else{
          vx = vxi
        }
        vy = -vy;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(y - vy >= canvas.height - ballRadius){
      alert("Game Over");
      document.location.reload();
    }
  }
  //check ball x = paddleLeftX
  if(x + vx <= paddleLeftWidth) {
    //check touch on paddle
    if(y+ballRadius >= paddleLeftY && y+ballRadius <= paddleLeftY + paddleLeftHeight) {
        //change direction in function of position in paddle
        if (y >= paddleLeftY && y < paddleLeftY + paddleLeftHeight/5){
          vy = vyi;
        }
        else if (y >= paddleLeftX + paddleWidth/5 && y < paddleLeftX + 2*paddleLeftHeight/5){
          vy = vyi/2;
        }
        else if (y >= paddleLeftX + 2*(paddleWidth/5) && y < paddleLeftX + 3*paddleLeftHeight/5){
          vy = 0;
        }
        else if (y >= paddleLeftX + 3*paddleWidth/5 && y < paddleLeftX + 4*paddleLeftHeight/5){
          vy = -vyi/2;
        }
        else{
          vy = -vyi
        }
        vx = -vx;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(x <= paddleLeftWidth-ballRadius){
      alert("Game Over");
      document.location.reload();
    }
  }
}

function draw() {
  if (menuOff){
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawPaddleLeft();
  collisionBricks();
  collisionPaddle();
  updateScore();
  if(keys.right && paddleX < canvas.width - paddleWidth) {
    paddleX += 3;
    paddleLeftY +=3;
  }
  else if(keys.left && paddleX > 0) {
    paddleX -= 3;
    paddleLeftY -=3;
  }
  //move ball
  x += vx;
  y += vy;
  //move paddle
}

}
setInterval(draw, 1000/desiredFps);
