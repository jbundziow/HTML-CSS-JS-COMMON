const formPages = document.querySelectorAll('.page')
const steps = document.querySelectorAll('.step')
const progressBar = document.querySelector('.progress-bar')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let currentStep = 1


const handleNextBtn = () => {
    currentStep++;
    if (currentStep <= steps.length) {
        
    }
    else {
        currentStep = steps.length
    }
    disableBtnsIfNecessary(currentStep, steps.length)
    changePage(currentStep, formPages)
    showAnimation(currentStep)
}



const handlePrevBtn = () => {
    currentStep--;
    if (currentStep >= 1) {
        
    }
    else {
        currentStep = 1;
    }
    disableBtnsIfNecessary(currentStep, steps.length)
    changePage(currentStep, formPages)
    showAnimation(currentStep)
}


const disableBtnsIfNecessary = (currStep, stepLength) => {
    currStep = parseInt(currStep);
    stepLength = parseInt(stepLength);

    nextBtn.removeAttribute('disabled')
    prevBtn.removeAttribute('disabled')

    if (currStep === stepLength) {
        nextBtn.setAttribute('disabled', true)
    }
    else if (currStep === 1) {
        prevBtn.setAttribute('disabled', true)
    }
}

const changePage = (currStep, pagesArr) => {
    pagesArr.forEach(p => {
        if (currStep === parseInt(p.dataset.number)) {
            p.style.display = 'flex';
        }
        else {
            p.style.display = 'none';
        }
    })
}

const showAnimation = (currStep) => {
    steps.forEach (s => {
        if (parseInt(s.textContent) <= currStep) {
            s.classList.add('active-step')
        }
        else {
            s.classList.remove('active-step')
        }
    })
    progressBar.style.width = ((currentStep -1) / (steps.length - 1)) * 100 + '%'
}





nextBtn.addEventListener('click', handleNextBtn);
prevBtn.addEventListener('click', handlePrevBtn)