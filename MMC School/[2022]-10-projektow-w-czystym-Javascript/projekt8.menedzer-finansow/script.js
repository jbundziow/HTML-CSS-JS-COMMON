'use strict'

const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
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
let moneySumArr = [0];




const openTransactionPanel = () => {
    addTransactionPanel.style.display = 'flex'
}

const closeTransactionPanel = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs();
}

const addTransaction = (name, amount, category) => {
    if (name !== '' && amount !== '' && parseFloat(amount) !== 0 && category !== 'none') {
        if (parseFloat(amount) > 0 && category !== 'income') {
            //user selected wrong category
            alert('Wydatek nie może być dodatnią kwotą. Postaw znak "-" na początku kwoty lub zmień kategorię.')
        }
        else if (parseFloat(amount) < 0 && category === 'income') {
            alert('Ujemna kwota nie może być zapisana w kategorii "Przychód".')
        }
        else {
        const transactionDiv = document.createElement('div');
        transactionDiv.classList.add('transaction');
        transactionDiv.setAttribute('id',transactionID)
        transactionDiv.innerHTML = `
        <p class="transaction-name"><i class="${getCategoryIcon(category)}"></i> ${name}</p>
        <p class="transaction-amount">${parseFloat(amount).toFixed(2)}zł 
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
        moneySumArr.push(parseFloat(amount))
        updateAvailableFunds()
        closeTransactionPanel();
    }
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


const deleteTransaction = (id) => {
    const transactions = document.querySelectorAll('.transaction');
    transactions.forEach(transaction => {
        if (parseInt(transaction.getAttribute('id')) === id) {
            const amountOfThisTransaction = transaction.querySelector('.transaction-amount')
            const amountOfThisTransactionAsFloat = parseFloat(amountOfThisTransaction.textContent.trim().slice(0, -2))
            moneySumArr.push((-1)*amountOfThisTransactionAsFloat)
            updateAvailableFunds()
            transaction.remove()
        }
    });
}


const deleteAllTransactions = () => {
    incomeSection.innerHTML = '<h3>Przychód:</h3>'
    expensesSection.innerHTML = '<h3>Wydatki:</h3>'
    moneySumArr = [0]
    updateAvailableFunds()
}


const updateAvailableFunds = () => {
    let sum = 0;
    for (const element of moneySumArr) {
        sum += element;
    }
    if (sum !== 0) {
    availableMoney.textContent = sum.toFixed(2) + 'zł'
    }
    else {
        availableMoney.textContent = '0zł'
    }
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


const keyPress = (e) => {
    if(e.key === "Escape" && addTransactionPanel.style.display === 'flex') {
        closeTransactionPanel()
    }
}


addTransactionBtn.addEventListener('click', openTransactionPanel)
cancelBtn.addEventListener('click', closeTransactionPanel)
saveBtn.addEventListener('click',() =>{addTransaction(nameInput.value, amountInput.value, categorySelect.value)})
deleteAllBtn.addEventListener('click', deleteAllTransactions)
lightColorBtn.addEventListener('click', () => {changeStyle('light')})
darkColorBtn.addEventListener('click', () => {changeStyle('dark')})
document.addEventListener('keydown', keyPress) //close transaction panel after pressing 'Esc'
