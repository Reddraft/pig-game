/*
GAME RULES:

1- The game has 2 players, playing in rounds
2- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
3- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
4- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
5- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
  var dice, diceDOM;

  // 1. get a random Number
  dice = Math.floor((Math.random() * 6) + 1);

  // 2. display result
  diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'img/dice-' + dice + '.png';

  // 3. update the round score but only if the rolled number is not 1
  if (dice !== 1) {
    // if dice is not 1 add score to round score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    // if dice number is 1 then switch player
    //if activePlayer is 0 then active player 1 else activePlayer 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //set roundScore back to 0
    roundScore = 0;
    //display both roundscores back to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //add active class if doesn't have it and remove it if it has it
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //hide dice
    diceDOM.style.display = 'none';

  }

});
