var paddleHeight = 30;
var paddleWidth = 150;
var paddleLeftHeight = 150;
var paddleLeftWidth = 30;
var paddleX = (canvas.width - paddleWidth)/2;
var paddleY = (canvas.height - paddleHeight);
var paddleLeftX = 0;
var paddleLeftY = (canvas.height-paddleLeftHeight)/2;
var paddle1 = new Image();
paddle1.src = "imgs/background.png";

function drawPaddle(){
  context.beginPath();
  context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
//  context.fillStyle = "0X000000";
//  context.fill();
  context.closePath();
}

function drawPaddleLeft(){
  context.beginPath();
  context.rect(paddleLeftX, paddleLeftY, paddleLeftWidth, paddleLeftHeight);
//  context.fillStyle = "#BF5050";
//  context.fill();
  context.closePath();
}
