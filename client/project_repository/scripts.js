// test
async function windowActions() {

  const endpoint = '/api/listofRestaurants';
  const categories = [];


  const request = await fetch(endpoint);
  const json = await request.json();
  // categories.push(...json);
  function findMatches(wordToMatch, categories) {
    return categories.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.Name.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, json);
    const html = matchArray.map((place) => {
      const regex = new RegExp(event.target.value, 'gi');
      return `
                  <li>
                      <span class = "Name">${place.Name}</span>
                      <br>
                      <span class = "Inspection_results">${place.Inspection_results}</span>
                      <br>  
                  </li> 
                  `;
    }).join('');
    console.log(matchArray);

    suggestions.innerHTML = html;
  }

  const inputSearch = document.querySelector('#input');
  const suggestions = document.querySelector('#suggestions');

  inputSearch.addEventListener('change', displayMatches);
  inputSearch.addEventListener('keyup', displayMatches);
}

/* const zipJson = await request.json();
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  // fetch(endpoint)
  //   .then((blob) => blob.json())
  //   .then((data) => zip.push(...data));

  function findMatches(wordToMatch, zip) {
    return zip.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.zip.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, zipJson);
    const html = matchArray.map((place) => {
      const regex = new RegExp(event.target.value, 'gi');
      const zipName = place.zip.replace(regex, `<span class = "h1">${this.value}</span>`);
      return `
                  <li>
                      <span class = "name">${place.name}</span>
                      <br>
                      <span class = "name">${place.type}</span>
                      <br>
                      <span class = "name">${place.address_line_1}</span>
                      <br>
                      <span class = "name">${place.city}</span>
                      <br>
                      <span class = "name">${place.zip}</span>
                  </li>
                  `;
    }).join('');
    console.log(matchArray);

    suggestions.innerHTML = html;
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

*/

window.onload = windowActions;