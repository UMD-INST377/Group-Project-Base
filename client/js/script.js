function MealList(collection) {
  console.log(collection, 'Collection');
  const target = document.querySelector('.meals');
  Object.values(collection);
  Object.entries(collection);
  collection.data.forEach((item) => {
    const inject = `<li>${item.meal_name}</li>`;
    console.log(item.meal_name);
    target.innerHTML += inject;
  });
  console.log(Object.values(collection));
}

async function mainChart() {
  const mealData = await fetch('api/meals');
  const mealArray = await mealData.json();
  console.log('Meals fetch');
  console.log(mealArray);
  MealList(mealArray);
}

mainChart();
document.addEventListener('DOMContentLoaded', async() => mainChart());