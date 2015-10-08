//paddle initial control
var keys = {
    right: false,
    left: false,
    up: false,
    down: false,
    code : { // codigos para cada tecla
      left : 37,
      right : 39,
      up: 38,
      down : 40,
    }
}
//  var rightPressed = false;
//var leftPressed = false;
  //executa quando uma tecla é pressionada
  document.addEventListener("keydown", keyDownHandler, false);
  //executa quando uma tecla é solta
  document.addEventListener("keyup", keyUpHandler, false);


  //function gamepad
    function keyDownHandler(e) {
      if(e.keyCode == keys.code.right) {
        keys.right = true;
      }
      else if(e.keyCode == keys.code.left) {
        keys.left = true;
      }
      if(e.keyCode == keys.code.up) {
        keys.up = true;
      }
      else if(e.keyCode == keys.code.down){
        keys.down = true;
      }
    }

    function keyUpHandler(e) {
      if(e.keyCode == keys.code.right){
        keys.right = false;
      }
      else if(e.keyCode == keys.code.left) {
        keys.left = false;
      }
      if(e.keyCode == keys.code.up) {
        keys.up = false;
      }
      else if(e.keyCode == keys.code.down){
        keys.down = false;
      }
    }
