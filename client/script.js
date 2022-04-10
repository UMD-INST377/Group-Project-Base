/* eslint-disable no-console */
const targetList = document.querySelector('tbody');
const targetBox = document.querySelector('.tile');

async function populateMacros() {
  const customRequest = await fetch('/api/table/data');
  const macrosData = await customRequest.json();

  macrosData.forEach((meal) => {
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
    <th>${meal.meal_id}</th>
    <td>${meal.meal_name}</td>
    <td>${meal.calories}</td>
    <td>${meal.carbs}g</td>
    <td>${meal.sodium}mg</td>
    <td>${meal.protein}g</td>
    <td>${meal.fat}g</td>
    <td>${meal.cholesterol}mg</td>`;
    targetList.append(appendItem);
  });
}

async function windowActions() {
  populateMacros();
}

window.onload = windowActions;