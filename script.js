
function shapeDataForLineChart(array) {
    return array.reduce((collection, item) => {
      if (!collection[item.category]) {
        collection[item.category] = [item];
      } else {
        collection[item.category].push(item);
      }
      return collection;
    }, {});
  }


  async function sendData(list){
    console.log('fired results');
    const range = [...Array(3).keys()];
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    })
    return newArray;
  }

  function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector("#data_list");
    target.innerHTML = '';
  
    const listEL = document.createElement('ol');
    target.appendChild(listEL);
    list.forEach((item) => {
      const el = document.createElement('li');
      el.innerText = item.name;
      listEL.appendChild(el);
    });
  
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); 
    }
  
    async function sendData(list){
      console.log('fired results');
      const range = [...Array(3).keys()];
      const newArray = range.map((item) => {
        const index = getRandomIntInclusive(0, list.length);
        return list[index];
      })
      return newArray;
    }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e2a17786bamsh39f2855f9aaf40dp1b10c0jsnf0ccf57e91e0',
        'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
      }
    };