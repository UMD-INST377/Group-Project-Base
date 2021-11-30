const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


async function getVolcano() {
  const volcanoInfo = document.querySelector('.volcanoName');

  const request = await fetch('/api/volcanos'); 
}

function findMatches(wordToMatch, arrayName) {
    if (wordToMatch.length != 0) {
      return arrayName.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.volcano_name.match(regex);
      });
    }
    suggestions.innerHTML = '';
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, arrayName);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray.map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        const volcanoName = place.volcano_name;
        return `
        
            <li>
                <p class='name'>${volcanoName}<br/>
            </li>
            `;
      }).join('');
      suggestions.innerHTML = html;
    }
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

window.onload = windowActions;