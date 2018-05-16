//Global Valriables
  //Score Variable
let score = 0;
console.log(score);
  //High Score Variable
let highScore = 0;
console.log(highScore);
  //Lives Variable
let lives = 3;
console.log(lives);

//Function for player selection at start of game
function* characterSelection(){
  console.log("Select which character you want to be...");
let playerSelection = ["images/char-boy.png",  "images/char-cat-girl.png",  "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"];
let selected = [];

for (let selection = 0; selection < playerSelection.length; selection++){
  console.log(selected);
  selected.splice(0, 1, yield playerSelection[selection]);
  }
  return selected;
}

const selectedPlayer = characterSelection();
console.log(selectedPlayer);
let selectedChar = selectedPlayer.next().value;
console.log(selectedChar);


document.addEventListener('keyup', function(e) {
    if(e.keyCode === 33) {
        selectedChar = selectedPlayer.next().value;
        console.log(selectedChar);
    }
});

// Enemies our player must avoid
class Enemy{
  constructor(y = [60, 145, 225]){
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random()*350;
    this.y = y[Math.floor(Math.random()*3)];
  }

  update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Enemy Movement
    this.x = Math.ceil(this.x + (dt * 300 * Math.random()*2));
    // console.log(this.x);

    //Enemy Resets position when reaching end of canvas
    if(this.x > 500){
      this.x = Math.random()*-101;
      this.y = [60, 145, 225][Math.floor(Math.random()*3)];
    }
    //Collision functionality
    if ((this.x <= player.x && this.x + 50 >= player.x) && (this.y <= player.y && this.y + 50 >= player.y)){
      player.x = 200;
      player.y = 400;
      lives -= 1;
      let displayLives = document.getElementById('lives').innerHTML = lives;

    }
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
    this.y = 400;
  }
    update(){
      //If the player reaches the water the player is reset to original posotion and score is increased by 100
      if (this.y < 60){
        this.x = 200;
        this.y = 400;
        score += 100;
        let displayScore = document.getElementById('score').innerHTML = score;
        console.log("Score: " + score);

        //High Score updates with score if score becomes greater then the high score.
        if(score > highScore){
          highScore = score;
          let displayHighScore = document.getElementById('highScore').innerHTML = highScore;
          console.log("High Score: " + highScore);
        }

      }
    }
    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(key){
        if(key === 'left' && this.x > 0){
          this.x-=100;
          console.log(this.x);
        }
        if(key === 'right' && this.x < 400){
          this.x+=100
          console.log(this.x);
        }
        if(key === 'up' && this.y > 59){
          this.y-=85;
          console.log(this.y);
        }
        if(key === 'down' && this.y < 400){
          this.y+=85;
          console.log(this.y);
        }
    }
}

//Player instance
const player = new Player(selectedChar);

//Enemy Instances
const roach1 = new Enemy();
const roach2 = new Enemy();
const roach3 = new Enemy();
const roach4 = new Enemy();
const roach5 = new Enemy();

// Place all enemy objects in an array called allEnemies
let allEnemies = [roach1, roach2, roach3, roach4, roach5];

// This listens for key presses and sends the keys to your
// Player.handleInput() method
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    console.log(allowedKeys[e.keyCode]);
});
