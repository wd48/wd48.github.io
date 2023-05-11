// option 2
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

// string 반복 사용시, 대문자 변수로 저장하고 변수를 사용한다 : 변수는 JS에서 체크해준다
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 submit 할 때 하는 기본동작(=새로고침) 차단
    loginForm.classList.add(HIDDEN_CLASSNAME);  // form 다시 숨겨주기
    const username = loginInput.value;  // username 변수에 로그인 정보 담기    
    localStorage.setItem(USERNAME_KEY, username);// username 기억하기 : localStorage
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // localStorage에 값이 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    paintGreetings(savedUsername);
}