var canvas = document.getElementById("Canvas");
var context = canvas.getContext('2d');
var menuOff = false;
var sec = 0;
document.addEventListener("keydown", change, false);

function change(){
  menuOff = true;

}
function second(){
if (menuOff){
  sec +=1;
}
}

setInterval(second,1000);

function drawMenu(){
  context.font = "70px Impact";
  context.fillStyle = "#0095DD";
  context.fillText("BreaCountry!", canvas.width/5, canvas.height/3);
  context.fillStyle = "#BFAD50";
  context.font = "20px Tahoma";
  context.fillText("Press any key to play!", canvas.width/3, canvas.height/2);
  context.fillStyle = "#00CC33";
  context.fillText("Last time you've killed "+localStorage.getItem("blocksBricked")+" players", canvas.width/3.9, canvas.height/1.5);
  context.fillText("in "+localStorage.getItem("seconds_elapsed")+" seconds!", canvas.width/2.5, canvas.height/1.4);
}


drawMenu();
