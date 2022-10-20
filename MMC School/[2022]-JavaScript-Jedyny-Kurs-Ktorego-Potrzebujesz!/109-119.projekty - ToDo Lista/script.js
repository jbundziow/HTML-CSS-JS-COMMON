let todoInput;
let errorInfo; //under input
let addBtn;
let ulList;
let newTodo; //new todo as 'li'

//popup
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEEvents();
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist > ul');

    //popup
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}


const prepareDOMEEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', chechClick);
    popupAddBtn.addEventListener('click', changeTodoText);
    popupCloseBtn.addEventListener('click', closePopup);
    todoInput.addEventListener('keyup', enterKeyCheck);
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

const chechClick = e => {
if (e.target.matches('.complete')) {
    e.target.closest('li').classList.toggle('completed'); //line-through text
    e.target.classList.toggle('completed'); //line-through button
}
else if (e.target.matches('.edit')) {
    editTodo(e);
}
else if (e.target.matches('.delete')) {
    deleteTodo(e);
}
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
    popupInput.focus(); //set cursor on input
}

const changeTodoText = () => {
    popupInfo.textContent = '';
    if (popupInput.value === '') {
        popupInfo.textContent = "Nie wprowadziłeś żadnego tekstu!"
    }
    else {
        todoToEdit.firstChild.textContent = popupInput.value;
        popupInput.value = '';
        closePopup();
    }
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const deleteTodo = (e) => {
    e.target.closest('li').remove();
    if(ulList.innerHTML.trim() === '') {
        errorInfo.textContent = 'Brak zadań na liście.';
    }
}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewTodo();
    }
}


document.addEventListener('DOMContentLoaded', main);