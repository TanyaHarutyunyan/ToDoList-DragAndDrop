import {notStartedObj, inProgressObj, alreadyDoneObj} from "./dragAndDrop.js"
export function deleteTask(){
    let deleteTasks = document.querySelectorAll(".deleteButton")
        for (let i = 0; i < deleteTasks.length; i++){
            deleteTasks[i].addEventListener("click", function(){
            if (notStartedObj[deleteTasks[i].parentNode.id] !== undefined){
                delete notStartedObj[deleteTasks[i].parentNode.id]
                localStorage.setItem("notStarted", JSON.stringify(notStartedObj))
            }else if (inProgressObj[deleteTasks[i].parentNode.id] !== undefined){
                delete inProgressObj[deleteTasks[i].parentNode.id]
                localStorage.setItem("inProgress", JSON.stringify(inProgressObj))
            }else if (alreadyDoneObj[deleteTasks[i].parentNode.id] !== undefined){
                delete alreadyDoneObj[deleteTasks[i].parentNode.id]
                localStorage.setItem("alreadyDone", JSON.stringify(alreadyDoneObj))
            }
            deleteTasks[i].parentNode.remove()
            })
        } 
    }