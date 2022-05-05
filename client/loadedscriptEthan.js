/* eslint-disable quotes */
/* eslint-disable camelcase */
// ethan ic3
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + min);
}
function restoArrayMake(dataArray) {
  // console.log('fired dataHandler');
  // console.table(dataArray); // this is called "dot notation"
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });

  // console.log(listItems);
  return listItems;
}
function createHtmlList(collection) {
  // console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector(".resto-list");
  targetList.innerHTML = "";
  collection.forEach((item) => {
    const { restaurant_name } = item;
    const displayName = restaurant_name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  console.log(document.querySelector(".mainform"));
  const form = document.querySelector(".mainform");
  const submit = document.querySelector(".button");
  const street_address = document.querySelector("#Street_Address");
  // const zipcode = document.querySelector('#zipcode');
  submit.style.display = "none";

  const results = await fetch("/ethan/location"); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.log(arrayFromJson);
  if (arrayFromJson.length > 0) {
    submit.style.display = "block";
    // let currentArray = [];
    let currentArray = arrayFromJson;
    console.log(currentArray.length);
    street_address.addEventListener("input", async (event) => {
      console.log(currentArray.length);
      if (currentArray.length === 0) {
        return;
      }
      console.log(event.target.value.toLowerCase());
      const selectResto = currentArray.filter((item) => {
        console.log(item.street_address);
        const lowerName = item.street_address.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      console.log(selectResto);
      createHtmlList(selectResto);
    });
    form.addEventListener("submit", async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      currentArray = restoArrayMake(arrayFromJson.data);
      console.log(currentArray);
      createHtmlList(currentArray);
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener("DOMContentLoaded", async () => mainEvent());
