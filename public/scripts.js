const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize(
  "AAPI_Art_Corner_377",
  "student",
  "INST377@UMD",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// POST
async function windowActions() {
  console.log('window loaded');
  const form = document.querySelector('#recordSubmit');
  const title = document.querySelector('#title');
  const creator = document.querySelector('#creator');
  const type = document.querySelector('#type');
  const year = document.querySelector('#year');
  const link = document.querySelector('#link');


//LECTURE
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.info('submitted form', event.target);

    const post = await fetch('/api/dining', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hall_name: name.value}) // converts a JavaScript object or value to a JSON string
    });
  });
}





// toggle button
// var toggle = document.querySelector(".toggle");
// var menu = document.querySelector(".menu");

// toggle.addEventListener("click", function (){
//     menu.classList.toggle("active");
// })