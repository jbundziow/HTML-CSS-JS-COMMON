'use strict'

const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMomey = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

const lightColorBtn = document.querySelector('.light')
const darkColorBtn = document.querySelector('.dark')


const openTransactionPanel = () => {
    addTransactionPanel.style.display = 'flex'
}

const closeTransactionPanel = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs();
}

const addTransaction = (name, amount, category) => {
    if (name !== '' && amount !== '' && parseFloat(amount) !== 0 && category !== 'none') {
        if (parseFloat(amount) > 0) {
            addIncome(name, parseFloat(amount).toFixed(2), getCategoryIcon(category));
        }
        else {
            addExpense(name, parseFloat(amount).toFixed(2), getCategoryIcon(category));
        }

        //at the end
        closeTransactionPanel();
    }
    else {
        alert('Uzupełnij poprawnie wszystkie pola!')
    }
}

const clearInputs = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.value = 'none';
}


const getCategoryIcon = (categoryValue) => {
    //TODO switch -> return fa icon
}

const addIncome = (name, amount, category) => {
    //TODO
}

const addExpense = (name, amount, category) => {
    //TODO
}


const changeStyle = (color) => {
    const lightColorCode = '#F9F9F9'
    const darkColorCode = '#14161F'
    const lightColorBorderCode = 'rgba(0, 0, 0, .2)'
    const darkColorBorderCode = 'rgba(255, 255, 255, .2)'

    switch (color) {
        case 'light':
            document.documentElement.style.setProperty('--first-color', lightColorCode)
            document.documentElement.style.setProperty('--second-color', darkColorCode)
            document.documentElement.style.setProperty('--border-color', lightColorBorderCode)
            break;
    
        case 'dark':
            document.documentElement.style.setProperty('--first-color', darkColorCode)
            document.documentElement.style.setProperty('--second-color', lightColorCode)
            document.documentElement.style.setProperty('--border-color', darkColorBorderCode)
            break;
    }
}


addTransactionBtn.addEventListener('click', openTransactionPanel)
cancelBtn.addEventListener('click', closeTransactionPanel)
saveBtn.addEventListener('click',() =>{addTransaction(nameInput.value, amountInput.value, categorySelect.value)})
lightColorBtn.addEventListener('click', () => {changeStyle('light')})
darkColorBtn.addEventListener('click', () => {changeStyle('dark')})


