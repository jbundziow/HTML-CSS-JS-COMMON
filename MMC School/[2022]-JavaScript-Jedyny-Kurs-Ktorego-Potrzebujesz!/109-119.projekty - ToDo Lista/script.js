let todoInput;
let errorInfo; //under input
let addBtn;
let ulList;
let newTodo; //new todo as 'li'

const main = () => {
    prepareDOMElements();
    prepareDOMEEvents();
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
     createToolArea(newTodo);
}

const createToolArea = (newTodo) => {
    
//create div
const toolsDiv = document.createElement('div');
toolsDiv.classList.add('tools');

//button complete
const buttonComplete = document.createElement('button');
buttonComplete.classList.add('complete');
const iconComplete = document.createElement('i');
iconComplete.classList.add('fas','fa-check');
buttonComplete.append(iconComplete);

//button edit
const buttonEdit = document.createElement('button');
buttonEdit.classList.add('edit');
buttonEdit.append('EDIT');

//button delete
const buttonDelete = buttonComplete.cloneNode(true); //using cloneNode method to not to edit initial buttonComplete
buttonDelete.classList.replace('complete','delete');
const iconDelete = buttonDelete.querySelector('i');
iconDelete.classList.replace('fa-check', 'fa-times');

//append buttons to myDiv
toolsDiv.append(buttonComplete, buttonEdit, buttonDelete);

//apend created <div> to lastLi
newTodo.append(toolsDiv);

//EASIER WAY
/*
newTodo.innerHTML += `
    <div class="tools">
    <button class="complete"><i class="fas fa-check"></i></button>
    <button class="edit">EDIT</button>
    <button class="delete"><i class="fas fa-times"></i></button>
    </div>
    `;
*/
}





//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', main);