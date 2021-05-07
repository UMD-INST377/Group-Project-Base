const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginbutton");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        location.href = "admin_inner.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})