const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(answer.type);
        answersElement.appendChild(button);
    });
    updateProgressBar();
}

function selectAnswer(type) {
    if (type === 'Teto') {
        score++;
    } else {
        score--;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    window.location.href = `/result.html?score=${score}`;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

showQuestion();
