let score = 0;
let gameStarted = false;
let pizzaInterval;
let pizzaSpeed = 2;

const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const pizza = document.getElementById("pizza");
const character = document.getElementById("character");
const scoreDisplay = document.getElementById("score");
const gameDiv = document.getElementById("game");

startBtn.addEventListener("click", startGame);

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    gameDiv.classList.remove("hidden");
    startBtn.classList.add("hidden");
    score = 0;
    scoreDisplay.textContent = score;
    spawnPizza();
    moveCharacter();
  }
}

function spawnPizza() {
  pizza.style.left = `${Math.random() * (gameArea.offsetWidth - 50)}px`; // Random horizontal position
  pizza.style.top = `-50px`; // Start above the screen
  pizza.style.animation = `fall ${pizzaSpeed}s linear infinite`; // Falling animation
  pizzaInterval = setInterval(checkCollision, 10);
}

function checkCollision() {
  const pizzaRect = pizza.getBoundingClientRect();
  const characterRect = character.getBoundingClientRect();

  if (pizzaRect.bottom > gameArea.offsetHeight) {
    resetPizza();
  }

  if (
    pizzaRect.bottom > characterRect.top &&
    pizzaRect.top < characterRect.bottom &&
    pizzaRect.left < characterRect.right &&
    pizzaRect.right > characterRect.left
  ) {
    score++;
    scoreDisplay.textContent = score;
    resetPizza();
  }
}

function resetPizza() {
  pizza.style.animation = "none"; // Stop falling animation
  spawnPizza(); // Spawn a new pizza
}

function moveCharacter() {
  document.addEventListener("mousemove", (event) => {
    let gameAreaRect = gameArea.getBoundingClientRect();
    let charX = event.clientX - gameAreaRect.left - character.offsetWidth / 2;
    charX = Math.max(
      0,
      Math.min(charX, gameArea.offsetWidth - character.offsetWidth)
    ); // Prevent character from moving outside
    character.style.left = `${charX}px`;
  });
}
