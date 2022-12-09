async function getData() {
    const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
    const request = await fetch(url);
    const json = await request.json();
    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.location));
    return reply;
  }
  /*
  function shapeDataForLineChart(array) {
    return array.reduce((collection, item) => {
      if(!collection[item.category]) {
        collection[item.category] = [item]
      } else {
        collection[item.category].push(item);
      }
      return collection;
    }, {});
  }
  */

  function initMap() {
    // will need this to inject markers later!
    console.log('initMap');
    const map = L.map('map').setView([38.8300, -76.8500], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }

  async function mainEvent() {
    
    const pageMap = initMap();
    // the async keyword means we can make API requests
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#get-crime'); // get a reference to your submit button
    //const loadAnimation = document.querySelector('.lds-ellipsis'); -->
    //submit.style.display = 'none'; // let your submit button disappear
  
    /*
          Let's get some data from the API - it will take a second or two to load
          This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
          It's at about line 27 - go have a look and see what we're retrieving and sending back.
         */
    //const results = await fetch('/api/foodServicePG');
    const arrayFromJson = await getData(); // here is where we get the data from our request as JSON
    console.log(arrayFromJson);
  
    /*
          Below this comment, we log out a table of all the results using "dot notation"
          An alternate notation would be "bracket notation" - arrayFromJson["data"]
          Dot notation is preferred in JS unless you have a good reason to use brackets
          The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
        */
    console.table(arrayFromJson.data);
  
    // in your browser console, try expanding this object to see what fields are available to work with
    // for example: arrayFromJson.data[0].name, etc
    console.log(arrayFromJson.data[0]);
  
    // this is called "string interpolation" and is how we build large text blocks with variables
    console.log(
      `${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`
    );
  
    // This IF statement ensures we can't do anything if we don't have information yet
    if (arrayFromJson.data?.length > 0) {
      // the question mark in this means "if this is set at all" & return if we have no data
      submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
  
      // Let's hide the load button now that we have data to manipulate
      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden'); // turn the submit button back on by setting it to display as a block when we have data available
      
      let currentList = [];
      
      form.addEventListener('input', (event) => {
        console.log(event.target.value); // pull-in form for event bubbling
        const filteredList = filterList(currentList, event.target.value); // filter current list from event target value
        injectHTML(filteredList);
        markerPlace(filteredList, pageMap);
      });
  
      // And here's an eventListener! It's listening for a "submit" button specifically being clicked
      // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
      form.addEventListener('submit', (submitEvent) => {
        // This is needed to stop our page from changing to a new URL even though it heard a GET request
        submitEvent.preventDefault();
  
        // This constant will have the value of your 15-restaurant collection when it processes
        currentList = processRestaurants(arrayFromJson.data);
        console.log(currentList);
  
        // And this function call will perform the "side effect" of injecting the HTML list for you
        injectHTML(currentList);
        markerPlace(currentList, pageMap);
  
        // By separating the functions, we open the possibility of regenerating the list
        // without having to retrieve fresh data every time
        // We also have access to some form values, so we could filter the list based on name
      });
    }
  }
  
  /*
        This last line actually runs first!
        It's calling the 'mainEvent' function at line 57
        It runs first because the listener is set to when your HTML content has loaded
      */
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
