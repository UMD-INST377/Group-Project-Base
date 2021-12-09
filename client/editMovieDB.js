
function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject
}
async function fetchRequest(name, id) {
  const data= formToObject(document.querySelector('#form-id'));

  const response = await fetch('/api/film', {
    method: data.answer,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: name,
      id: id
    },
    body: JSON.stringify(data),
  });
  console.log(data); 
} 
  

const button = document.querySelector('#submit-button');
button.onclick = fetchRequest;
  // const response = request.json();
  // console.log(response);
// }
// async function getMovies() {
//   const request = await fetch('/api/film');
//   const json = await request.json();
//   console.log(json);

// }
// function displayMatches(event) {
//   //const matchArray = fetchRequest(event.target.value, arrayName);
//   const html = formToObject.map((place) => {
//     //const regex = new RegExp(event.target.value, 'gi');
//     const movieName = place.name;
//     const movieScore = place.score; 
//     const movieRating = place.rating;
//     const movieYear = place.year;
//     return `
//   <li class = "card has-background-primary-light">
//     <div class = "card-content"> 
//     <div class = "content">
//       ${movieName}, ${movieScore}, ${movieRating}, ${movieYear}
//       </div>
//   </div>
//   </li>
//   <br/>
//   `;
//   }).join('');
//   formToObject.innerHTML = html;
// }
// const button = document.querySelector('#submit-button');
// // displayMatches(getMovies());
// button.onclick = fetchRequest;