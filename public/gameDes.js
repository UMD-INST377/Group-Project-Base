/* eslint-disable no-shadow */
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data=await (await fetch('http://localhost:3000/api/price', {method: 'POST', mode: 'no-cors', credentials: 'same-origin'}));
  // const endpoint = 'http://localhost:3000/api/price';
  // const data = JSON.parse(JSON.stringify(request));
  console.log(data);

  function findMatches(wordToMatch, data) {
    return data.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return result.range_game_id.match(regex);
    });
    // eslint-disable-next-line no-unreachable
    suggestions.innerHTML = '';
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, data);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');
          //   const result= result.name;
          //   const zipCode = result.zip;

          return `

          <ul>
            <li><div>${result.range_game_id}</div></li>
            <div>${result.price_website}</div>
            <div>${result.listed_price}</div>
            
            
          </ul>
          <br></br>
        
            
            `;
        })
        .join('');
      suggestions.innerHTML = html;
    }
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}

window.onload = windowActions;
