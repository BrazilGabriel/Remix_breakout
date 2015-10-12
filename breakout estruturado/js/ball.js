var x = canvas.width/2;
var y = canvas.height-30;
var vxi = 3;
var vyi = -3;
var vx = vxi;
var vy = vyi;
var ballRadius = 10;

function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = "#BFAD50";
  context.fill();
  context.closePath();
}
