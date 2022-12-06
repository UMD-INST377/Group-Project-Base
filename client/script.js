function getRandomIntInclusive(min, max){
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  }
  
  function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector("#Library_List");
    target.innerHTML = '';
  
    const listEl = document.createElement('ol');
    target.appendChild(listEl);
  
    list.forEach(item => {
      const el = document.createElement('li');
      el.innerText = item.branch_name;
      listEl.appendChild(el);
    })
    return list;
  }
  
  async function getData(){
    const url = 'https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    const reply = json.filter((item) => Boolean(item.location_1)).filter((item) => Boolean(item.branch_name));
    console.log('Results in library API', json.length); 
    return reply ;
  }

  function processRestaurants(list) {
    console.log('fired library list');
    const range = [...Array(20).keys()];
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    })
    return newArray;

  }
  
  /* This function filters the given list by the input value. turning a string into an integer */
  function filterList(array, filterInputValue){
    return newArray = array.filter((item) => {
      const intVal = new Number(filterInputValue);
      //const lowerCaseQuery = filterInputValue.toLowerCase();
      const zipMatch = item.zip_code.includes(intVal);
      return zipMatch;
    })
  }

  function initMap(){
    console.log('initMap');
    const map = L.map('map').setView([38.880540, -76.831386],10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }


  function markerPlace(array, map){
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    array.forEach((item, index) => {
      console.log(item.location_1);
      const {latitude, longitude} = item.location_1;
      const intLat = new Number(latitude);
      const intLng = new Number(longitude);
      const marker = L.marker([intLat, intLng].addTo(map));
      L.latlng(marker);
      if(index === 0){
        map.setView([intLat, intLng], 11);
      }
    })
  }


  async function mainEvent() {
    /*
      ## Main Event
        Separating your main programming from your side functions will help you organize your thoughts
        When you're not working in a heavily-commented "learning" file, this also is more legible
        If you separate your work, when one piece is complete, you can save it and trust it
    */
    const pageMap = initMap();
    // the async keyword means we can make API requests
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#get-zipcode'); // get a reference to your submit button
    const loadAnimation = document.querySelector('.lds-ellipsis');
    submit.style.display = 'none'; // let your submit button disappear
  
    /*
      Let's get some data from the API - it will take a second or two to load
      This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
      It's at about line 27 - go have a look and see what we're retrieving and sending back.
     */
    const libraryData = await getData();
    // loadLibraryData('https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json');
    // const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON
    //const results = await fetch(libraryData);
   // const arrayFromJson = await results.json();
    /*
      Below this comment, we log out a table of all the results using "dot notation"
      An alternate notation would be "bracket notation" - arrayFromJson["data"]
      Dot notation is preferred in JS unless you have a good reason to use brackets
      The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
    */
    console.table(libraryData);
  
    // in your browser console, try expanding this object to see what fields are available to work with
    // for example: arrayFromJson.data[0].name, etc
    //console.log(arrayFromJson.data[0]);
  
    // this is called "string interpolation" and is how we build large text blocks with variables
   // console.log(`${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`);
  
    // This IF statement ensures we can't do anything if we don't have information yet
    if (libraryData?.length > 0) {

      submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
  
      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden');

      let currentList = [];

      form.addEventListener('input', (event) => {
        console.log(event.target.value);
        const filteredList = filterList(currentList, event.target.value);
        injectHTML(filteredList);
        markerPlace(filteredList, pageMap);
      })

      // And here's an eventListener! It's listening for a "submit" button specifically being clicked
      // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
      form.addEventListener('submit', (submitEvent) => {
        // This is needed to stop our page from changing to a new URL even though it heard a GET request
        submitEvent.preventDefault();
  
        // This constant will have the value of your 15-restaurant collection when it processes
        currentList = processRestaurants(libraryData);
      
        //currentList = processRestaurants(arrayFromJson.data);
  
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
  