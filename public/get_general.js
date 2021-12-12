const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data= await fetch('/api/general');
  
  function findMatches(wordToMatch, gameGeneral) {
    return gameGeneral.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(String(result.range_game_id));
      if (wordToMatch === '')
      {
        return null; //Ensures no search result display if input field is empty
      }
      else {
        return String(result.game_id).match(regex); 
      }
      
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, gameGeneral);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');

          return `

          <ul>
            <li class="game-id">ID: ${result.game_id}</li>
            <li>Game Name: ${result.game_name}</li>
            <li>Free to Play: ${result.free_to_play}</li>
            <li>Player Population: ${result.player_population}</li>
            
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
  const gameGeneral = newData[0];
  console.log(gameGeneral);
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
  
}

window.onload = windowActions;