var stage = 1;
var stageX = 60;
var stageY = 40;
var blocksBricked = 0;
var bbX = 200;
var bbY = 40;
var tX = 400;
var tY = 40;

var hudback = new Image();
hudback.src = "imgs/scoreboard.png";

function updateScore(){
  if (localStorage.getItem("stage") == 2){
    stage = 2;
  }
  context.fillStyle = "white";
  context.font = "16px Consolas";
  context.fillText("Stage: "+stage+"", stageX, stageY);
  context.fillText("Players Killed: "+blocksBricked +"", bbX, bbY);
  context.fillText("Elapsed Time: "+ sec +"" , tX, tY);
  localStorage.setItem("seconds_elapsed", sec);
  }
