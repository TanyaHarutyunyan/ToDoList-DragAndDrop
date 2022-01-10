export let notStartedObj = {}
export let inProgressObj = {}
export let alreadyDoneObj = {}
let draggableToDo = null
class DragAndDrop {
    constructor(){}
    dragStart(){
        draggableToDo = this
        setTimeout(()=>{
            this.style.display = "none"
        })
        if (inProgressObj[this.id] !== undefined){
            delete inProgressObj[this.id]
            localStorage.setItem("inProgress", JSON.stringify(inProgressObj))
        }else if (alreadyDoneObj[this.id] !== undefined){
            delete alreadyDoneObj[this.id]
            localStorage.setItem("alreadyDone", JSON.stringify(alreadyDoneObj))
        }else if (notStartedObj[this.id] !== undefined){
            delete notStartedObj[this.id]
            localStorage.setItem("notStarted", JSON.stringify(notStartedObj))
        }
    }
    dragEnd(){
        draggableToDo = null
        setTimeout(()=>{
            this.style.display = "block"
        })
    }
    dragEnter(){
        this.style.border = "2px double #ccc"
    }

     dragLeave(){
        this.style.border = "none"
    }

    dragOver(e){
        e.preventDefault()
    }

    dragDrop(){
        this.appendChild(draggableToDo)
        if (this.id === "inProgressDiv"){
            inProgressObj[draggableToDo.id] = draggableToDo.id
            localStorage.setItem("inProgress", JSON.stringify(inProgressObj))
        }else if (this.id === "alreadyDoneDiv"){
            alreadyDoneObj[draggableToDo.id] = draggableToDo.id
            localStorage.setItem("alreadyDone", JSON.stringify(alreadyDoneObj))
        }else if (this.id === "notStartedDiv"){
            notStartedObj[draggableToDo.id] = draggableToDo.id
            localStorage.setItem("notStarted", JSON.stringify(notStartedObj))
        }
    }
}
let dragAndDrop = new DragAndDrop()

export function dragStartEnd (){
    let allNewTasks = document.querySelectorAll(".addedTask")
        allNewTasks.forEach((val)=>{ 
            val.addEventListener("dragstart", dragAndDrop.dragStart)
            val.addEventListener("dragend", dragAndDrop.dragEnd)
        })
    }

export function dragOtherFuncs(){
    let allColumns = document.querySelectorAll(".column")
        allColumns.forEach((val)=>{
            val.addEventListener("dragenter", dragAndDrop.dragEnter)
            val.addEventListener("dragleave", dragAndDrop.dragLeave)
            val.addEventListener("dragover", dragAndDrop.dragOver)
            val.addEventListener("drop", dragAndDrop.dragDrop)
            })
        }