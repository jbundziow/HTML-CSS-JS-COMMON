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
const deleteBtn = document.getElementsByClassName('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

const lightColorBtn = document.querySelector('.light')
const darkColorBtn = document.querySelector('.dark')


let transactionID = 0;




const openTransactionPanel = () => {
    addTransactionPanel.style.display = 'flex'
}

const closeTransactionPanel = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs();
}

const addTransaction = (name, amount, category) => {
    if (name !== '' && amount !== '' && parseFloat(amount) !== 0 && category !== 'none') {

        const transactionDiv = document.createElement('div');
        transactionDiv.classList.add('transaction');
        transactionDiv.setAttribute('id',transactionID)
        transactionDiv.innerHTML = `
        <p class="transaction-name"><i class="${getCategoryIcon(category)}"></i> ${name}</p>
        <p class="transaction-amount">${amount}zł 
        <button class="delete" onclick=deleteTransaction(${transactionID})><i class="fas fa-times"></i></button>
        </p>
        `

        if (parseFloat(amount) > 0) {  
            incomeSection.append(transactionDiv)
        }
        else {
            expensesSection.append(transactionDiv)
        }

        transactionID++
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
    let result;
    switch (categoryValue) {
        case 'income':
            result = 'fas fa-money-bill-wave'
            break;

        case 'shopping':
            result = 'fas fa-cart-arrow-down'
            break;

            case 'food':
            result = 'fas fa-hamburger'
        break;

            case 'cinema':
                result = 'fas fa-film'
                break;

        default:
            result = 'fa-solid fa-triangle-exclamation' //error
            break;
    }
    return result;
}

//TODO: change name 'element' to something more suitable
const deleteTransaction = (id) => {
    const transactions = document.querySelectorAll('.transaction');
    transactions.forEach(element => {
        if (parseInt(element.getAttribute('id')) === id) {
            element.remove()
        }
    });
}


//TODO: function deleteAllTransactions

//TODO: available funds count



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


