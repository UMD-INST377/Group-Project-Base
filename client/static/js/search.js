let form = document.getElementById("form");
let btn = document.getElementById("btn");
let msgContainer = document.getElementById("msg-container");
let msg = document.getElementById("msg");

const filter = (arr) => {;; }

const good = (num) => {
    msgContainer.classList.remove("hide")
    msg.innerHTML = `Looks good. Returned ${num} results!`;
    msgContainer.classList.add("success");
}
const bad = () => {
    msgContainer.classList.remove("hide")
    msg.innerHTML = `No results were found`;
    msgContainer.classList.add("failure");
}

// on document load, just load everything from db

document.addEventListener("DOMContentLoaded", async() => {
    const results = await fetch('/api/earth_info')
    const arrayFromJson = await results.json();
    console.log(arrayFromJson)

    btn.addEventListener("click", async(e) => {
        e.preventDefault();
        good(23);
        bad();
    })


})