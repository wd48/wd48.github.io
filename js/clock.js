const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hrs = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hrs}:${minutes}:${seconds}`;
}

// interval : 매번 일어나야 하는 일 (함수, 시간)
// getClock 즉시 부르기
getClock();
setInterval(getClock, 1000);

// timeout : 설정한 시간이 지난 뒤에 실행된다 (1번)
