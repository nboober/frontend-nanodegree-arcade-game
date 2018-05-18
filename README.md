# frontend-nanodegree-arcade-game
# =================================

## Tasks

- [x] Put background images in the game.
- [x] Put character image in the game.
- [] Implement a character selection option when the game begins.
- [x] Implement Character Movement in the game.
- [x] Spawn enemies in random locations on the left side of the game map.
- [x] Spawn Gems, hearts, rocks, and other things in random areas of the game map.
- [x] Implement Enemy movement.
- [x] Implement Player collision functionality.
    - [x] Colliding with Water increases the score, resets the player, and resets the gem/ rock positioning
    - [x] Colliding with Enemy reduces score and ends the game
    - [] Colliding with Gems increase the score. Possibly creating other perks? (invincibility, slow time, super speed?)
    - [x] Colliding with rock stops player
- [x] The game continues forever until the player hits an enemy.

## Instructions

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Summary

Frogger type arcade game where the goal is to reach the water so you can get clean, amassing as many points as possible along the way. But be careful though!! Scary stank roaches are trying to get in the way of your journey to cleanliness.

## How-To-Play

- Fork my repository at https://github.com/nboober/frontend-nanodegree-arcade-game to your own.
- Clone your repository to a local repository on your pc.
- Drag the html file into an open browser page and let the fun commence!
    - Use the arrow keys to control your player.
    - Collect items to further increase your score and possibly gain power ups.
    - Reach the water in your goal to be clean.
    - Avoid the roaches in your path and try to beat your high score.

## Dependencies

This project uses Babel in order to properly implement ES6 on all browsers.
