let todoInput;
let errorInfo; //under input
let addBtn;
let ulList;
let newTodo; //new todo as 'li'

const main = () => {
    prepareDOMElements();
    prepareDOMEEvents();
    console.log(ulList);
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist > ul');
}


const prepareDOMEEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        ulList.append(newTodo);

        todoInput.value = '';
        errorInfo.textContent = '';
    }
    else {
        errorInfo.textContent = 'Wpisz treść zadania';
    }
}





//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', main);