const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; //toDos는 빈것으로 시작하나 중간에 거듭하여 추가해주며 새로침 되지 않게 되어있다.

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); //stringfy로 array를 만들 수 있는 형태로 정리
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //랜덤값을 통해 만들어낸 id에 따라 일치하는 값을 찾아 로컬스토리지에서도 값을 지울 수 있게 해야한다. filter는 안의 값이 True이면 남기고 False일 때 제외해서 배열을 만든다. 모든 아이템에 대해 각각 실행된다. parseInt로 숫자와 스트링을 조절
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);  
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //이렇게 랜덤 값을 id로 지정하는 이유는 지우는 아이템을 구분하기위함이다.
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //객체가 새로고침 할 때 마다 새로운 값만 들어가지 않도록 막는 역할로 이전의 값들을 저장한다. 
    parsedToDos.forEach(paintToDo)
}
