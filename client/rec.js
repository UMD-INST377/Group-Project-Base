function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

function restoArrayMake(dataArray) {
  console.log("fired dataHandler");
  console.table(dataArray);
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });
  console.log(listItems);
  return listItems;
}

function createHtmlList(collection) {
  const targetList = document.querySelector("artist_list");
  targetList.innerHTML = "";
  collection.forEach((item) => {
    const { name } = item;
    const nameDisplay = name.toLowerCase();
    const injectThisItem = `<li>${nameDisplay}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() {
  console.log("script loaded");
  const form = document.querySelector("#record_form");
  const but = document.querySelector("#button");
  const stagename = document.querySelector("#stage_name");
  const gender = document.querySelector("#gender");
  but.style.display = "none";

  const results = await fetch('/artist');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);

  if (arrayFromJson.length > 0) {
    // prevents race condition
    but.style.display = "block";

    let currentArray = [];
    stagename.addEventListener("input", async (event) => {
      // for stage name
      console.log(event.target.value);
      const selectResto = arrayFromJson.filter((item) => {
        // filter entire list
        const lowerName = item.name.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      createHtmlList(selectResto);
    });

    gender.addEventListener("input", async (event) => {
      // For gender
      console.log(event.target.value);
      const selectCat = arrayFromJson.filter((item) => {
        // filter entire list
        const lowerCat = item.name.toLowerCase();
        const lowerCatValue = event.target.value.toLowerCase();
        return lowerCat.includes(lowerCatValue);
      });
      createHtmlList(selectCat);
    });

    form.addEventListener("submit", async (submitEvent) => {
      submitEvent.preventDefault();
      currentArray = restoArrayMake(arrayFromJson);
      createHtmlList(currentArray);
    });
  }
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());
