// Script by Elaine Tse

const diningResult = document.querySelector('#dining-list');

let searchResults = [];
// get dining hall results from user request

async function getHalls() {
  try {
    console.log('Function Called');
    const request = await fetch('/api/dining/');
    const formattedRequest = await request.json();
    searchResults = formattedRequest;
  } catch (err) {
    console.log(err);
  }
}

function displayResults() {
  searchResults.map((dininghall => {
    const newResult = document.createElement('div');
    newResult.textContent = `${[dininghall.hall_name]}`
    newResult.classList.add('dining-list');
    diningResult.appendChild(newResult);
  });
}

displayResults();
getMenu().then(() => displayResults());