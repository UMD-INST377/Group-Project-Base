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
                      <span class = "Name">${place.City}</span>
                      <br>
                      <span class = "Name">${place.Zip}</span>
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

window.onload = windowActions;