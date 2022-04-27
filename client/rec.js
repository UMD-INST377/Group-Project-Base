function createHtmlList(collection) {
    // console.log('fired HTML creator');
    // console.log(collection);
    const targetList = document.querySelector('.resto-list');
    targetList.innerHTML = '';
    collection.forEach((item) => {
      const { name } = item;
      const nameDisplay = name.toLowerCase();
      const injectThisItem = `<li>${nameDisplay}</li>`;
      // const injectThisItem = `<li>${item.name}</li>`;
      targetList.innerHTML += injectThisItem;
    });
  }

  function formToObject(htmlFormElement) {
    const formItem = new FormData(htmlFormElement).entries();
    const formArray = Array.from(formItem);
    const formObject = formArray.reduce((collection, item, index) => {
      if (!collection[item[0]]) {
        collection[item[0]] = item[1];
      }
      return collection;
    }, {});
    return formObject;
  }
  
  async function mainEvent() {
    console.log('script loaded');
    const form = document.querySelector('.page_form');
    const but = document.querySelector('.button');
    const resto = document.querySelector('#resto_name');
    const category = document.querySelector('#category');
    but.style.display = 'none';
  
    const results = await fetch(
      "http://localhost:3000/api/artist"
    );
    const arrayFromJson = await results.json();
    console.log(arrayFromJson);
  
    if (arrayFromJson.length > 0) { // prevents race condition
      but.style.display = 'block';
  
      let currentArray = [];
      resto.addEventListener('input', async (event) => { // for restaurant
        console.log(event.target.value);
        // if (currentArray.length < 1) {
        //   return;
        // }
        // const selectResto = currentArray.filter((item) => {
        const selectResto = arrayFromJson.filter((item) => { // filter entire list
          const lowerName = item.name.toLowerCase();
          const lowerValue = event.target.value.toLowerCase();
          return lowerName.includes(lowerValue);
        });
        createHtmlList(selectResto);
      });
  
      category.addEventListener('input', async (event) => { // For category
        console.log(event.target.value);
        // const selectCat = currentArray.filter((item) => {
        const selectCat = arrayFromJson.filter((item) => { // filter entire list
          const lowerCat = item.name.toLowerCase();
          const lowerCatValue = event.target.value.toLowerCase();
          return lowerCat.includes(lowerCatValue);
        });
        createHtmlList(selectCat);
      });
  
      form.addEventListener('submit', async (submitEvent) => {
        submitEvent.preventDefault();
        // console.log('form submission');
        // currentArray = restoArrayMake(arrayFromJson);
        // createHtmlList(currentArray);
        const formObj = formToObject(form);
        console.log('Check form for filters', formObj);
        const postResult = await fetch("http://localhost:3000/api/artist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        });
        const postResultJSON = await postResult.json();
        console.log('return from POST', postResult)
        console.log('return from POST JSON', postResultJSON)
      });
    }
  }
  document.addEventListener('DOMContentLoaded', async () => mainEvent());