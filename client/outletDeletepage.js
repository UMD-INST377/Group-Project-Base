function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  }
  
  function dataHandler(dataArray) {
    console.table(dataArray); // this is called "dot notation"
    const range = [...Array(1).keys()];
    const listItems = range.map((item, index) => {
      const restNum = getRandomIntInclusive(0, dataArray.length - 1);
      return dataArray[restNum];
    });
    // console.log(listItems)
    return listItems;
  }
  
  function createHtmlList(collection) {
    const targetList = document.querySelector('.result_display');
    targetList.innerHTML = '';
    collection.forEach((item) => {
      const {track_name} = item;
      const displayName = track_name.toLowerCase();
      // const injectThisItem = `<li>${item.name}</li>`;
      const injectThisItem = `<li>${displayName}</li>`;
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

const form3 = document.querySelector('.delete_outlet')
  form3.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    const formObj = formToObject(form3);
    console.log('check the form for filters', formObj);
    const postResult = await fetch('https://group4-final-inst377sp2022.herokuapp.com/api/outletPath/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    });
  });
  }

  document.addEventListener('DOMContentLoaded', async () => mainEvent());