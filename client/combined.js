// melody ic3
async function createtable() {
  let currentdata = [];
  let data = [];
  const form = document.querySelector('.mainform');
  const table = document.querySelector('.table');
  const takeoutcheckbox = document.querySelector('#takeout');
  const deliverycheckbox = document.querySelector('#delivery');
  const parkingcheckbox = document.querySelector('#parking');

  function filtercheck(array) {
    let filterarray = array;

    if (takeoutcheckbox.checked) {
      const newfilter = filterarray.filter((item) => item.takeout === 1);
      filterarray = newfilter;
    }
    if (deliverycheckbox.checked) {
      const newfilter = filterarray.filter((item) => item.delivery === 1);
      filterarray = newfilter;
    }
    if (parkingcheckbox.checked) {
      const newfilter = filterarray.filter((item) => item.parking === 1);
      filterarray = newfilter;
    }

    return filterarray;
  }

  async function loadtable(array) {
    table.innerHTML = `<tbody><tr>
          <th>Restaurant Name</th>
          <th>Description</th>
      
          </tr>
          </tbody>`;
    array.forEach((item) => {
      const row = document.createElement('tr');
      const restaurantname = document.createElement('td');
      restaurantname.innerHTML = item.restaurant_name;

      row.appendChild(restaurantname);
      const desc = document.createElement('td');
      desc.innerHTML = item.description;
      row.appendChild(desc);

      // const tk = document.createElement("td")
      // tk.innerHTML = item.takeout
      // row.appendChild(tk)

      table.appendChild(row);
    });
  }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (currentdata.length === 0) {
      const arrayFromJson = await fetch('/melody/description');
      data = await arrayFromJson.json();
      console.log(data);
      currentdata = data;
      currentdata = filtercheck(data);
      console.log(currentdata, 'filter');
      loadtable(currentdata);
    } else {
      currentdata = filtercheck(data);
      loadtable(currentdata);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await createtable();
});

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
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { restaurant_name } = item;
    const displayName = restaurant_name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  console.log(document.querySelector('.mainform'));
  const form = document.querySelector('.mainform');
  const submit = document.querySelector('.button');
  const address_1 = document.querySelector('#NewAddress');
  // const zipcode = document.querySelector('#zipcode');
  submit.style.display = 'none';
  const results = await fetch('/ethan/address'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.log(arrayFromJson);
  if (arrayFromJson.length > 0) {
    submit.style.display = 'block';
    //let currentArray = [];
    let currentArray = arrayFromJson;
    console.log(currentArray.length);
    address_1.addEventListener('input', async (event) => {
      console.log(currentArray.length);
      if (currentArray.length === 0) {
        return;
      }
      console.log(event.target.value.toLowerCase());
      const selectResto = currentArray.filter((item) => {
        console.log(item.address_1);
        const lowerName = item.address_1.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      console.log(selectResto);
      createHtmlList(selectResto);
    });
    form.addEventListener('submit', async (submitEvent) => {
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

document.addEventListener('DOMContentLoaded', async () => mainEvent());
