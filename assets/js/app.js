// Game values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//  UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn  = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Game over
const gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input 
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    setMessage(msg);
};

// Listen for guess
guessBtn.addEventListener("click", () => {
    let guess = parseInt(guessInput.value);
    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    // Check if win
    if(guess === winningNum) {
        // Game over - won

        gameOver(true, `${winningNum} is correct! You win!` )
        
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - lost

            // Disable input 
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            //  Game continues - answer wrong

            // Clear input
            guessInput.value = "";
            // Tell user it's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
        }
    }
    
})

// Set message
const setMessage = (msg, color) => {
    message.textContent = msg;
    message.style.color = color;
}
// Delete message
const deleteMessage = () => {
    message.textContent = "";
}