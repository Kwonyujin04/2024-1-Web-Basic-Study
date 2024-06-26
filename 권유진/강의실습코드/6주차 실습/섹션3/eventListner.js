// // const title = document.getElementById("myText"); //id로 html객체를 가져올 수 있다. 
// const myText = document.querySelector("#myText"); //myText이라는 id안의 form태그를 선택한 것이다. 
// console.log(myText);
// console.dir(myText);

// function handleTitleClick(){
//     console.log("Title was clicked!");
//     myText.style.color = "blue";
// }

// function handleMouseClick(){
//     myText.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     myText.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato"; //HTML에 있는 bosy에 직접 접근할 수 있다. 
// }

// function handleWindowCopy(){
//     alert("copier!")
// }

// // myText.addEventListener("click", handleTitleClick);
// myText.onclick = handleTitleClick; //.removeEventListner를 사용할 수 없다. 
// myText.addEventListener("mouseenter", handleMouseClick);
// myText.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize); //window의 사이즈변경을 읽어들일 수 있다. 
// window.addEventListener("copy", handleWindowCopy);

const myText = document.querySelector("#myText");

function handleTitleClick(){
    const currentColor = myText.style.color; //변화할 수 없는 값
    let newColor; //변화할 수 있는 값
    if(currentColor === "blue"){
        newColor = "tomato";
    } else{
        newColor = "blue";
    }
    myText.style.color = newColor; //이를 통해 newColor와 myText의 색값을 연결한다. 
}

// console.log(myText.style.color); //myText의 color를 get할 수 있는 getter
myText.addEventListener("click", handleTitleClick);