var stage = 1;
var stageX = 60;
var stageY = 50;
var blocksBricked = 0;
var bbX = 200;
var bbY = 50;
var tX = 400;
var tY = 50;
var startDate = new Date();
var startTime = startDate.getTime();

context.font = "16px Arial Black";

function updateScore(){
  if (localStorage.getItem("stage") == 2){
    stage = 2;
  }
  var date_now = new Date ();
  var time_now = date_now.getTime ();
  var time_diff = time_now - startTime;
  var seconds_elapsed = Math.floor ( time_diff / 1000 );
  context.fillStyle = "black";
  context.fillText("(Stage: "+stage+")", stageX, stageY);
  context.fillText("(Blocks Bricked: "+blocksBricked +")", bbX, bbY);
  context.fillText("(Elapsed Time: "+seconds_elapsed +")" , tX, tY);
  localStorage.setItem("seconds_elapsed", seconds_elapsed);
  }
