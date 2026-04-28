let tasks = []; //empty array to hold tasks

document.getElementById('addTaskBtn').addEventListener('click', function () {
    //get the value from input field
    let taskInput = document.getElementById('taskInput').value;
    //check if input is empty
    if (taskInput) {
        //add new task to tasks array
        tasks.push(taskInput);
        //clear input field value
        document.getElementById('taskInput').value = '';
        //update task list display
        displayTasks();
    }
});

document.getElementById('taskInput').addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {


        //get the value from input field
        let taskInput = document.getElementById('taskInput').value;
        //check if input is empty
        if (taskInput) {
            //add new task to tasks array
            tasks.push(taskInput);
            //clear input field value
            document.getElementById('taskInput').value = '';
            //update task list display
            displayTasks();
        }
    }
});

function displayTasks() {
    //select the task list element
    let taskList = document.getElementById('taskList');
    //clear existing HTML list
    taskList.innerHTML = '';

    //ai
    // ✅ If no tasks → show welcome message
    if (tasks.length === 0) {
        taskList.innerHTML = "<li class='list-group-item'>Welcome! Add a task to get started.</li>";
        return;
    }

    //loop through tasks array and create list items
    tasks.forEach((task, index) => {
        //create <li> element for each task
        let li = document.createElement('li');
        //add styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );

        //set the innerHTML of the list with a task and remove btn
        li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>✓</button>`;

        //append the list item to the task list
        taskList.appendChild(li);
    })


}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = []
    displayTasks()
})

// to get name to show before to-do list 
//ai(used the english we wrote down)
function setName() {
    let name = document.getElementById('playerNameInput').value;
    if (name) {
        document.getElementById('title').innerText = name + "'s To-Do List";
        document.getElementById('nameScreen').style.display = "none";
        document.getElementById('todoApp').style.display = "block";
    }
}

document.getElementById('playerNameInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        setName();
    }
});

//dark mode 
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}