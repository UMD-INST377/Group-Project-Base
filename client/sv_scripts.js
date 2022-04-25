function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  // The maximum is inclusive and the minimum is inclusive
}

function restoArrayMake(dataArray) {
  // console.log('fired datahandler');
  // console.table(dataArray); // this is called "dot notation"
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });
  return listItems;
}

function createHtmlList(collection) {
  // console.log('fired HTML creator');
  // console.table(collection);
  const targetList = document.querySelector('#resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() { // the async keyword means we can make API requests
  console.log('script loaded');
  const form = document.querySelector('.food-form');
  const submit = document.querySelector('#search_button');
  const resto = document.querySelector('#cuisine');
  const zipcode = document.querySelector('#zipcode');
  const retVar = 'restaurants'; // from lab 8
  submit.style.display = 'none';

/// start of lab 8 section (modified lab 7 code)
  if (!localStorage.getItem(retVar)) {
    const results = await fetch('/api/restaurants'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    console.log(arrayFromJson);
    localStorage.setItem(retVar, JSON.stringify(arrayFromJson.data));
  }

  const storedDataString = localStorage.getItem(retVar);
  const storedDataArray = JSON.parse(storedDataString);
  console.log(storedDataArray);
  if (storedDataArray.length > 0) {
    submit.style.display = 'block';

    // allows us to change the var to anything, but pre-sets as array
    let currentArray = [];
    resto.addEventListener('input', async (event) => {
      console.log(event.target.value);

      if (currentArray.length < 1) {
        return;
      }

      const selectResto = currentArray.filter((item) => {
        const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      console.log(selectResto);
      createHtmlList(selectResto);
    });

    // TODO: filter for zipcode
    zipcode.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (currentArray.length < 1) {
        return;
      }

      const selectZip = currentArray.filter((item) => 
        // const item.name.includes(event.target.value);
        item.zip.includes(event.target.value)
      );
      console.log(selectZip);
      createHtmlList(selectZip);
    });

    submit.addEventListener('click', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('submitted');
      // console.log('form submission'); // this is substituting for a "breakpoint"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      currentArray = restoArrayMake(storedDataArray);
      createHtmlList(currentArray);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests