function restArrayMake(dataArray) {
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });
  return listItems;
}

function createHtmlList(collection) {
  const targetList = document.querySelector('.restList');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const displayName = name.toLowerCase();
    const injectThis = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThis;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('#results');
  const submitButton = document.querySelector('#submit_button');
  const searchbar = document.querySelector('#searchbar');
  const retrevialVar = 'restaurants';

  refreshList(refresh, retrevialVar);

  if (localStorage.getItem(retrevialVar) === undefined) {
    const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    localStorage.setItem(retrevialVar, JSON.stringify(arrayFromJson.data));
  }
  const storedData = localStorage.getItem(retrevialVar);
  const storedDataArray = JSON.parse(storedData);
  if (storedDataArray.length > 0) {
    submitButton.style.display = 'block';
    console.log('start');

    let currentArray = [];
    searchbar.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (event.length < 1) {
        console.log('caught');
        return;
      }

      const selectRest = storedDataArray.filter((item) => {
        const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      console.log(selectRest);
      createHtmlList(selectRest);
      addMapMarker(map, selectRest);
    });

    city.addEventListener('input', async (event) => {
      console.log(event.target.value);
      const cityRest = storedDataArray.filter((item) => {
        const lowerName = item.city.toLowerCase();
        const lowerCity = event.target.value.toLowerCase();
        return lowerName.includes(lowerCity);
      });
      console.log(cityRest);
      createHtmlList(cityRest);
      addMapMarker(map, cityRest);
    });
    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a 'breakpoint'
      currentArray = restArrayMake(storedDataArray);
      createHtmlList(currentArray);
      addMapMarker(map, currentArray);
    });
  }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests