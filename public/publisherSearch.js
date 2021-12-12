const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data= await fetch('/api/publisher');
  
  function findMatches(wordToMatch, gamePublisher) {
    return gamePublisher.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(String(result.range_game_id));
      if (wordToMatch === '')
      {
        return null; //Ensures no search result display if input field is empty
      }
      else {
        return String(result.publisher_game_id).match(regex); 
      }
      
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, gamePublisher);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');

          return `

          <ul>
            <li class="publisher-id">ID: ${result.publisher_game_id}</li>
            <li>Publisher Name: ${result.publisher_name}</li>
            
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
  const gamePublisher = newData[0];
  console.log(gamePublisher);
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
  
}

window.onload = windowActions;
