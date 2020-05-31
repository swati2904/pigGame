var scores, roundScore, activePlayer, gamePlaying;
init();
console.log(document.querySelector('.player-0-panel').classList)


// using the anoynomos function.
document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random Number.
        var dice = Math.floor(Math.random() * 6) + 1;

        // display the result..
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'   //block: The element displayed as a block-level element (like paragraphs and headers)
        diceDOM.src = 'dice-' + dice + '.png';


        // update the round score if the rolled number was NOT a 1. 
        if (dice !== 1) {
            //Add the scores
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //Next Player

            nextPlayer();
        }

    }
});
// DRY principle ;;;;;;


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add current score to global score
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player won the game....
        if (scores[activePlayer] >= 25) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }

    }
});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = "none";
}


// new button .............
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = "none";

    // function btn()
    // {
    //     // something
    // }
    // btn();

    var dice = document.querySelector('.dice');
    document.getElementById('score-0').textContent = '0';   //we could have used querySelector, but getElementById('id') is fast comparitively
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector("#current-" + activePlayer).textContent =dice;
//  document.querySelector("#current-" + activePlayer).innerHTML ='<em>'+dice+'</em>';


// var x= document.querySelector('#score-0').textContent;
// console.log(x);