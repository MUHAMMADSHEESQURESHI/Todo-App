let inputEl = document.getElementById("input")
let divEl = document.getElementById("div")
let inputBtn = document.getElementById("inputBtn")
let allTodo = []
let indexNum ;
function addTodo() {
  if(inputBtn.innerText === "Update Todo" ){

    updateTodo()
  }
  
  
  
    else{
    let val = inputEl.value
    allTodo.push(val)
    printTodo()
    inputEl.value = ""
   }
}

function printTodo() {
    divEl.innerHTML = ""

    for (let i = 0; i < allTodo.length; i++) {
        divEl.innerHTML += `<div class = "task">
        <p id ="todo-${i}">${allTodo[i]}</p>
        <span>
        <button id= "btn-${i}" onClick = "editTodo(${i})" class = "edit">
        <i class="fa-solid fa-pen"></i>
        </button>
        <button onClick = "deleteTodo (${i})" class = "delete">
        <i class="fa-solid fa-trash"></i>
        </button>
        <span>
        </div>
        `
    }
}

function deleteTodo(index) {
    allTodo.splice(index, 1)
    printTodo()
}

function editTodo(index) {

    let todo = document.getElementById("todo-" + index)
   
        inputEl.value = todo.innerText
        inputBtn.innerText = "Update Todo"
       indexNum = index
    

    }
    function updateTodo (){
        let todo = document.getElementById("todo-" + indexNum)
        todo.innerText = inputEl.value
        inputEl.value = ""
        inputBtn.innerText = "Add Todo"
    
    }



  


























