const API_KEY = "a96ed985f925897e5819309ef65e3222";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherBody = document.querySelector("#weather");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        // weather img icon
        const img = document.createElement("img");
        const icon = data.weather[0].icon;

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;        
        img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherBody.appendChild(img);
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);