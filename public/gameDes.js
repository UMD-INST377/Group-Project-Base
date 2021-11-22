/* eslint-disable no-shadow */
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data= await fetch('http://localhost:3000/api/price');
  /*.then(function(response) {
    return response.json();
  })*/;

  //await (await fetch('http://localhost:3000/api/price', {method: 'POST', mode: 'no-cors', credentials: 'same-origin'}));
  // const endpoint = 'http://localhost:3000/api/price';
  // const data = JSON.parse(JSON.stringify(request));
   //console.log(data);
   //newData = data[0]
  
  function findMatches(wordToMatch, gamePrice) {
    return gamePrice.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(String(result.range_game_id))
      return String(result.range_game_id).match(regex);
    });
    // eslint-disable-next-line no-unreachable
    //suggestions.innerHTML = '';
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, gamePrice);
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
  const newData = await data.json();
  console.log(newData[0])
  const gamePrice = newData[0];
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
  
}

window.onload = windowActions;
