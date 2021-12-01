/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const hotelsList = document.getElementById('hotelsList');
const searchBar = document.getElementById('searchBar');
let hotelsOverview = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredHotels = hotelsOverview.filter((hotel) => {
    return (
      hotel.hotel_name.toLowerCase().includes(searchString) ||
      hotel.street_address.toLowerCase().includes(searchString) ||
      hotel.city.toLowerCase().includes(searchString)
    );
  });
  displayHotels(filteredHotels);
});

const displayHotels = (hotels) => {
  const htmlString = hotels
    .map((hotel) =>  `
            <li class="results${hotel.beachside === 1 ? ' beachside' : ''}${
      hotel.family_friendly === 1 ? ' family_friendly' : ''
      }${hotel.pet_friendly === 1 ? ' pet_friendly' : ''}">
      <form action="hotelInformation.html" method="get">
          <input type="hidden" name="hotel_id" value="${hotel.hotel_id}">
          <button type="submit" class="result" onclick="location.href='hotelInformation.html'">
                <ul><strong>${hotel.hotel_name}</strong></ul>
                <ul>${hotel.street_address}</ul>
                <ul>${hotel.city}, ${hotel.zip_code} ${hotel.state}</ul>
            </a></li>
            </button>
            </input>
            </form>
        `)
    .join('');
  hotelsList.innerHTML = htmlString;
};

const loadHotels = async () => {
  try {
    const res = await fetch(
      'https://group4-final-inst377fa2021.herokuapp.com/api/hotel_overview'
    );
    hotelsOverview = await res.json();

    displayHotels(hotelsOverview);
  } catch (err) {
    console.error(err);
  }
};

function searchHotels() {
  const btnContainer1 = document.getElementById('myBtnContainer');
  const btns1 = btnContainer1.getElementsByClassName('btn1');
  for (let i = 0; i < btns1.length; i += 1) {
    const [current] = document.getElementsByClassName('active');
    current
      ? (current.className = current.className.replace(' active', ''))
      : '';
  }
  const showAllbtn1 = document.getElementById('showAllbtn');
  showAllbtn1.classList.add('active');

  // Declare variables
  const input = document.getElementById('searchBar');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('hotelsList');
  const li = ul.getElementsByTagName('li');
  let a; let
    txtValue;

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i += 1) {
    [a] = li[i].getElementsByTagName('a');
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

const btnContainer = document.getElementById('myBtnContainer');
const btns = btnContainer.getElementsByClassName('btn1');
for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', function () {
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
}

function filterSelection(c) {
  document.getElementById('searchBar').value = '';
  let x; let i; let
    ul;
  ul = document.getElementById('hotelsList');
  x = ul.getElementsByTagName('li');
  // revert all to display all again
  for (i = 0; i < x.length; i += 1) {
    x[i].style.display = '';
  }
  if (c == 'all') c = '';
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i += 1) {
    x[i].style.display = '';
    if (c) {
      if (x[i].className.indexOf(c) > -1) {
        x[i].style.display = '';
      } else {
        x[i].style.display = 'none';
      }
    }
  }
}

filterSelection('all');

// Show filtered elements
function w3AddClass(element, name) {
  const arr1 = element.className.split(' ');
  const arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ` ${arr2[i]}`;
    }
  }
}

loadHotels();