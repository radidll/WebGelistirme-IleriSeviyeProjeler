let score1 = 0;
let score2 = 0;
let winningScore = 5;
let gameOver = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetBtn = document.getElementById("resetBtn");
const scoreDisplay1 = document.getElementById("score1");
const scoreDisplay2 = document.getElementById("score2");
const winningScoreSelect = document.getElementById("winningScore");

btn1.addEventListener("click", () => {
    if (!gameOver) {
        score1++;
        if (score1 === winningScore) {
            gameOver = true;
            scoreDisplay1.style.color = "green";
            scoreDisplay2.style.color = "red";
        }
        scoreDisplay1.textContent = score1;
    }
});

btn2.addEventListener("click", () => {
    if (!gameOver) {
        score2++;
        if (score2 === winningScore) {
            gameOver = true;
            scoreDisplay2.style.color = "green";
            scoreDisplay1.style.color = "red";
        }
        scoreDisplay2.textContent = score2;
    }
});

resetBtn.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
});

function reset() {
    score1 = 0;
    score2 = 0;
    gameOver = false;
    scoreDisplay1.textContent = "0";
    scoreDisplay2.textContent = "0";
    scoreDisplay1.style.color = "#007bff";
    scoreDisplay2.style.color = "#007bff";
}