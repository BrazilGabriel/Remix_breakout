var taco = new AnimatedSprite(paddleX,paddleY-50, "imgs/spritetaco.png", 121, 70, context);
var desiredFps = 60;
var lastUpdate = Date.now(); // tempo atual (para física)


played = false;
var bg = new Image();
bg.src = "imgs/background.png";

var hit = new Audio();
hit.src = "sounds/hitMan.mp3";
function init(){


    taco.animations.idle = {
      frames:[0],
      frameDuration:200
    }
    taco.animations.attack = {
      frames: [4,5],
      frameDuration: 100
    }
    // Adicionando animações do dragon
    taco.setAnimation("idle");

    // chama gameloop
    gameloop();
}

function gameloop(){

    // Requisitando próximo frame
    requestAnimFrame(gameloop);

    // A leitura da entrada do jogador já é feita no arquivo keyHandler.js
    // basta utilizar o objeto keys, que é global

    // Atualizar estado interno do jogo
    update();

    // Desenhar objetos do jogo
    render();
}



function update() {
  var now = Date.now();
  var dt = now - lastUpdate;
  lastUpdate = now;

  if (menuOff){
    taco.update(paddleX,paddleY, keys,dt);
    collisionBricks();
    collisionPaddle();


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
    if (paddleLeftY+paddleLeftHeight > canvas.height){
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

function render(){
    // limpar a tela
    if (menuOff){
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bg, 0, 0, 600, 600);
      context.drawImage(hudback, 0, 5, 600, 60);
      updateScore();
      drawBall();
      drawPaddle();
      drawPaddleLeft();
      drawBricks();
      taco.draw();
      if (played){
        context.drawImage(blood, xtoDelete, ytoDelete, 50, 50);
      }
    }

    // desenhar objetos do jogo


}
setInterval(update, 1000/desiredFps);
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / fps);
          };
})();
