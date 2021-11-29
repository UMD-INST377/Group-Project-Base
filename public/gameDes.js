const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data= await fetch('/api/price');

  
  function findMatches(wordToMatch, gamePrice) {
    return gamePrice.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(String(result.range_game_id));
      if (wordToMatch === '')
      {
        return null; //Ensures no search result display if input field is empty
      }
      else {
        return String(result.range_game_id).match(regex); 
      }
      
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, gamePrice);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');

          return `

          <ul>
            <li><div><strong>ID: ${result.range_game_id}</strong></div></li>
            <div>Listed Price: ${result.listed_price}</div>
            <div>${result.price_website}</div>
            
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
