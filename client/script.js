
async function windowActions() {
  const endpoint = '/api/eruption_info';
  const request = await fetch(endpoint);
  const names = await request.json();
  
  const searchInput = document.querySelector('.nameSearch');
  const suggestions = document.querySelector('.suggestions');

console.log(names)
  function findMatches(wordToMatch, names) {
    return names.filter((info) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return info.volcano_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, names);
    const html = matchArray.map((info) => {
      const regex = new RegExp(event.target.value, 'gi');
      return `
      <div class='photo-grid-container'>
                <div class='photo-grid'>
                <div class="box">
                <div class="name">Name: ${info.volcano_name}</div>
                <div class="num">Eruption Number: ${info.eruption_number} </div>
                <div class="date"> Date of Eruption: ${info.year}-${info.month}-${info.day} </div>
                <div class="aoa">Eruption AOA: ${info.aoa}</div>
                <div class="vei">Eruption VEI: ${info.vei}</div>
                <div class="method">Method: ${info.method}</div>
                <div class="category">Eruption Category: ${info.category}</div>
              </div>
             </div>
            </div>
    `;
    }).join('');
    suggestions.innerHTML = html;
  }

  searchInput.addEventListener('input', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = windowActions;

function loadFile(event) {
  const image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
}
