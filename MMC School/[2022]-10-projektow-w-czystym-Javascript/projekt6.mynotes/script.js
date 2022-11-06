'use strict'

const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')
let selectedValue
let cardID = 0


const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePanel = () => {
    notePanel.style.display = 'none'
    category.selectedIndex = 0
    textarea.value = ''
    error.style.visibility = 'hidden'
}


const addNote = () => {
    if (textarea.value !== '' && category.selectedIndex !== 0) {
        error.style.visibility = 'hidden'
        const selectedCategory = category.options[category.selectedIndex].text;
        const enteredText = textarea.value;
        createNote(selectedCategory, enteredText);
    }
    else {
        error.style.visibility = 'visible'
    }
}

const createNote = (title, text) => {
    const noteDiv = document.createElement('div')
    noteDiv.classList.add('note')
    noteDiv.setAttribute('noteID', cardID)
    cardID++;
    noteDiv.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${title}</h3>
        <button class="delete-note" onclick=deleteNote(${noteDiv.getAttribute('noteID')})>
        <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${text}
        </div>
        </div>
    `;
    noteDiv.style.backgroundColor = getCardColor(title);
    noteArea.append(noteDiv);
    closePanel();
}

const getCardColor = (type) => {
    switch (type) {
        case 'Zakupy':
            return 'rgb(223, 56, 20)'
            break;
        case 'Praca':
            return 'rgb(40, 225, 17)'
            break;
        case 'Inne':
            return 'rgb(218, 15, 231)'
            break;
    }
}

const deleteNote = (noteID) => {
    //OLD MORE COMPLICATED METHOD
    // const allCards = document.querySelectorAll('.note');
    // allCards.forEach(card => {
    //     if (parseInt(card.getAttribute('noteID')) === parseInt(noteID)) {
    //         card.remove();
    //     }
    // })

    //new simpler method
    const card = document.querySelector(`[noteID='${noteID}']`);
    card.remove()
}

const deleteAllNotes = () => {
    noteArea.textContent = '';
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
