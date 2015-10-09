var score = 0;
var scoremax = 9999;
var scoreX = 60;
var scoreY = 50;
var blocksBricked = 0;
var bbX = 200;
var bbY = 50;
var tX = 400;
var tY = 50;
var startDate = new Date();
var startTime = startDate.getTime();

context.font = "20px Tahoma";

function updateScore(){
  var date_now = new Date ();
  var time_now = date_now.getTime ();
  var time_diff = time_now - startTime;
  var seconds_elapsed = Math.floor ( time_diff / 1000 );
  context.fillStyle = "#56b69f";
  context.fillText("(Score: "+score+")", scoreX, scoreY);
  context.fillText("(Blocks Bricked: "+blocksBricked +")", bbX, bbY);
  context.fillText("(Elapsed Time: "+seconds_elapsed +")" , tX, tY);
  }
