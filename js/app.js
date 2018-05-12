// Enemies our player must avoid
class Enemy{
  constructor(y){
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;
    this.y = y;
  }
  update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(sprite, x, y){
    this.sprite = sprite;
    this.x = 200;
    this.y = 380;
  }
    update(dt){

    }
    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(){

    }
}

// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Player('images/char-boy.png');
const player1 = new Player('images/char-cat-girl.png');
const player2 = new Player('images/char-horn-girl.png');
const player3 = new Player('images/char-pink-girl.png');
const player4 = new Player('images/char-princess-girl.png');

const roach1 = new Enemy(300);
const roach2 = new Enemy();
const roach3 = new Enemy();
const roach4 = new Enemy();
const roach5 = new Enemy();
// Place all enemy objects in an array called allEnemies
let allEnemies = [roach1, roach2, roach3, roach4, roach5];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
