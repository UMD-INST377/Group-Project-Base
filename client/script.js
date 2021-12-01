const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  /* const volcanoInfo = document.querySelector('.volcanoName = arryName'); */
  const data = await fetch('/api/volcanos');

  /* const arrayName = await request.json();
  console.log(volcanoName); */

  function findMatches(wordToMatch, volcanoName) {
    return volcanoName.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(string(result.volcano_id));
      if (wordToMatch === '') {
        return null;
      }

      return String(result.volcano_id).match(regex);
    });
  }
  /* return place=result.volcano_name.match(regex); */

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, volcanoName);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray.map((result) => {
        const regex = new RegExp(event.target.value, 'gi');
        const volcanoName = place.volcano_name;
        return `
        
          <ul>
            <li>
                <p class='name'>${volcanoName}<br/>
            </li>
          </ul>
            `;
      }).join('');
      suggestions.innerHTML = html;
    }
  }

  const newData = await data.json();
  console.log(newData[0]);
  const volcanoNam = newData[0];
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}

window.onload = windowActions;