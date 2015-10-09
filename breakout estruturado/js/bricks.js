  var brickRowCount = 3;
  var brickColumnCount = 5;
  var brickWidth = 50;
  var brickHeight = 40;
  //distance of bricks
  var brickPadding = 20;
  //top margin
  var brickOffsetTop = 240;
  //left margin
  var brickOffsetLeft = 122.5;

  var bricks = [];
  for(c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++){
      bricks[c][r] = {x: 0, y: 0, status: 1};
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
          context.beginPath();
          context.rect(brickX, brickY, brickWidth, brickHeight);
          context.fillStyle = "#56b69f";
          context.fill();
          context.closePath();
        }
      }
    }
  }
