var paddleHeight = 10;
var paddleWidth = 150;
var paddleX = (canvas.width - paddleWidth)/2;
var paddleY = (canvas.height - paddleHeight);
var paddleUpX = (canvas.width - paddleWidth)/2;
var paddleUpY = 0

function drawPaddle(){
  context.beginPath();
  context.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function drawPaddleUp(){
  context.beginPath();
  context.rect(paddleUpX, paddleUpY, paddleWidth, paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}
