function injectHTML(list, htmlelm) {
  let target = document.querySelector(htmlelm);
  target.innerHTML = '';

  
  // populate table head
  const head = document.createElement('tr');
  for (const key of Object.keys(list['data'][0])) {
    const th = document.createElement('th');
    th.innerText = cap(key);
    head.appendChild(th);
  }
  target.appendChild(head);

  // populate table content
  for (const [key, value] of Object.entries(list['data'])) {
    const tr = document.createElement('tr');
    const row = Object.values(value);
    row.forEach(element => {
      const td = document.createElement('td');
      td.innerText = element;
      tr.appendChild(td);
    });
    target.appendChild(tr);
  }
  console.log('injected');
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function arrayToTable(data) {
  const keys = [...data.reduce((all, obj) => {
    Object.keys(obj).forEach(key => all.add(key));
    return all;
  }, new Set())];

  const header = keys.map(key => `<th>${key}</th>`).join('')
  const tbody = data.map(row => keys.map(key => `<td>${row[key]}</td>`).join('')).map(row => `<tr>${row}</tr>`)

  return `<table>
      <thead><tr>${header}</tr></thead>
      <tbody>${tbody}</body>
  </table>`;
}

function getRandInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function processRestaurants(list) {
  console.log('fired restaurants list');
  const range = [...Array(15).keys()];
  const arr = range.map((i) => {
    const index = getRandInt(0, list.length);
    return list[index]
  })
  return arr;
  /*
    ## Process Data Separately From Injecting It
      This function should accept your 1,000 records
      then select 15 random records
      and return an object containing only the restaurant's name, category, and geocoded location
      So we can inject them using the HTML injection function
      */
}

function filterlist(array, filterInputvalue) {
  return array.filter((i) => {
    if (!i.name) { return; }
    const lowerCaseName = i.name.toLowerCase();
    const lowerCaseQuery = filterInputvalue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}


function addButt(htmlelm) {
  const form = document.querySelector(htmlelm);
  for (var i = 0; i < 11; i++) {
    var div = document.createElement('div');
    var btn = document.createElement('input');
    var labl = document.createElement('label');
    div.className = 'combo';
    btn.className = 'radiobutt';
    btn.type = 'radio';
    btn.name = 'butt';
    const year = 2022 - i;
    btn.id = year;
    btn.value = year;
    labl.htmlFor = year;
    labl.innerText = year;
    if (year === 2022) {
      btn.checked = true;
    }
    div.appendChild(btn);
    div.appendChild(labl);
    form.appendChild(div);
  }
}

async function mainEvent() {

  
  let yr = document.querySelector('#year').value;
  console.log(yr);
  /*
  form.addEventListener('#butt', (submitEvent) => {
    // get data //input[name="butt"]:checked
    submitEvent.preventDefault();
    
    console.log(submitEvent);
  });
*/
  
  const main = await fetch('/api/finServices');
  const listdata = await main.json();
  if (listdata.data?.length > 0) {
    document.querySelector('#rlist')
    .addEventListener('load',injectHTML(listdata,'#rlist'))
  }

/*
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get'); // get a reference to your submit button
  submit.style.display = 'none'; // let your submit button disappear
*/
  /*
    Let's get some data from the API - it will take a second or two to load
    This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
    It's at about line 27 - go have a look and see what we're retrieving and sending back.
   */
  const results = await fetch('/');
  const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON


  console.table(arrayFromJson.data);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc
  console.log(arrayFromJson.data[0]);

  // this is called "string interpolation" and is how we build large text blocks with variables
  console.log(`${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (arrayFromJson.data?.length > 0) { // the question mark in this means "if this is set at all"
    submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    let currentlist = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value)
      const tlist = filterlist(currentlist, event.target.value);
      injectHTML(tlist);
    })

    form.addEventListener('submit', (submitEvent) => {
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      // This constant will have the value of your 15-restaurant collection when it processes
      currentlist = processRestaurants(arrayFromJson.data);
      console.log(currentlist);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      injectHTML(currentlist);

      // By separating the functions, we open the possibility of regenerating the list
      // without having to retrieve fresh data every time
      // We also have access to some form values, so we could filter the list based on name
    });
  }
}

/*
This last line actually runs first!
It runs first because the listener is set to when your HTML content has loaded
*/
addButt('#butts');
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests