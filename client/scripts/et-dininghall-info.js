// Script by Elaine Tse

const diningResult = document.querySelector('#dining-results');

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
  searchResults.map((elm, i) => {
    const newResult = document.createElement('div');
    newResult.textContent = elm;
    newResult.classList.add('result');
    diningResult.appendChild(newResult);
  });
}

displayResults();