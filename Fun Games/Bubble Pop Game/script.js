let score = 0;
let bubblesPopped = 0;
const maxBubbles = 20; // Set limit for winning

function createBubble() {
  if (bubblesPopped >= maxBubbles) return; // Stop if max reached

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 30 + 30;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * (window.innerWidth - size) + "px";
  bubble.style.animationDuration = Math.random() * 3 + 2 + "s";

  bubble.addEventListener("click", () => {
    popBubble(bubble);
  });

  document.getElementById("game-container").appendChild(bubble);

  setTimeout(() => {
    if (document.body.contains(bubble)) {
      bubble.remove();
      checkForDraw();
    }
  }, 5000);
}

function popBubble(bubble) {
  bubble.style.background = "rgba(255, 0, 0, 0.5)";
  bubble.style.transform = "scale(1.2)";
  bubble.style.transition = "transform 0.2s, opacity 0.2s";
  bubble.style.opacity = "0";

  score++;
  bubblesPopped++;
  document.getElementById("score").innerText = "Score: " + score;

  setTimeout(() => {
    bubble.remove();
    if (bubblesPopped >= maxBubbles) {
      showEndScreen("You Win! 🎉");
    }
  }, 200);
}

function checkForDraw() {
  const bubbles = document.querySelectorAll(".bubble");
  if (bubbles.length === 0 && bubblesPopped < maxBubbles) {
    showEndScreen("Draw! No more bubbles.");
  }
}

function showEndScreen(message) {
  document.getElementById("end-message").innerText = message;
  document.getElementById("end-screen").style.display = "flex";
}

function restartGame() {
  score = 0;
  bubblesPopped = 0;
  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("game-container").innerHTML = "";
  startGame();
}

function startGame() {
  setInterval(createBubble, 700);
}

startGame();
