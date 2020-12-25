const playerScoreText = document.querySelector('.player__score.player-one');
const computerScoreText = document.querySelector('.player__score.player-two');
const gameWinnerText = document.querySelector('.game__winner-text');
const restartBtn = document.querySelector('.game__panel__button .restart-btn');

const gameChoicesImages = document.querySelectorAll('img.choice');

let playerScore = 0;
let computerScore = 0;


for (let choiceImg of gameChoicesImages) {

    choiceImg.addEventListener('click', function () {
        gameChoicesImages.forEach(choiceImg => {
            choiceImg.classList.remove('win', 'lose', 'draw')
            choiceImg.classList.add('disable');
        })
        choiceImg.classList.add('animate')

        setTimeout(() => {
            let playerChoice = choiceImg.getAttribute('data-choice');
            let computerChoiceImg = gameChoicesImages[Math.floor(Math.random() * gameChoicesImages.length)];
            let computerChoice = computerChoiceImg.getAttribute('data-choice');
            let winner = chooseWinner(playerChoice, computerChoice)
            showData(choiceImg, winner);
            choiceImg.classList.remove('animate')
            gameChoicesImages.forEach(choiceImg => choiceImg.classList.remove('disable'))
        }, 1000);
    })
}

restartBtn.addEventListener('click', restartGame);

function chooseWinner(playerChoice, computerChoice) {
    let winner;
    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            winner = 'draw';
        }
        else if (computerChoice == 'paper') {
            winner = 'computer';
        }

        else if (computerChoice == 'scissors') {
            winner = 'player';
        }
    }
    else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            winner = 'player';
        }
        else if (computerChoice == 'paper') {
            winner = 'draw'
        }

        else if (computerChoice == 'scissors') {
            winner = 'computer'
        }
    }
    else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            winner = 'computer'
        }
        else if (computerChoice == 'paper') {
            winner = "player"
        }

        else if (computerChoice == 'scissors') {
            winner = 'draw'
        }
    }

    return winner;
}

function showData(playerChoiceImg, winner) {
    if (winner == 'player') {
        playerScore++;
        playerScoreText.innerText = playerScore;
        gameWinnerText.innerText = 'You win';
        playerChoiceImg.classList.add('win');
    }
    else if (winner == 'computer') {
        computerScore++;
        computerScoreText.innerText = computerScore;
        gameWinnerText.innerText = 'Computer wins';
        playerChoiceImg.classList.add('lose');
    }
    else {
        gameWinnerText.innerText = "It's a draw";
        playerChoiceImg.classList.add('draw');
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = '0';
    computerScoreText.innerText = '0';
    gameWinnerText.innerText = 'Choose an option to start the game';
    gameChoicesImages.forEach(function (choiceImg) {
        choiceImg.classList.remove('win', 'lose', 'draw');
    })
}