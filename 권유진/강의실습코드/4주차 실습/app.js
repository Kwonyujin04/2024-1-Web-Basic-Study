// // alert("hi");

// // const a = 5;
// // const b = 2;//const는 절대 바꾸지 않을 값이라는 것이다. 
// // let myName = "Eugine";//let은 바뀔 수 있는 값으로 바뀔때에는 let을 따로 선언하지 않아도 된다. 

// // console.log(a+b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log("hello " + myName)

// // myName = "Yujin"//값을 업데이트 하고 있다.  

// // console.log("your name is " + myName)

// /*boolean*/
// const amIFat = null;
// let something;
// console.log(amIFat, something);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
// //Get item from Array
// console.log(daysOfWeek);
// //Add one more day to the Array
// daysOfWeek.push("sund");
// console.log(daysOfWeek);

// const player = {
//     name: "Yujin",
//     points: 10,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"])

// function sayHello(nameOfPerson, age){
//     console.log("Hello, my name is " + nameOfPerson + " and I am " + age);
// }

// sayHello("Yujin", 21);

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a, b){
//     console.log(a / b);
// }

// plus(8, 60);
// divide(20, 5);

const player = {
    name: "Yujin",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName)
    }
}

console.log(player.name);
player.sayHello("nico")