var canvas = document.getElementById("Canvas");
var context = canvas.getContext('2d');

var desiredFps = 120

//bricks collision
function collisionBricks(){
  for(c = 0; c<brickColumnCount; c++){
    for(r = 0; r<brickRowCount; r++){
      var b = bricks[c][r];
      if (b.status == 1) {
        //verifica a colisao da bola com o brick
        if((x >= b.x && x <= b.x + brickWidth) && (y >= b.y && y <= b.y + brickHeight)){
          b.status = 0;
          //verifica se foi nos quadrantes inferiores do brik
          if(y >= brickHeight/2 + b.y){
            //verifica se foi no quadrante inferior esquerdo
            if((x >= b.x && x <= b.x + brickWidth/2 )&&(y >= brickHeight/2 + b.y && y <= b.y + brickHeight)){
              vx = -vxi;
              vy = -vyi;
              b.status = 0;
              break;
              break;
            }
            //verifica se foi no inferior direito
            else if((x > b.x + brickWidth/2 && x <= b.x + brickWidth) && (y >= brickHeight/2 + b.y && y <= b.y + brickHeight)){
              vx = vxi;
              vy = -vyi;
              b.status = 0;
              break;
              break;

            }
          }
          //verifica se foi nos quadrantes superiores
          else if (y < brickHeight/2 + b.y){
            //verifica se foi no superior esquerdo
            if((x >= b.x && x <= b.x + brickWidth/2)&&(y >= b.y && y < b.y + brickHeight/2)){
              vx = -vxi;
              vy = vyi;
              break;
              break;
              b.status = 0;
            }
            //verifica se foi no superior direito
            if((x > b.x + brickWidth/2 && x <= b.x + brickWidth)&&(y >= b.y && y < b.y + brickHeight/2)){
              vx = vxi;
              vy = vyi;
              break;
              break;
             b.status = 0;
            }
          }
//              b.status=0;
        }
      }
    }
  }
}

function collisionPaddle(){
//bonce bol horinzontal
  if(x + vx >= canvas.width - ballRadius || x + vx <= ballRadius) {
    vx = -vx;
  }
  //check ball y = paddle y
  if(y + ballRadius >= canvas.height-ballRadius) {
    //check touch on paddle
    if(x >= paddleX && x <= paddleX + paddleWidth) {
        //change direction in function of position in paddle
        if (x >= paddleX && x < paddleX + paddleWidth/5){
          vx = -vxi;
        }
        else if (x>= paddleX + paddleWidth/5 && x < paddleX + 2*paddleWidth/5){
          vx = -vxi/2;
        }
        else if (x >= paddleX + 2*(paddleWidth/5) && x < paddleX + 3*paddleWidth/5){
          vx = 0;
        }
        else if (x >= paddleX + 3*paddleWidth/5 && x < paddleX + 4*paddleWidth/5){
          vx = vxi/2;
        }
        else{
          vx = vxi
        }
        vy = -vy;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(y + vy >= canvas.height - ballRadius){
    alert("Game Over");
    document.location.reload();
    }
  }
  //check ball y = paddleUpY
  if(y + vy <= ballRadius) {
    //check touch on paddle
    if(x >= paddleUpX && x <= paddleUpX + paddleWidth) {
        //change direction in function of position in paddle
        if (x >= paddleUpX && x < paddleUpX + paddleWidth/5){
          vx = -vxi;
        }
        else if (x >= paddleUpX + paddleWidth/5 && x < paddleUpX + 2*paddleWidth/5){
          vx = -vxi/2;
        }
        else if (x >= paddleUpX + 2*(paddleWidth/5) && x < paddleUpX + 3*paddleWidth/5){
          vx = 0;
        }
        else if (x >= paddleUpX + 3*paddleWidth/5 && x < paddleUpX + 4*paddleWidth/5){
          vx = vxi/2;
        }
        else{
          vx = vxi
        }
        vy = -vy;
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(y + vy <= ballRadius){
    alert("Game Over");
    document.location.reload();
    }
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawPaddleUp();
  collisionBricks();
  collisionPaddle();

  //move paddle
  if(keys.right && paddleX < canvas.width - paddleWidth) {
    paddleX += 3;
    paddleUpX +=3;
  }
  else if(keys.left && paddleX > 0) {
    paddleX -= 3;
    paddleUpX -=3;
  }
  //move ball
  x += vx;
  y += vy;
}

setInterval(draw, 1000/desiredFps);
