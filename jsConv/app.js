"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(characterSelection);

//Global Valriables
//Score
var score = 0;
var displayScore = void 0;
console.log(score);
//High Score
var highScore = 0;
var displayHighScore = void 0;
console.log(highScore);
//Lives
var lives = 3;
var displayLives = void 0;
console.log(lives);

//Function for player selection
function characterSelection() {
  var playerSelection, selected, selection;
  return regeneratorRuntime.wrap(function characterSelection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Select which character you want to be...");
          playerSelection = ["images/char-boy.png", "images/char-cat-girl.png", "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"];
          selected = [];
          selection = 0;

        case 4:
          if (!(selection < playerSelection.length)) {
            _context.next = 15;
            break;
          }

          console.log(selected);
          _context.t0 = selected;
          _context.next = 9;
          return playerSelection[selection];

        case 9:
          _context.t1 = _context.sent;

          _context.t0.splice.call(_context.t0, 0, 1, _context.t1);

          if (playerSelection[selection] === "images/char-princess-girl.png") {
            selection = -1;
          }

        case 12:
          selection++;
          _context.next = 4;
          break;

        case 15:
          return _context.abrupt("return", selected);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var selectedPlayer = characterSelection();
console.log(selectedPlayer);
var selectedChar = selectedPlayer.next().value;
console.log(selectedChar);

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 33) {
    selectedChar = selectedPlayer.next().value;
    player.sprite = selectedChar;
    console.log(selectedChar);
  }
  if (e.keyCode === 34) {
    selectedChar = selectedPlayer.prev().value;
    player.sprite = selectedChar;
    console.log(selectedChar);
  }
});

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
  function Player(sprite) {
    _classCallCheck(this, Player);

    this.sprite = sprite;
    this.x = 200;
    this.y = 400;
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      //If the player reaches the water the player is reset to original posotion and score is increased by 100
      if (this.y < 60) {
        this.x = 200;
        this.y = 400;
        score += 100;
        displayScore = document.getElementById('score').innerHTML = score;
        console.log("Score: " + score);

        //High Score updates with score if score becomes greater then the high score.
        if (score > highScore) {
          highScore = score;
          displayHighScore = document.getElementById('highScore').innerHTML = highScore;
          console.log("High Score: " + highScore);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }, {
    key: "handleInput",
    value: function handleInput(key) {
      if (key === 'left' && this.x > 0) {
        this.x -= 100;
        console.log(this.x);
      }
      if (key === 'right' && this.x < 400) {
        this.x += 100;
        console.log(this.x);
      }
      if (key === 'up' && this.y > 59) {
        this.y -= 85;
        console.log(this.y);
      }
      if (key === 'down' && this.y < 400) {
        this.y += 85;
        console.log(this.y);
      }
    }
  }]);

  return Player;
}();

// Enemies our player must avoid


var Enemy = function () {
  function Enemy() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [60, 145, 230];

    _classCallCheck(this, Enemy);

    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random() * 350;
    this.y = y[Math.floor(Math.random() * 3)];
  }

  _createClass(Enemy, [{
    key: "update",
    value: function update(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.

      //Enemy Movement
      this.x = Math.ceil(this.x + dt * 300 * Math.random() * 2);
      // console.log(this.x);

      //Enemy Resets position when reaching end of canvas
      if (this.x > 500) {
        this.x = Math.random() * -101;
        this.y = [60, 145, 225][Math.floor(Math.random() * 3)];
      }
      //Collision functionality with player
      if (this.x <= player.x && this.x + 50 >= player.x && this.y <= player.y && this.y + 50 >= player.y) {
        player.x = 200;
        player.y = 400;
        lives -= 1;
        displayLives = document.getElementById('lives').innerHTML = lives;

        //Game Over. Everything except the high score is reset
        if (lives === 0) {
          alert("Game Over!");
          lives = 3;
          displayLives = document.getElementById('lives').innerHTML = lives;
          score = 0;
          displayScore = document.getElementById('score').innerHTML = score;
          //heart Object Changes locations
          heart.x = [0, 100, 200, 300, 400][Math.floor(Math.random() * 5)];
          heart.y = [60, 145, 225][Math.floor(Math.random() * 3)];
          //Rock Object Changes locations
          rock.x = [0, 100, 200, 300, 400][Math.floor(Math.random() * 5)];
          rock.y = [60, 145, 225][Math.floor(Math.random() * 3)];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }]);

  return Enemy;
}();

var Extras = function () {
  function Extras(sprite) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 100, 200, 300, 400];
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [60, 145, 225];

    _classCallCheck(this, Extras);

    this.sprite = sprite;
    this.x = x[Math.floor(Math.random() * 5)];
    this.y = y[Math.floor(Math.random() * 3)];
  }

  _createClass(Extras, [{
    key: "render",
    value: function render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }]);

  return Extras;
}();

var Heart = function (_Extras) {
  _inherits(Heart, _Extras);

  function Heart(sprite) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 100, 200, 300, 400];
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [60, 145, 230];

    _classCallCheck(this, Heart);

    return _possibleConstructorReturn(this, (Heart.__proto__ || Object.getPrototypeOf(Heart)).call(this, sprite, x, y));
  }

  _createClass(Heart, [{
    key: "update",
    value: function update() {
      if (this.x <= player.x && this.x + 50 >= player.x && this.y <= player.y && this.y + 50 >= player.y) {
        lives += 1;
        displayLives = document.getElementById('lives').innerHTML = lives;
        delete this.x;
        delete this.y;
      }
    }
  }]);

  return Heart;
}(Extras);

var Rock = function (_Extras2) {
  _inherits(Rock, _Extras2);

  function Rock(sprite) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 100, 200, 300, 400];
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [60, 145, 230];

    _classCallCheck(this, Rock);

    return _possibleConstructorReturn(this, (Rock.__proto__ || Object.getPrototypeOf(Rock)).call(this, sprite, x, y));
  }

  return Rock;
}(Extras);

//Objects list
//Player object


var player = new Player("images/char-boy.png");

//Enemy object
var roach1 = new Enemy();
var roach2 = new Enemy();
var roach3 = new Enemy();
var roach4 = new Enemy();
var roach5 = new Enemy();

// Place all enemy objects in an array called allEnemies
var allEnemies = [roach1, roach2, roach3, roach4, roach5];

//Heart Object
var heart = new Heart("images/heart.png");
console.log(heart);
//Rock Object
var rock = new Rock("images/rock.png");
console.log(rock);

// Player control. This listens for key presses and sends the keys to the
// Player.handleInput() method
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  //Player control with Rock collision
  if (rock.y < player.y && rock.y + 100 > player.y && rock.x === player.x) {
    allowedKeys = {
      37: 'left',
      39: 'right',
      40: 'down'
    };
  } else if (rock.y > player.y && rock.y - 100 < player.y && rock.x === player.x) {
    allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right'
    };
  } else if (rock.x < player.x && rock.x + 200 > player.x && rock.y === player.y) {
    allowedKeys = {
      38: 'up',
      39: 'right',
      40: 'down'
    };
  } else if (rock.x > player.x && rock.x - 200 < player.x && rock.y === player.y) {
    allowedKeys = {
      37: 'left',
      38: 'up',
      40: 'down'
    };
  }

  player.handleInput(allowedKeys[e.keyCode]);
  console.log(allowedKeys[e.keyCode]);
});