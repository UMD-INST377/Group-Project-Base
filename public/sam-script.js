// this function will search the database using input form
async function searchDatabase(aapiendpdatabase) {
  const search = document.querySelector('#search');
  //   const targetList = document.querySelector('.target-list'); //targetList displays results
 
  // this function will pull creator data from the creators api
  function getCreators(endpoint) {
    console.log('creators data requested');
    const request = fetch(`http://floating-waters-77392.herokuapp.com${endpoint}`);
    const results = request.json(); // creators is request formatted to json; empty array
    console.log(results);
    const creatorData = results.data; // save all creators results in creatorData on page load
  }

  // this function will find matches from user search input in the creators api
  function findMatches(wordMatch, results) {
    return results.filter((person) => {
      const regex = new RegExp(wordMatch, 'gi'); // gi means all regular expression matches
      return person.creator_first_name.match(regex) || person.creator_last_name.match(regex) || person.creator_country.match(regex);
    });
  }
}

// this function will display all matches between user search input and 
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

async function windowActions() {
  console.log('window loaded');
  document.querySelector('#search').addEventListener('keyup', (event) => {
    event.preventDefault();
    searchDatabase(document.querySelector('#search').value);
  });
  const form = document.querySelector('#search-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // hitting submit will prevent default going to another website
  });
}
window.onload = windowActions;

// windowActions(findMatches, displayMatches);

// CODE FOR FINDING GENRES MATCHES

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