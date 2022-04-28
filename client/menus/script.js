function createHTMLtable(currentArray) {
  let result = '<table border=1>';
  result += `
  <tr>
  <th>macro_id</th>
  <th>calories</th>
      <th>serving_size</th>
      <th>cholesterol</th>
      <th>sodium</th>
      <th>carbs</th>
      <th>protein</th>
      <th>meal_id</th>
      <th>fat</th>
  
  </tr>`;
  for (let i = 0; i < currentArray.length; i++) {
    result += '<tr>';
    result += `
      <td>${currentArray[i].macro_id}</td>
      <td>${currentArray[i].calories}</td>
      <td>${currentArray[i].serving_size}</td>
      <td>${currentArray[i].cholesterol}</td>
      <td>${currentArray[i].sodium}</td>
      <td>${currentArray[i].carbs}</td>
      <td>${currentArray[i].protein}</td>
      <td>${currentArray[i].meal_id}</td>
      <td>${currentArray[i].fat}</td>`;
    result += '</tr>';
  }
  result += '</table>';

  const targetList = document.querySelector('.macro_table');
  targetList.innerHTML = '';
  targetList.innerHTML += result;

}

function createHTMLtable2(currentArray) {
  let result = '<table border=1>';
  result += `
  <tr>
  <th>restriction_id</th>
  <th>restriction_type</th>
  
  </tr>`;
  for (let i = 0; i < currentArray.length; i++) {
    result += '<tr>';
    result += `
      <td>${currentArray[i].restriction_id}</td>
      <td>${currentArray[i].restriction_type}</td>`;
    result += '</tr>';
  }
  result += '</table>';

  const targetList = document.querySelector('.diet_table');
  targetList.innerHTML = '';
  targetList.innerHTML += result;
}

function dataHandler(arr) {
  return arr.slice(0, 10);
}

async function mainEvent() {
  const macroTable = document.querySelector('.macro_table');
  const results = await fetch('/api/macros');
  const macroArrayFromJson = await results.json();
  let currentArray = [];
  if (macroArrayFromJson.data.length > 0) {
    currentArray = dataHandler(macroArrayFromJson.data);
  }
  console.log(currentArray)
  createHTMLtable(currentArray);
  
  const dietTable = document.querySelector('.diet_table');
  const results2 = await fetch('/api/dietaryRestrictions');
  const dietArrayFromJson = await results2.json();
  let currentArray2 = [];
  if (dietArrayFromJson.data.length > 0) {
    currentArray2 = dataHandler(dietArrayFromJson.data);
  }

  createHTMLtable2(currentArray2);
}

document.addEventListener('DOMContentLoaded', async() => mainEvent());