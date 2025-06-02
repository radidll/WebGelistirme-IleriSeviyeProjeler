const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let birdY = 200;
let birdVelocity = 0;
const gravity = 0.5;
const jump = -8;
const birdRadius = 15;

let pipes = [];
let pipeWidth = 50;
let pipeGap = 120;
let pipeFrequency = 90; // frame aralığı
let frame = 0;

let score = 0;
let gameOver = false;

document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && !gameOver) {
        birdVelocity = jump;
    } else if (gameOver && e.code === "Space") {
        restartGame();
    }
});

function drawBird() {
    ctx.beginPath();
    ctx.arc(80, birdY, birdRadius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawPipes() {
    pipes.forEach(pipe => {
        ctx.fillStyle = "green";
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + pipeGap, pipeWidth, canvas.height - pipe.top - pipeGap);
    });
}

function updatePipes() {
    if (frame % pipeFrequency === 0) {
        const top = Math.floor(Math.random() * 250) + 50;
        pipes.push({ x: canvas.width, top: top });
    }

    pipes.forEach(pipe => {
        pipe.x -= 2;

        // Skor güncelle
        if (pipe.x + pipeWidth === 80) {
            score++;
        }
    });

    pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);
}

function checkCollision() {
    if (birdY + birdRadius > canvas.height || birdY - birdRadius < 0) return true;

    for (let pipe of pipes) {
        if (
            80 + birdRadius > pipe.x &&
            80 - birdRadius < pipe.x + pipeWidth &&
            (birdY - birdRadius < pipe.top || birdY + birdRadius > pipe.top + pipeGap)
        ) {
            return true;
        }
    }

    return false;
}

function restartGame() {
    birdY = 200;
    birdVelocity = 0;
    pipes = [];
    frame = 0;
    score = 0;
    gameOver = false;
    loop();
}

function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Skor: " + score, 10, 30);
}

function loop() {
    if (gameOver) {
        ctx.fillStyle = "red";
        ctx.font = "36px Arial";
        ctx.fillText("Game Over", 110, 300);
        ctx.font = "20px Arial";
        ctx.fillText("Yeniden başlatmak için boşluk tuşuna bas", 50, 340);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBird();
    drawPipes();
    drawScore();

    birdVelocity += gravity;
    birdY += birdVelocity;

    updatePipes();

    if (checkCollision()) {
        gameOver = true;
    } else {
        frame++;
        requestAnimationFrame(loop);
    }
}

loop();