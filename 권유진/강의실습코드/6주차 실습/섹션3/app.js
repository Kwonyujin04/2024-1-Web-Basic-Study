const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // const clickedClass = "clicked"; //css에 존재하는 이름을 새로 선언하므로써 오류 가능성 축소
    // if (h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked"); //toggle은 위의 역할을 한번에 실행할 수 있는 것이다. 
}


h1.addEventListener("click", handleTitleClick);