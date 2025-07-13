// Initialize the game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;

const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const scoreValue = document.getElementById("scoreValue");

// Handle the "Submit" button click event
submitBtn.addEventListener("click", () => {
  const guess = parseInt(userInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Please enter a valid number between 1 and 100!";
    result.style.color = "red";
  } else {
    if (guess < randomNumber) {
      result.textContent = "Too low! Try again.";
      result.style.color = "orange";
      score -= 1; // Deduct points for wrong guess
    } else if (guess > randomNumber) {
      result.textContent = "Too high! Try again.";
      result.style.color = "orange";
      score -= 1; // Deduct points for wrong guess
    } else {
      result.textContent = `Congratulations! You guessed the number!`;
      result.style.color = "green";
      score += 10; // Reward points for correct guess
      randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new number for next round
    }
    scoreValue.textContent = score; // Update score display
  }

  // Clear input field
  userInput.value = "";
});
