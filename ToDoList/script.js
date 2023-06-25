const todoList = new Array;

function mytodo(){
    const taskInput = document.querySelector('.todo');
    const task =taskInput.value;

    const dateInput = document.querySelector('.deadline');
    const date = dateInput.value;

    todoList.push({
        taskName: task,
        dueDate: date
    });

    displayTodo();
    taskInput.value = '';
    dateInput.value = '';
}

function displayTodo(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const todoDetails = todoList[i];
        const taskName = todoDetails.taskName;
        const dueDate = todoDetails.dueDate;

        const todoHTML = `
        <p class="taskName">${taskName}</p>
        <p class="dueDate">${dueDate}</p>
        <button class="deleteButton" onclick="removetodo(${i})">Remove</button>`;

        todoListHTML += todoHTML;
    }

    document.querySelector('.listoftodos').innerHTML = todoListHTML;
}

function removetodo(index){
    todoList.splice(index, 1);
    displayTodo();
}

function refresh() {
    window.location.reload();
}

function priority(){
    todoList.sort(function (a, b){
        return new Date(a.dueDate) - new Date(b.dueDate);
    });
    displayTodo();
}