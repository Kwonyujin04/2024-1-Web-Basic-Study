const button = document.querySelector("#btn");
console.log(button.classList); //btn에 적용된 클래스, 지금은 find를 지정한다. class는 공백을 기준으로 여러개 선언할 수 있어서 클래스 리스트를 사용한다. 

if(button.classList.contains("add")){
    button.classList.remove("add");
} else{
    button.classList.add("add")
}

console.log(button.classList); //"find", "add"