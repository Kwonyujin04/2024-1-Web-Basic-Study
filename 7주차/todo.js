const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", )
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault(); //값을 저장하기 위해 초기화를 막는다.
    const newTodo = toDoInput.value; //입력받은 것을 newtodo에 저장한다. 
    toDoInput = ""; //화면에 표시되는 todoinput을 클리어한다. 입력된 것은 저장되어 있으므로 지워져도 상관 없음
}

toDoForm.addEventListener("submit", handleToDoSubmit);