/*
Regular Functions
*/

// Returns a random int within the parameter range
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

// Takes the spending data and turns it into a usable array
function processSpending(list) {
  const range = [...Array(50).keys()]; // Creates an array of 15 elements
  const newArray = range.map(() => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

/*
Asycronous Functions
*/

// Function to get the json data from the API
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json';
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

// Main function
async function mainEvent() {
  const spendingData = await getData(); // waits for the data to be gathered
  let currentList = [];
  currentList = processSpending(spendingData);
  console.log(currentList);
}

// Runs mainEvent when HTML is loaded
document.addEventListener('DOMContentLoaded', async () => mainEvent());