const question = document.querySelector('.question-box > .question');
const answers = document.querySelectorAll('.question-box > .answers-box > .answer');

const questionBox = document.querySelector('.question-box')
const gameWonBox = document.querySelector('.game-won');
const gameLostBox = document.querySelector('.game-lost');
const restartBtn = document.querySelectorAll('.restart-btn');

const showQuestion = () => {

fetch('/question', {
    method: 'GET',
})
.then(res => res.json())
.then(data => {
    if (typeof data.winner === 'undefined') {
        question.innerText = data.question;
        answers.forEach( (answer, i) => {
       answer.innerText = data.answers[i];
    })
    }
    else if (data.winner === true) {
        questionBox.style.display = 'none';
        gameWonBox.style.display = 'flex';
    }
    else if (data.winner === false) {
        questionBox.style.display = 'none';
        gameLostBox.style.display = 'flex';
    }
})

}

const handleAnswerClick = (btnID) => {
    fetch(`/answer/${btnID}`, {
        method: 'POST',
    })
    .then(showQuestion())
}


const handleRestartGameBtn = () => {
    fetch('/restart', {
        method: 'GET',
    })
    .then(showQuestion())
    .then(() => {
        gameWonBox.style.display = 'none';
        gameLostBox.style.display = 'none';
        questionBox.style.display = 'flex';
    })
}


showQuestion(); //at the beggining
answers.forEach((btn) => btn.addEventListener('click', (e) => handleAnswerClick(e.target.dataset.ans)))
restartBtn.forEach(btn => btn.addEventListener('click', () => handleRestartGameBtn()))