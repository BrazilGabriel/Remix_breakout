  var brickRowCount = 3;//lqtd de linhas
  var brickColumnCount = 5;//qtd de colunas
  var brickWidth = 50;//largura dos bricks
  var brickHeight = 50;//altura dos bricks
  //distancia dos bricks
  var brickPadding = 40;
  //margem superior
  var brickOffsetTop = 140;
  //margem da esquerda
  var brickOffsetLeft = 95;

  //sprites dos bricks
  var obstacle1 = new Image();
  obstacle1.src = "imgs/O1.png";

  var obstacle2 = new Image();
  obstacle2.src = "imgs/O2.png";

  var obstacle3 = new Image();
  obstacle3.src = "imgs/O3.png";

  var obstacle4 = new Image();
  obstacle4.src = "imgs/O4.png";

  var obstacle5 = new Image();
  obstacle5.src = "imgs/O5.png";

  var blood = new Image();
  blood.src = "imgs/blood.png";
  //lista criando os bricks com posição, estado e sprite
  var bricks = [];
  for(c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++){
      bricks[c][r] = {x: 0, y: 0, status: 1, choice: getRandomInt(0,2)};
    }
  }

  function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
      for(r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1){
          var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          if (bricks[c][r].choice == 0 ){
            if (stage == 1){
              context.drawImage(obstacle2, brickX, brickY, 50, 50);
          }
            else if (stage == 2){
              context.drawImage(obstacle3, brickX, brickY, 50, 50);
            }
          else{
              context.drawImage(obstacle4, brickX, brickY, 50, 50);
            }
          }
          else if (bricks[c][r].choice == 1) {
            if (stage == 1){
              context.drawImage(obstacle5, brickX, brickY, 50, 50);
          }
            else if (stage == 2){
              context.drawImage(obstacle1, brickX, brickY, 50, 50);
            }
          else{
              context.drawImage(obstacle2, brickX, brickY, 50, 50);
            }
          }
          else if (bricks[c][r].choice == 2){
            if (stage == 1){
              context.drawImage(obstacle3, brickX, brickY, 50, 50);
          }
            else if (stage == 2){
              context.drawImage(obstacle4, brickX, brickY, 50, 50);
            }
            else{
              context.drawImage(obstacle5, brickX, brickY, 50, 50);
            }
          }
        }
      }
    }
  }
  //definição da função de random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
