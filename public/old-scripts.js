// this function will search the database using index.html form
async function searchDatabase(aapidatabase) {
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch(aapidatabase);
  const data = await request.json();

  // from lab 5, after submit fires
  form.addEventListener('submit', async (event) => {
    targetList.innerText = ''; /* ? */

    event.preventDefault();
    console.log('submit fired', search.value);
  });
}

// await functions when the window loads
async function windowActions() {
  console.log('window loaded');
  await searchDatabase('/api/media');
}

window.onload = windowActions;

    // search results, if any
    // if (data < 1) {
    //   replyMessage.classList.add('box'); /* ? */
    //   replyMessage.innerText = 'No matches found';
    // } else {
    //   console.table(data);
    // }

    

// const title = document.querySelector('#title');
// const creator = document.querySelector('#creator');
// const type = document.querySelector('#type');
// const year = document.querySelector('#year');
// const link = document.querySelector('#link');

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