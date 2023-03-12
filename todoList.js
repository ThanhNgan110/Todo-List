const form = document.getElementById('form1');
const taskInput = document.getElementById('inputTask');
const addBtn = document.querySelector('.block-container-app .block-container-app__wrapper .block-container__appwrapper__task-input .taskAdd');
let  todoList = [];  // create an array in order to hold of list todo
let currentTaskInput = null;


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
        addBtn.style.background = '#0d1ece';
        taskInput.value = '';
        addTodo(taskInputValue);
        
    }
});

const addTodo = (taskInputValue => {
    // let todoList =[];  // create an array in order to hold of list todo
    const taskInput = {
        id: Date.now,
        name: taskInputValue,
    };
    console.log(todoList);
    currentTaskInput = taskInput;
    todoList.push(currentTaskInput);
    console.log(currentTaskInput);
    showTodo();

  

    
});

const showTodo = () => {
   
    const listTask = document.querySelector('.block-container__appwrapper__task-list .task-box');
    console.log(listTask);
    let node = document.createElement('li');
    node.classList.add('task');
    node.innerHTML = `
                            <label for="1">
                            <input type="checkbox" id="${currentTaskInput.id}">
                            <p>${currentTaskInput.name}</p>
                        </label>
                        <div class="setting">
                            <button type="button" class="btn-edit">
                                <img src="/sources/svg/edit-button-svgrepo-com.svg" alt="edit-icon"
                                    style=" width: 30px; height: auto;">
                            </button>
                            <button type="button" class="btn-delete">
                                <img src="/sources/svg/delete-svgrepo-com.svg" alt="delete-icon"
                                    style=" width: 30px; height: auto;">

                            </button>
                        </div>
    `;
    listTask.appendChild(node);
    console.log(node);
};









