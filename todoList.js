const form = document.getElementById('form1');
const taskInput = document.getElementById('inputTask');
const addBtn = document.querySelector('.block-container-app .block-container-app__wrapper .block-container__appwrapper__task-input .taskAdd');
const todoList = [];  // create an array in order to hold of list todo

form.addEventListener('submit', e => {
    e.preventDefault();
    const taskInputValue = taskInput.value.trim();
    console.log(taskInput);
    console.log(taskInputValue);
    console.log(addBtn);
    if (taskInputValue === '') {
        // addBtn.classList.remove('active');
        addBtn.style.background = '#0d1ece'
    }
    else {
        console.log('Not empty');
        // addBtn.classList.add('active');
        addBtn.style.background = '#aeb2de';
        addTodo(taskInputValue);
        showTodo(todoList);



    }
});

const addTodo = (taskInputValue => {
    // let todoList =[];  // create an array in order to hold of list todo
    const taskInput = {
        name: taskInputValue,
        checked: false,
    }
    todoList.push(taskInputValue);
    console.log(todoList);
});

const showTodo = (todoList => {
    array.forEach(todoList => {
        console.log(todoList);
    });



});












