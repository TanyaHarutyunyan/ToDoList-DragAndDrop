import {dragStartEnd, dragOtherFuncs} from "./dragAndDrop.js"
import {deleteTask} from './deleteTask.js'
import {notStartedObj} from "./dragAndDrop.js"

window.onload = function(){
    const clearAll = document.getElementById("clearAll")
    const inputTask = document.getElementById("taskInput")
    const tasksNotStarted = document.getElementById("notStarted") 
    const tasksInProgress = document.getElementById("inProgress") 
    const tasksAlreadyDone = document.getElementById("alreadyDone") 
    let newInputTask;

    clearAll.addEventListener("click", function(){
        localStorage.clear()
    })

    let getNotStarted = JSON.parse(localStorage.getItem("notStarted"))
    for (let el in getNotStarted){
        tasksNotStarted.innerHTML += `<div class="addedTask" id="${getNotStarted[el]}" draggable="true">
            <span class="newTask"> ${getNotStarted[el]}</span>
            <button class="deleteButton"><i class="fas fa-minus-circle"></i></button>
            </div>`
    }
    let getInProgress = JSON.parse(localStorage.getItem("inProgress"))
    for (let el in getInProgress){
        tasksInProgress.innerHTML += `<div class="addedTask" id="${getInProgress[el]}" draggable="true">
            <span class="newTask"> ${getInProgress[el]}</span>
            <button class="deleteButton"><i class="fas fa-minus-circle"></i></button>
            </div>`
    }
    let getAlreadyDone = JSON.parse(localStorage.getItem("alreadyDone"))
    for (let el in getAlreadyDone){
        tasksAlreadyDone.innerHTML += `<div class="addedTask" id="${getAlreadyDone[el]}" draggable="true">
            <span class="newTask"> ${getAlreadyDone[el]}</span>
            <button class="deleteButton"><i class="fas fa-minus-circle"></i></button>
            </div>`
    }

    const addButton = document.getElementById("addInput")
    addButton.addEventListener("click", function(){
        if (inputTask.value === ""){
            alert("Please, enter a task!")
        }else {
            newInputTask = inputTask.value
            let task = `<div class="addedTask" id="${newInputTask}" draggable="true">
            <span class="newTask"> ${newInputTask}</span>
            <button class="deleteButton"><i class="fas fa-minus-circle"></i></button>
            </div>`
            tasksNotStarted.innerHTML += task
            inputTask.value = ""
            notStartedObj[newInputTask] = newInputTask
            localStorage.setItem("notStarted", JSON.stringify(notStartedObj))
        }
        deleteTask()
        dragStartEnd()
        dragOtherFuncs()
        })
          
}



 












































































































































































































