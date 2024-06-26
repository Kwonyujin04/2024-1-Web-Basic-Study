// html에 img를 추가하기 위해 랜덤 텍스트를 생성하고 createElement로 html으로 추가한다.
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img라는 것 html에 생성한다. 

bgImage.src = `img/${choosenImage}`; //내가 지정한 이름 형식에 맞춰서 생성한다. 

document.body.appendChild(bgImage);
