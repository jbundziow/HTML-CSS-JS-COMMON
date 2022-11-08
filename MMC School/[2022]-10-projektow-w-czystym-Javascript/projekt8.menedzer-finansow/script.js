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
    switch (color) {
        case 'light':
            //TODO
            console.log('clicked light'); //OK
            break;
    
        case 'dark':
            //TODO
            console.log('clicked dark'); //OK
            break;
    }
}


addTransactionBtn.addEventListener('click', openTransactionPanel)
cancelBtn.addEventListener('click', closeTransactionPanel)
saveBtn.addEventListener('click',() =>{addTransaction(nameInput.value, amountInput.value, categorySelect.value)})
lightColorBtn.addEventListener('click', () => {changeStyle('light')})
darkColorBtn.addEventListener('click', () => {changeStyle('dark')})


