// interval은 매번 일어나는 것
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, "0"); //padStart는 지정한 길이에 도달하지 못하면 앞에 지정한 것으로 채우는 것이다. 
    const minutes = String(date.getMinutes()).padStart(2, "0"); //padStart는 숫자를 받지 못하므로 string으로 감싼다. 
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000); //1초마다 실행된다. 이로인해 코드가 실시간을 가져오는 것처럼 보인다. 
