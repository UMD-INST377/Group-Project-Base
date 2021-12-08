
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

  const request = await fetch('/api/film', {
    method: data.answer,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  console.log(data);
  const response = request.json();
  console.log(response);
}
const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');


async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  const request = await fetch(endpoint);
  const arrayName = await request.json();
  
  function findMatches(wordToMatch, arrayName) {
    return arrayName.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.name.match(regex);
    });
  }
  
//   // function numberWithCommas(x) {
//   //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   // }
  
//   function displayMatches(event) {
//     const matchArray = findMatches(event.target.value, arrayName);
//     const html = matchArray.map((place) => {
//       const regex = new RegExp(event.target.value, 'gi');
//       const cityName = place.city;
//       const restaurantName = place.name; 
//       return `
//     <li class = "card has-background-primary-light">
//       <div class = "card-content"> 
//       <div class = "content">
//         ${restaurantName}, ${cityName}
//         </div>
//     </div>
//     </li>
//     <br/>
//     `;
//     }).join(''); // turns ot from array with multiple items to one big string
//     if (event.target.value) {
//       suggestions.innerHTML = html;
//     } else {
//       suggestions.innerHTML = '';
//     }
//   }

//   searchInput.addEventListener('change', displayMatches);
//   searchInput.addEventListener('keyup', (evt) => { displayMatches(evt) });
// }
// window.onload = windowActions;
// const button = document.querySelector('#submit-button');
// button.onclick = fetchRequest;