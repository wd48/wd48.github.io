const images = [
    "001.jpg","002.jpg","003.jpg","004.jpg","005.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지 실제로 html에 추가시키기 : createElement
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);