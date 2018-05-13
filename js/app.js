//Function for player selection at start of game
function* characterSelection(){
  console.log("Select which character you want to be...");
let playerSelection = ["images/char-boy.png",  "images/char-cat-girl.png",  "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"];
let selected = [];

for (const selection of playerSelection){
  console.log(selected);
  selected.splice(0, 1, yield selection);
  }
  return selected;
}

const selectedPlayer = characterSelection();
console.log(selectedPlayer);
let selectedChar = selectedPlayer.next().value;
console.log(selectedChar);
selectedChar = selectedPlayer.next().value;
console.log(selectedChar);
selectedChar = selectedPlayer.next().value;
console.log(selectedChar);
selectedChar = selectedPlayer.next().value;
console.log(selectedChar);
selectedChar = selectedPlayer.next().value;
console.log(selectedChar);


//
// document.addEventListener('keyup', function(e) {
//     var switchChar = e.kecode;
//     switch(switchChar)
//     {
//         case 33:
//         return selectedChar;
//         console.log(selectedChar);
//     }
// });

// Enemies our player must avoid
class Enemy{
  constructor(y = [60, 145, 225]){
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y[Math.floor(Math.random()*3)];
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
    this.y = 390;
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
const player = new Player(selectedChar);

const roach1 = new Enemy();
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
