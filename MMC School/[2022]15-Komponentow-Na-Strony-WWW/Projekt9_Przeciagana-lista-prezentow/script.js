const presents = document.querySelectorAll('.present')
const boxes = document.querySelectorAll('.box')
const presentsBox = document.querySelector('.presents-box')
const chosenBox = document.querySelector('.chosen-box')
const sendBtn = document.querySelector('.send-btn')

presents.forEach(present => {
    present.addEventListener('dragstart', () => {
        present.classList.add('is-dragged')
        
    })

    present.addEventListener('dragend', () => {
        present.classList.remove('is-dragged')
    })
})


boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggedPresent = document.querySelector('.is-dragged')
        if(!draggedPresent.classList.contains('present-disabled')) {
        box.append(draggedPresent)
        }
        
        handlePresents();
    })
})



const handlePresents = () => {
    const presentsLeft = presentsBox.querySelectorAll('.present');
    if (presentsLeft.length <= 3) {
        presentsLeft.forEach(p => {
            p.setAttribute('draggable', false)
            p.classList.add('present-disabled')
        })
        sendBtn.disabled = false
    }
    else {
        presentsLeft.forEach(p => {
            p.setAttribute('draggable', true)
            p.classList.remove('present-disabled')
        })
        sendBtn.disabled = true
    }
}