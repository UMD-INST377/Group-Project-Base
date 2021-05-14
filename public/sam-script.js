// need clicking enter to search

// this function will search the database using input form
async function searchDatabase(aapidatabase) {
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  // from lab 5, after submit fires
  form.addEventListener('submit', async (event) => {
    targetList.innerText = ''; /* ? */

    event.preventDefault();
    console.log('submit fired', search.value);

    // error message if there are no matches
    if (data < 1) {
      replyMessage.classList.add('box'); /* ? */
      replyMessage.innerText = 'No matches found';
    } else {
      console.table(data);
    }
  });
}

// done
async function getCreators(endpoint) {
  console.log('data requested');
  const request = await fetch(endpoint);
  const results = await request.json(); // creators is request formatted to json; empty array
  console.log(results);
  return results.data;
}

// done
async function findMatches(WordToMatch, results) {
  return results.filter((person) => {
    const regex = new RegExp(WordToMatch, 'gi'); // gi means all regular expression matches
    return person.creator_first_name.match(regex) || person.creator_last_name.match(regex) || person.creator_country.match(regex);
  });
}

async function displayMatches(event) {
  const matchArray = findMatches(event.target.value, creator);
  const html = matchArray.map((person) => { // creating a box. inside box, set each item
    console.log(person);
    return `
                <li> 
                    <div class="labels">
                        <span class="first name">${person.creator_first_name}</span> 
                        <br>
                        <span class="last name">${person.creator_last_name}</span>
                        <br>
                        <span class="current state">${person.creator_current_state}</span>
                        <br>
                        <span class="home state">${person.creator_home_state}</span>
                        <br>
                        <span class="country">${person.creator_country}</span>
                    </div>
                </li> 
            `; // span is an inline container
  }).join('');
  suggestions.innerHTML = html; // returns inner HTML text content
}

function search() {
  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    displayMatches();
  });
}

async function windowActions() {
  console.log('window loaded');
  await searchDatabase(database);
  await getCreators('/api/creators');
  await findMatches;
  await displayMatches;
}
window.onload = windowActions;




// windowActions(findMatches, displayMatches);

//   async function genredisplay() { // asynchronous function; async gives access to await keyword
//     console.log('window loaded');
//     const endpoint = '/api/genre';
//     const request = await fetch(endpoint);
//     const genre = await request.json(); // genre is request formatted to json; empty array
//     const search = document.querySelector('#search');
//     const suggestions = document.querySelector('.suggestions');

//     function findMatches(WordToMatch, genre) {
//       return genre.filter((type) => {
//         const regex = new RegExp(WordToMatch, 'gi');
//         return type.genre.match(regex);
//       });
//     }

// function displayMatches(event) {
//   const matchArray = findMatches(event.target.value, genre);
//   const html = matchArray.map((type) => {
//     console.log(type);
//     return `
//               <li>
//                   <div class="labels">
//                       <span class="genre">${type.genre}</span>
//                   </div>
//               </li>
//           `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// search.addEventListener('keyup', async (event) => {
// });

// search.addEventListener('change', displayMatches);
// }

//   async function getData(url, postData) {
//     // postData _must_ always be an object
//     const request = await fetch(url, {
//     headers: {
//     'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//     })
//     const data = await request.json();
//     return data;
//     }

//   async function addrecord() {
//     console.log('window loaded');

//     const form = document.querySelector("#suggestions");
//     const media = document.querySelector("#media");
//     const creator = document.querySelector("#creator");
//     const type = document.querySelector("#type");
//     const genre = document.querySelector("#genre");
//     const year = document.querySelector("#year");
//     const link = document.querySelector("#link");

//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();
//       console.info('submitted form', event.target);
//       // const formdata = {}
//       const post1 = await getData('/api/media', {media_title: media.value});
//       const post2 = await getData('/api/creators', {creator_first_name, creator_last_name: creator.value});
//       const post3 = await getData('/api/genre', {genre: genre.value});
//   }
//   window.onload = addrecord;
//   }
//   window.onload = genredisplay;