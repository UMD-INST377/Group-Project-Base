const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function windowActions() {
  const data= await fetch('/api/sales');

  
  function findMatches(wordToMatch, gameSales) {
    return gameSales.filter((result) => {
      const regex = new RegExp(wordToMatch, 'gi');
      console.log(wordToMatch);
      console.log(String(result.sales_id));
      if (wordToMatch === '')
      {
        return null; //Ensures no search result display if input field is empty
      }
      else {
        return String(result.sales_id).match(regex); 
      }
      
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, Sales);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray
        .map((result) => {
          const regex = new RegExp(event.target.value, 'gi');

          return `

          <ul>
            <li class="game-id">ID: ${result.sales_id}</li>
            <li>Annual Sales: ${result.annual_sales}</l>
            <li>Earnings: ${result.earnings}</li>
            
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
  const gameSales = newData[0];
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
  
}

window.onload = windowActions;