"use strict";

function AnimatedSprite(x, y, imagePath, spriteHeight, spriteWidth, paddle, context){
    this.x = x;
    this.y = y;
    this.context = context;
    this.paddle = paddle

    // Inicialização do spritesheet
    this.spriteWidth = spriteHeight; // largura do sprite
    this.spriteHeight = spriteWidth; // altura do sprite
    this.imagePath = imagePath; // Imagem do spritesheet
    this.spritesheet = new Spritesheet(x, y, this.imagePath, this.spriteWidth, this.spriteHeight, context);

    // Parâmetros animação
    this.elapsedTime = 0; // Duração do frame atual
    this.frameDuration = 200; // Tempo de cada frame em milissegundos
    this.frames = [0]; // lista de frames inicial
    this.currentFrameIndex = 0; // Qual frame da lista deverá ser mostrado neste momento
    this.currentAnimation = ""; // animação sendo executada no momento

    // animações deste personagem
    this.animations = {}
}

AnimatedSprite.prototype.setAnimation = function(animationName){
    // Verifica se a animação já está sendo usada
    if(this.currentAnimation != animationName){
        // Verifica se existe uma animação com esse nome
        if(this.animations[animationName]){
            this.frames = this.animations[animationName].frames;
            this.frameDuration = this.animations[animationName].frameDuration;
            this.currentAnimation = animationName;
        }
        // Se não existir, ir para idle
        else {
            this.frames = this.animations["idle"].frames;
            this.frameDuration = this.animations["idle"].frameDuration;
            this.currentAnimation = "idle";
        }
        // Resetando controles da animação
        this.elapsedTime = 0;
        this.currentFrameIndex = 0;
    }
}

AnimatedSprite.prototype.update = function(input, dt){
    // Determina próximo frame da animação a ser desenhado
    this.elapsedTime += dt;
    // se a duração do frame atual se esgotou, avançar o frame
    if(this.elapsedTime >= this.frameDuration){
        this.elapsedTime = 0;
        this.currentFrameIndex++;
        if(this.currentFrameIndex >= this.frames.length){
            this.currentFrameIndex = 0;
            if(this.paddle==1){
              anime=false;
            }
            else{
              anime2=false;
            }
          }
    }
    if (this.paddle==1){
      this.x=paddleX+20;
      this.y=paddleY-32;
    }
    else{
      this.x=paddleLeftX-5;
      this.y=paddleLeftY+15;
    }

    //if(input.left == true){
      //  this.x -= 3;
  //  }
    //else if(input.right == true){
      //  this.x += 3;
    //}
}

AnimatedSprite.prototype.draw = function(){
    // Posicionando spritesheet interno
    this.spritesheet.x = this.x;
    this.spritesheet.y = this.y;
    // Setando o sprite correto
    this.spritesheet.currentSprite = this.frames[this.currentFrameIndex];
    // Desenhando na tela
    this.spritesheet.draw();
}

AnimatedSprite.prototype.getCollider = function(){
    // Colisor tem o tamanho de um sprite apenas
    return {x: this.x, y: this.y, w: this.spriteWidth, h: this.spriteHeight};
}

AnimatedSprite.prototype.isCollidingWith = function(other){
    if(other == null) return false;

    var collider = this.getCollider();
    if((collider.x + collider.w) > other.x &&
       (collider.y + collider.h) > other.y &&
       collider.x < (other.x + other.w) &&
       collider.y < (other.y + other.h)){
        return true;
    }
    else return false;
}
