'use strict'

const ballImg = document.querySelector('.ball-img > img')
const input = document.querySelector('.question-area > input')
const answer = document.querySelector('.question-area > .answer')
const error = document.querySelector('.question-area > .error')

const answers = ['Tak', 'Nie', 'Nie chcesz znać odpowiedzi na to pytanie...', 'Może...', 'Oczywiście, że tak!', 'Absolutnie nie!', 'Chyba tak', 'Chyba nie'];

const animateBall = () => {
    ballImg.classList.add('shake-animation')

    //end animation
    ballImg.addEventListener('animationend', () => {
        ballImg.classList.remove('shake-animation')
        checkQuestionCorrectness(input)
      });
}

const checkQuestionCorrectness = (input) => {
    if (input.value === '') {
        error.textContent = 'Pole jest puste!'
    }
    else if (input.value.slice(-1) !== '?') {
        error.textContent = 'Umieść znak "?" na końcu.'
    }
    else {
        showRandomAnswer(answers, answer);
    }
}

const showRandomAnswer = (arr,output) => {
    output.innerHTML = '';
    let span = document.createElement('span')
    span.textContent = 'Odpowiedź: ';
    output.append(span);
    output.append(arr[getRandomInt(arr.length)])
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

ballImg.addEventListener('click', () => {
    answer.textContent = '';
    error.textContent = '';
    animateBall()
})

