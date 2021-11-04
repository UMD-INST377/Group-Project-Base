async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const zip = [];

  const request = await fetch(endpoint);
  const zipJson = await request.json();
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
window.onload = windowActions;
