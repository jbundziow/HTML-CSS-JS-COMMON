const question = document.querySelector('.question-box > .question');
const answers = document.querySelectorAll('.question-box > .answers-box > .answer');

const questionBox = document.querySelector('.question-box')
const gameWonBox = document.querySelector('.game-won');
const gameLostBox = document.querySelector('.game-lost');
const restartBtn = document.querySelectorAll('.restart-btn');

const halfOnHalfBtn = document.querySelector('.halfBtn');
const callFriendBtn = document.querySelector('.friendCallBtn');
const askCrowdBtn = document.querySelector('.crowdBtn');

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
       answer.removeAttribute('disabled') //remove 'half on half' effect if needed
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

        halfOnHalfBtn.removeAttribute('disabled');
        callFriendBtn.removeAttribute('disabled');
        askCrowdBtn.removeAttribute('disabled');
    })
}

const handleHelp = (type) => {
    // 0= half on half
    // 1 = call to a friend
    // 2 = ask the crowd
    let urlType;
    switch (type) {
        case 0:
            urlType = 'half'
            break;
        case 1:
            urlType = 'friend'
            break;
        case 2:
            urlType = 'crowd'
            break;            
        default:
            urlType = 'error'
            break;
    }

    fetch(`help/${urlType}`)
    .then(res => res.json())
    .then(data => {
        if(type === 0) {
            answers.forEach(ans => {
                if (data.answersToRemove.includes(Number(ans.dataset.ans))) {
                    ans.setAttribute('disabled','true')
                }
                halfOnHalfBtn.setAttribute('disabled','true');
            })
        }
        else if (type === 1) {
            alert(data.alertText);
            callFriendBtn.setAttribute('disabled','true');
        }
        else if (type === 2) {
            alert(`Wyniki ankiety wśród publiczności:
            A. ${data.availableAnswers[0]} --> ${data.chart[0]}%
            B. ${data.availableAnswers[1]} --> ${data.chart[1]}%
            C. ${data.availableAnswers[2]} --> ${data.chart[2]}%
            D. ${data.availableAnswers[3]} --> ${data.chart[3]}%
            `)
            askCrowdBtn.setAttribute('disabled','true');
        }
    })
}


showQuestion(); //at the beggining
answers.forEach((btn) => btn.addEventListener('click', (e) => handleAnswerClick(e.target.dataset.ans)))
restartBtn.forEach(btn => btn.addEventListener('click', () => handleRestartGameBtn()))

halfOnHalfBtn.addEventListener('click', () => handleHelp(0));
callFriendBtn.addEventListener('click', () => handleHelp(1));
askCrowdBtn.addEventListener('click', () => handleHelp(2));