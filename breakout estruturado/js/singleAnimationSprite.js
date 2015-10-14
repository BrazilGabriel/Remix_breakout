"use strict";

// Construtor - função que cria o objeto
function SingleAnimationSprite(x, y, imagePath, spriteWidth, spriteHeight, frames, context){
    this.x = x;
    this.y = y;
    this.context = context;

    // Inicialização do spritesheet
    this.spriteWidth = spriteWidth; // largura do sprite
    this.spriteHeight = spriteHeight; // altura do sprite
    this.imagePath = imagePath; // Imagem do spritesheet
    this.spritesheet = new Spritesheet(x, y, this.imagePath, this.spriteWidth, this.spriteHeight, context);

    // Parametros animação
    this.elapsedTime = 0; // Duração do frame atual
    this.frameDuration = 200; // Tempo de cada frame em milissegundos
    this.frames = frames; // lista de frames inicial
    this.currentFrameIndex = 0; // Qual frame da lista deverá ser mostrado neste momento

}

// Atualiza posição
SingleAnimationSprite.prototype.update = function(input, dt){
    this.elapsedTime += dt;
    if(this.elapsedTime >= this.frameDuration){
        this.elapsedTime = 0;
        this.currentFrameIndex++;
        if(this.currentFrameIndex >= this.frames.length){
            this.currentFrameIndex = 0;
        }
    }
}

SingleAnimationSprite.prototype.draw = function(){
    this.spritesheet.x = this.x;
    this.spritesheet.y = this.y;
    this.spritesheet.currentSprite = this.frames[this.currentFrameIndex];
    this.spritesheet.draw();
}

SingleAnimationSprite.prototype.getCollider = function(){
    return {x: this.x, y: this.y, w: this.spriteWidth, h: this.spriteHeight};
}
