const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const hidden_class = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(hidden_class);
    const username = loginInput.value;
    greeting.innerText = "hello " + username;
    greeting.classList.remove(hidden_class);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);