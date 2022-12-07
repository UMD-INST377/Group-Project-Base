/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');
// const data = getData();

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  console.log(json);
  return json;
}

function processLitters(list, location) {
  console.log('fired litter list');
  const range = []; // creating an array of 15 elements
  // eslint-disable-next-line no-unused-vars
  const district = findDistrict(districts, location);

  /* list.forEach((item) => {
    if (item.council_district === district) { range.add(item); }
  }); */

  // const keys = Object.keys(list);

  // const len = keys.length;
  for (let i = 0; i < 999; i++) {
    // console.log(list[i]);
    if (list[i].council_district == location) {
      console.log(list[i]);
      range.add(list[i]);
    }
    // Do something
  } 

  /* const newArray = range.add((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  }); */
  return range;
}
/* Map Functions */

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const {coordinates} = item.geocoded_column;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([38.9869, -76.9426], 9);
    }
  });
}

const cities = [
  'Adelphi', 'Beltsville', 'Calverton', 'College Park', 'Laurel', 'Montpelier', 'South Laurel', 'Vansville', 'West Laurel',
  'Avondale', 'Brentwood', 'Carole Highlands', 'Chillum', 'Green Meadows', 'Hyattsville', 'Langley Park', 'Lewisdale', 'Mount Rainier', 'North Brentwood',
  'Beacon Heights', 'Berwyn Heights', 'East Pines', 'Glenridge', 'Lanham', 'New Carrollton', 'Riverdale Heights and Hills', 'Riverdale Park', 'Seabrook', 'Templeton Knolls', 'University Park', 'West Lanham Hills', 'Woodlawn',
  'Bowie', 'Glenn Dale', 'Greenbelt', 'Westchester Park', 'Seabrook', 'Upper Marlboro',
  'Bladensburg', 'Cheverly', 'Edmonston', 'Fairmount Heights', 'Glenarden', 'Landover', 'Colmar Manor', 'Cottage City', 'Springdale', 'Landover Hills',
  'South Bowie', 'Forestville', 'Kettering', 'Largo', 'Mitchellville',
  'District Heights', 'Bradbury', 'Boulevard Heights', 'Capitol Heights', 'Hillcrest Heights', 'Marlow Heights', 'Seat Pleasant', 'Suitland', 'Morningside',
  'Camp Springs', 'Andrews Air Force Base', 'Clinton', 'Forest Heights', 'Glass Manor', 'Oxon Hill', 'Temple Hills',
  'Accokeek', 'Aquasco', 'Baden', 'Brandywine', 'Cheltenham', 'Eagle Harbor', 'Fort Washington', 'Piscataway'
];

const districts = [
  [1, 'Adelphi', 'Beltsville', 'Calverton', 'College Park', 'Laurel', 'Montpelier', 'South Laurel', 'Vansville', 'West Laurel'],
  [2, 'Avondale', 'Brentwood', 'Carole Highlands', 'Chillum', 'Green Meadows', 'Hyattsville', 'Langley Park', 'Lewisdale', 'Mount Rainier', 'North Brentwood'],
  [3, 'Beacon Heights', 'Berwyn Heights', 'East Pines', 'Glenridge', 'Lanham', 'New Carrollton', 'Riverdale Heights and Hills', 'Riverdale Park', 'Seabrook', 'Templeton Knolls', 'University Park', 'West Lanham Hills', 'Woodlawn'],
  [4, 'Bowie', 'Glenn Dale', 'Greenbelt', 'Westchester Park', 'Seabrook', 'Upper Marlboro'],
  [5, 'Bladensburg', 'Cheverly', 'Edmonston', 'Fairmount Heights', 'Glenarden', 'Landover', 'Colmar Manor', 'Cottage City', 'Springdale', 'Landover Hills'],
  [6, 'South Bowie', 'Forestville', 'Kettering', 'Largo', 'Mitchellville'],
  [7, 'District Heights', 'Bradbury', 'Boulevard Heights', 'Capitol Heights', 'Hillcrest Heights', 'Marlow Heights', 'Seat Pleasant', 'Suitland', 'Morningside'],
  [8, 'Camp Springs', 'Andrews Air Force Base', 'Clinton', 'Forest Heights', 'Glass Manor', 'Oxon Hill', 'Temple Hills'],
  [9, 'Accokeek', 'Aquasco', 'Baden', 'Brandywine', 'Cheltenham', 'Eagle Harbor', 'Fort Washington', 'Piscataway']

];

// This function finds the district a city belongs to.
function findDistrict(districtArray, city) {
  const match = [];
  districtArray.forEach((district) => {
    if (district.includes(city)) {
      match.push(district[0]);
    }
  });
  return match.pop();
}

console.log(findDistrict(districts, 'Laurel'));

function autocomplete(inp, arr) {
  /* the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values: */
  let currentFocus;
  /* execute a function when someone writes in the text field: */
  inp.addEventListener('input', function(e) {
    let a; let b; let i; const
      val = this.value;
    /* close any already open lists of autocompleted values */
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /* create a DIV element that will contain the items (values): */
    a = document.createElement('DIV');
    a.setAttribute('id', `${this.id}autocomplete-list`);
    a.setAttribute('class', 'autocomplete-items');
    /* append the DIV element as a child of the autocomplete container: */
    this.parentNode.appendChild(a);
    /* for each item in the array... */
    for (i = 0; i < arr.length; i++) {
      /* check if the item starts with the same letters as the text field value: */
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        /* create a DIV element for each matching element: */
        b = document.createElement('DIV');
        /* make the matching letters bold: */
        b.innerHTML = `<strong>${arr[i].substr(0, val.length)}</strong>`;
        b.innerHTML += arr[i].substr(val.length);
        /* insert a input field that will hold the current array item's value: */
        b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
        /* execute a function when someone clicks on the item value (DIV element): */
        b.addEventListener('click', function(e) {
          /* insert the value for the autocomplete text field: */
          inp.value = this.getElementsByTagName('input')[0].value;
          /* close the list of autocompleted values,
              (or any other open lists of autocompleted values: */
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /* execute a function presses a key on the keyboard: */
  inp.addEventListener('keydown', function(e) {
    let x = document.getElementById(`${this.id}autocomplete-list`);
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode === 40) {
      /* If the arrow DOWN key is pressed,
        increase the currentFocus variable: */
      currentFocus++;
      /* and and make the current item more visible: */
      addActive(x);
    } else if (e.keyCode === 38) { // up
      /* If the arrow UP key is pressed,
        decrease the currentFocus variable: */
      currentFocus--;
      /* and and make the current item more visible: */
      addActive(x);
    } else if (e.keyCode === 13) {
      /* If the ENTER key is pressed, prevent the form from being submitted, */
      e.preventDefault();
      if (currentFocus > -1) {
        /* and simulate a click on the "active" item: */
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /* a function to classify an item as "active": */
    if (!x) return false;
    /* start by removing the "active" class on all items: */
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /* add class "autocomplete-active": */
    x[currentFocus].classList.add('autocomplete-active');
  }
  function removeActive(x) {
    /* a function to remove the "active" class from all autocomplete items: */
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  function closeAllLists(elmnt) {
    /* close all autocomplete lists in the document,
    except the one passed as an argument: */
    const x = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /* execute a function when someone clicks in the document: */
  document.addEventListener('click', (e) => {
    closeAllLists(e.target);
  });
}

async function main() {
  const map = initMap();
  const litterData = await getData();

  let currentList = [];

  form.addEventListener('input', (event) => {
    console.log(event.target.value);
    // const newFilterList = filterList(currentList, event.target.value);
    // injectHTML(newFilterList);
    markerPlace(currentList, map);
  });

  form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();

    // This constant will have the value of your 15-restaurant collection when it processes
    currentList = processLitters(litterData, document.getElementById.value);
    // console.log(restaurantList);

    // And this function call will perform the "side effect" of injecting the HTML list for you
    markerPlace(currentList, map);

    // By separating the functions, we open the possibility of regenerating the list
    // without having to retrieve fresh data every time
    // We also have access to some form values, so we could filter the list based on name
  });
  console.log(litterData[0]);
}

autocomplete(document.getElementById('city'), cities);
document.addEventListener('DOMContentLoaded', async () => main()); // the async keyword means we can make API requests