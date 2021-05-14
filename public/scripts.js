// this function will search the database using index.html form
async function searchDatabase(aapidatabase) {
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch('/api');
  const data = await request.json();

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

async function getData(url, postData) {
  // postData _must_ always be an object
  const request = await fetch(url, {
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
  })
  const data = await request.json();
  return data;
  }

async function addrecord() {
  console.log('window loaded');

  const form = document.querySelector("#suggestions");
  const media = document.querySelector("#media");
  const creator = document.querySelector("#creator");
  const type = document.querySelector("#type");
  const genre = document.querySelector("#genre");
  const year = document.querySelector("#year");
  const link = document.querySelector("#link");

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.info('submitted form', event.target);
    // const formdata = {}
    const post1 = await getData('/api/media', {media_title: media.value});
    // const post1 = await fetch('/api/media', {
    //   method = 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ media_title: media.value})
    // });
    const post2 = await getData('/api/creators', {creator_first_name, creator_last_name: creator.value});
    // const post2 = await fetch('/api/creators', {
    //   method = 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ creator_first_name, creator_last_name: creator.value})
    // });
    const post3 = await getData('/api/genre', {genre: genre.value});
  //   const post3 = await fetch('/api/genre', {
  //     method = 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ genre: genre.value})
  //   });
  // });

}

window.onload = addrecord;


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

  
// async function addrecord() {
//   const form = document.querySelector('#movieForm');
//   const genre = document.querySelector('#genreFormField');
//   const creator = document.querySelector('#creatorFormField');
//   const title = document.querySelector('#titleFormField');
//   form.addEventListener('submit', async (event) => {
//   const request = await getData('/api/movieRequest', {genre: genre.value, title: title.value, creator: creator.value})
//   const data = await request.json()
//   // now do something with your awaited submit data - pass this to other functions
//   })
//   }
//   window.onload = addrecord;

