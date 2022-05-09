/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable camelcase */

function createHtmlList(collection) {
  const targetList = document.querySelector('.plants_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {common_name} = item;
    const displayName = common_name;
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function mainEvent() {
  console.log('script loaded');
  const results = await fetch('/api/map');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);

  // const form = document.querySelector('.map_form');
  const location = document.querySelector('#location');

  if (arrayFromJson.data.length > 0) {
    location.addEventListener('input', async (event) => {
      console.log(event.target.value);

      const selectLocation = arrayFromJson.data.filter((item) => {
        const upperCode = item.location_code.toUpperCase();
        const upperInput = event.target.value.toUpperCase();
        return upperCode.includes(upperInput);
      });

      console.log(selectLocation);
      createHtmlList(selectLocation);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());