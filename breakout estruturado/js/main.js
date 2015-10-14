//bricks collision
var desiredFps = 120;

played = false;
var bg = new Image();
bg.src = "imgs/background.png";

var hit = new Audio();
hit.src = "sounds/hitMan.mp3";

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
//bonce bol horinzontal
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
    }
    //if ball is not in paddle(verificarrr!!!!!!!!!!!!!!!!)
    else if(x <= paddleLeftWidth-ballRadius){
      document.location.reload();
      stage = 1;
      localStorage.setItem("stage", stage);
    }
  }
}

function update() {
  if (menuOff){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bg, 0, 0, 600, 600);
  context.drawImage(hudback, 0, 5, 600, 60);
  drawBricks();
  if (played){
  context.drawImage(blood, xtoDelete, ytoDelete, 50, 50);
  }
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
  if (paddleLeftY < 60){
    paddleLeftY = 60;
  }
  if (paddleLeftY+paddleLeftHeight > canvas.height)
  {
    paddleLeftY = canvas.height - paddleLeftHeight;
  }
  //move ball
  x += vx;
  y += vy;
  //move paddle
  localStorage.setItem("blocksBricked", blocksBricked);
}

if (blocksBricked == 15 | blocksBricked == 30 | blocksBricked == 45 | blocksBricked == 60){
    blocksBricked = 0;
    stage+=1;
    localStorage.setItem("stage", stage);
    for(c = 0; c<brickColumnCount; c++){
      for(r = 0; r<brickRowCount; r++){
        var b = bricks[c][r]
        b.status = 1;
      }
    }
  }
}

setInterval(update, 1000/desiredFps);
