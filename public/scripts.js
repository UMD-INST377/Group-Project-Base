// const { Sequelize } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize(
//   'AAPI_Art_Corner_377',
//   'student',
//   'INST377@UMD',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   }
// );

// // this function will connect to the database
// async function databaseConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// this function will search the database using index.html form
async function searchDatabase(aapidatabase) {
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch('/api');
  const data = await request.json();

  // const title = document.querySelector('#title');
  // const creator = document.querySelector('#creator');
  // const type = document.querySelector('#type');
  // const year = document.querySelector('#year');
  // const link = document.querySelector('#link');

  // from lab 5, after submit fires
  form.addEventListener('submit', async (event) => {
    targetList.innerText = ''; /* ? */

    event.preventDefault();
    console.log('submit fired', search.value);

    // search results, if any
    if (data < 1) {
      replyMessage.classList.add('box'); /* ? */
      replyMessage.innerText = 'No matches found';
    } else {
      console.table(data);
    }
  });
}

// await functions when the window loads
async function windowActions() {
  console.log('window loaded');
  await databaseConnection();
  await searchDatabase(database);
}

window.onload = windowActions;

// POST
// async function windowActions() {
//   console.log('window loaded');
//   const form = document.querySelector('#recordSubmit');
//   const title = document.querySelector('#title');
//   const creator = document.querySelector('#creator');
//   const type = document.querySelector('#type');
//   const year = document.querySelector('#year');
//   const link = document.querySelector('#link');
// }

// LECTURE
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   console.info('submitted form', event.target);

//   const post = await fetch('/api/dining', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     // converts a JavaScript object or value to a JSON string
//     body: JSON.stringify({ hall_name: name.value})
//     });
//   });
// }

// SAM'S TOGGLE BUTTON
// var toggle = document.querySelector(".toggle");
// var menu = document.querySelector(".menu");

// toggle.addEventListener("click", function (){
//     menu.classList.toggle("active");
// })