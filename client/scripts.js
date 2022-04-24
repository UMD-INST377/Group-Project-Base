// Main function
async function mainEvent() { // the async keyword means we can make API requests
  console.log('script loaded');
  const targetList = document.querySelector('.monday');

  const results = await fetch('chandra/meals');
  const breakfastItems = await results.json();
  console.log(breakfastItems);

  // format data to look nicer on homepage
  const dataJson = JSON.stringify(breakfastItems.data);
  targetList.innerHTML = dataJson;
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());