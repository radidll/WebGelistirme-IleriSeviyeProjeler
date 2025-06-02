const questions = [{
        question: "JavaScript'te değişken tanımlamak için hangi kelime kullanılır?",
        answers: [
            { text: "var", correct: true },
            { text: "define", correct: false },
            { text: "letus", correct: false },
            { text: "int", correct: false }
        ]
    },
    {
        question: "HTML'de bir paragraf etiketi hangisidir?",
        answers: [
            { text: "<p>", correct: true },
            { text: "<h1>", correct: false },
            { text: "<div>", correct: false },
            { text: "<span>", correct: false }
        ]
    },
    {
        question: "CSS'de renk belirtmek için hangi özellik kullanılır?",
        answers: [
            { text: "color", correct: true },
            { text: "font-style", correct: false },
            { text: "background", correct: false },
            { text: "border", correct: false }
        ]
    },
    {
        question: "JavaScript'te fonksiyon nasıl tanımlanır?",
        answers: [
            { text: "function myFunc() {}", correct: true },
            { text: "func myFunc() {}", correct: false },
            { text: "def myFunc() {}", correct: false },
            { text: "func:myFunc() {}", correct: false }
        ]
    },
    {
        question: "HTML'de sayfa başlığı hangi etiket içinde tanımlanır?",
        answers: [
            { text: "<title>", correct: true },
            { text: "<header>", correct: false },
            { text: "<head>", correct: false },
            { text: "<h1>", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('time');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let timeLeft = 30;
let timerInterval;
let score = 0;

function startTimer() {
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            disableAnswers();
            showNextButton();
        }
    }, 1000);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timerInterval);
    nextButton.classList.add('hide');
    resultElement.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === 'true';
    if (correct) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    showNextButton();
}

function disableAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });
}

function showNextButton() {
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    resetState();
    resultElement.classList.remove('hide');
    resultElement.textContent = `Sınav tamamlandı! Doğru cevap sayısı: ${score} / ${questions.length}`;
    nextButton.textContent = 'Tekrar Başlat';
    nextButton.classList.remove('hide');
    nextButton.onclick = () => {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.textContent = 'Sonraki';
        showQuestion();
    };
}

window.onload = showQuestion;