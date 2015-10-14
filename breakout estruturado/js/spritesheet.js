"use strict";

// Spritesheet: contém vários sprites em uma grade, com linhas e colunas
function Spritesheet(x, y, imagePath, spriteWidth, spriteHeight, context){
    this.x = x;
    this.y = y;
    this.context = context; 
    
    //Parametros do spritesheet
    this.spriteWidth = spriteWidth; // largura do sprite
    this.spriteHeight = spriteHeight; // altura do sprite
    this.image = new Image();
    this.image.src = imagePath;
    this.currentSprite = 0; // sprite atual a ser desenhado
    this.clipping = {x: 0, y: 0}; // área de recorte (clipping)
    
    // Ler dados da imagem assim que ela carregar
    // Usando localObj ao invés de this, porque na função onload()
    // o this irá se referir a imagem, não a classe atual
    this.width = 0;
    this.height = 0;
    this.numColumns = 0; // número de colunas
    this.numRows = 0; // número de linhas
    var localObj = this; // guardando this in localObj
    this.image.onload = function(){
        localObj.width = this.width;
        localObj.height = this.height;
        localObj.numColumns = localObj.width / localObj.spriteWidth;
        localObj.numRows = localObj.width / localObj.spriteHeight;
    }
}

Spritesheet.prototype.update = function(input, dt){

}

Spritesheet.prototype.draw = function(){
    // Determinando posições X e Y do clipping (recorte) dentro da imagem
    this.clipping.x = Math.floor(this.currentSprite % this.numColumns) * this.spriteWidth;
    this.clipping.y = Math.floor(this.currentSprite / this.numColumns) * this.spriteHeight;
    // Desenhando recor
    this.context.drawImage(this.image, 
                           this.clipping.x, this.clipping.y, this.spriteWidth, this.spriteHeight,
                           this.x, this.y, this.spriteWidth, this.spriteHeight);
}