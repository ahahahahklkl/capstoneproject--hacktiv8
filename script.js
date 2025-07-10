let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const numberInput = document.getElementById('numberInput');
const attemptsLeftDisplay = document.getElementById('attemptsLeft');
const feedbackDisplay = document.getElementById('feedback');
const playAgainButton = document.getElementById('playAgain');
const guessButton = document.getElementById('guessButton');
const gameContainer = document.querySelector('.game-container');

attemptsLeftDisplay.textContent = attemptsLeft;

guessButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', resetGame);

function checkGuess() {
    const guess = parseInt(numberInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedbackDisplay.textContent = "Masukkan angka antara 1 sampai 100.";
        return;
    }

    attemptsLeft--;
    attemptsLeftDisplay.textContent = attemptsLeft;

    if (guess < randomNumber) {
        feedbackDisplay.textContent = "Angka yang kamu tebakan terlalu kecil.";
    } else if (guess > randomNumber) {
        feedbackDisplay.textContent = "Angka yang kamu tebakan terlalu besar.";
    } else {
        feedbackDisplay.textContent = "Selamat, kamu menang!";
        changeBackgroundToGreen();
        endGame();
        return;
    }

    if (attemptsLeft <= 0) {
        feedbackDisplay.textContent = `Kamu kalah! Angka yang benar adalah ${randomNumber}.`;
        endGame();
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    numberInput.value = '';
    feedbackDisplay.textContent = '';
    attemptsLeftDisplay.textContent = attemptsLeft;
    gameContainer.style.backgroundColor = '';
    numberInput.disabled = false;
    guessButton.disabled = false;
    playAgainButton.disabled = true;
}

function endGame() {
    numberInput.disabled = true;
    guessButton.disabled = true;
    playAgainButton.disabled = false;
}

function changeBackgroundToGreen() {
    gameContainer.style.backgroundColor = 'lightgreen';
}
