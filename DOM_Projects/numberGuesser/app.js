let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listener
guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(guessInput.value)
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

// game-over win
    if(guess == 2 && guessesLeft != 0) {
        gameOver(true, `${guess} is correct, You won!`, 'green');
    } else {
        guessesLeft -= 1
        guessesLeft == 0 ? gameOver(false, `${guess} is incorrect, You lost!`) : setMessage(`${guess} is incorrect, attemps left ${guessesLeft}`, 'red');
    }

// play again


});

guessInput.addEventListener('focus', clearMessage);

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function clearMessage() {
    message.textContent = "";
}

function gameOver(win, msg) {
    win != true ? setMessage(msg, 'red') : setMessage(msg, 'green');
    guessInput.disabled = true;
}

function playAgain(e) {
    if(e.target.id.includes('guess-btn') && e.target.value == 'play again') {
        window.location.reload();
    }
}


