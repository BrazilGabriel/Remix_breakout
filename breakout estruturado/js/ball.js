var x = canvas.width/2;
var y = canvas.height-30;

if (stage == 1){
  var vxi = 3;
  var vyi = -3;
}
else if (stage == 2){
  var vxi = 4;
  var vyi = -4;
}
else if (stage == 3){
  var vxi = 5;
  var vyi = -5;
}
else{
  var vxi = 6;
  vyi = -6;
}

var vx = vxi;
var vy = vyi;
var ballRadius = 10;

function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
}
