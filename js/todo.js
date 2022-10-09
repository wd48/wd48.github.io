const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// ToDo 저장하기 & 불러오기 : localStorage
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// ToDO 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;    // 선택한 버튼 구분하기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


// ToDo 그리기
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    // delete function
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);   // 투두 리스트 추가
    li.appendChild(button); // 투두 리스트 옆에 삭제버튼 추가     
    toDoList.appendChild(li);

    // toDo 쓸 때마다 array에다 추가한다
}

function handleToDoSubmit(e) {
    e.preventDefault();

    const newToDo = toDoInput.value;    
    toDoInput.value = "";

    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }
    
    toDos.push(newToDoObj);    // 로컬스토리지에 저장 :: DB!
    paintToDo(newToDoObj); // text인 newToDo만 가지고있음 > object
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach : array의 각 item에 대해 function을 실행할 수 있다.
    parsedToDos.forEach(paintToDo);
}