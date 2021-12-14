const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data = await fetch('/api/platforms');
  
  function findMatches(wordToMatch, gameGeneral) {
    return gameGeneral.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(String(result.platform_id));
      if (wordToMatch === '')
      {
        return null;
      }
      else {
        return String(result.platform_id).match(regex);
      }
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, gamePlatforms);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');

          return `

          <ul>
            <li class="platform-id">ID: ${result.platform_id}</li>
            <li>PC: ${result.PC}</li>
            <li>Playstation: ${result.Playstation}</li>
            <li>Xbox: ${result.Xbox}</li>
            <li>Switch: ${result.Switch}</li>
            <li>Mobile: ${result.Mobile}</li>
          </ul>
          <br>
            `;
        })
        .join('');
      suggestions.innerHTML = html;
    }
  }
  const newData = await data.json();
  console.log(newData[0]);
  const gamePlatforms = newData[0];
  console.log(gamePlatforms);
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}

window.onload = windowActions;