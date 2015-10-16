var canvas = document.getElementById("Canvas");
var context = canvas.getContext('2d');

var menuOff = false;
var sec = 0;
menuimage = false;

document.addEventListener("keydown", change, false);

music = new Audio();
music.src = "sounds/song.mp3";

//loop da musica de fundo
if (typeof music.loop == 'boolean')
{
    music.loop = true;
}
else
{
    music.addEventListener('ended', function() {
        this.currentTime = 0.2;
        this.play();
    }, false);
}
music.play();

//saída do menu
function change(){
  menuOff = true;
}
//contador do tempo de jogo
function second(){
if (menuOff){
  sec +=1;
}
}

function changeMenuImage(){
  menuimage = !menuimage;
}

setInterval(second,1000);
setInterval(changeMenuImage,500);

var menuBack = new Image();
menuBack.src = "imgs/Menu1.png";

var menuBack2 = new Image();
menuBack2.src = "imgs/Menu2.png";

function drawMenu(){
  if (menuimage){
  context.drawImage(menuBack, 0, 0, 600, 600);
  context.fillStyle = "blue";
  }
  else{
  context.drawImage(menuBack2, 0, 0, 600, 600);
  context.fillStyle = "red";
  }
  context.font = "20px Consolas";
  context.fillText("Last time you've killed "+localStorage.getItem("blocksBricked")+" players", canvas.width/4, canvas.height/1.45);
  context.fillText("in "+localStorage.getItem("seconds_elapsed")+" seconds!", canvas.width/2.5, canvas.height/1.35);
  music.play();
}


drawMenu();
