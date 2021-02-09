const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task")

const localTasks = localStorage.getItem("tasks");
let taskArray;
if(localTasks != null) {
    taskArray = JSON.parse(localTasks);
} else {
    taskArray = [];
}


//load all event listener
loadEventListeners();

//load all event listeners
function loadEventListeners() {
    //add task event
    form.addEventListener("submit", addTask);
    taskList.addEventListener('click', deleteTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTask);
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);


}

function addTask(e) {
    let task = e.target.querySelector("#task").value;
    if(task === '') {
        alert("Add a task");
    }
   
    let li = createLI(task);

    taskList.appendChild(li);
    addTaskToLocalStorage(task);

    taskInput.value = '';

    //add task to local storage
    e.preventDefault();
}

function deleteTask(e) {
    let task = e.target.parentElement.parentElement.textContent;
    console.log(task);
    if(e.target.parentElement.className.includes("delete-item")) {
        if(confirm("Are you sure ?")) {
            e.target.parentElement.parentElement.remove();    
            for(let X in taskArray) {
                if(task == taskArray[X]) {
                    taskArray.splice(X, 1);
                    localStorage.setItem("tasks", JSON.stringify(taskArray));
                }
            }
        }
    }
}

function clearTasks(e) {
    if(e.target.classList.contains("clear-tasks")) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        taskArray = [];
        localStorage.removeItem("tasks");
    }
}

function filterTask(e) {
    var data = e.target.value;
    let list = Array.from(document.querySelectorAll(".collection-item"));
    for (let X in list) {
        console.log(list[X].textContent);
        if(list[X].textContent.indexOf(data) != -1) {
            list[X].style.display = 'block';
        } else {
            list[X].style.display = 'none';
        }
    }
}

function addTaskToLocalStorage(task) {
    taskArray.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function getTasks() {
    let tasks = localStorage.getItem("tasks");
    let taskArray = JSON.parse(tasks);
    for(let X in taskArray) {
        taskList.appendChild(createLI(taskArray[X]));
    }

}

function createLI(task) {
    
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa fa-remove");
    
    let anchor = document.createElement("a");
    anchor.setAttribute("class", "delete-item secondary-content")
    anchor.appendChild(deleteIcon);
 
    let li = document.createElement("li");
    li.setAttribute("class", "collection-item")
    li.textContent = task;
    li.appendChild(anchor);

    return li;
}