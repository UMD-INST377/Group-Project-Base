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
// to-do write function to retrive park info from park name

// to-do hook up review form

function updateParks(collection) {
  // console.table(collection);
  const targetList = document.querySelector('#park');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {park_name} = item;
    const displayName = park_name;
    const injectThisItem = `<option>${displayName}</option>`;
    targetList.innerHTML += injectThisItem;
  });
}

function findPark(park, parkArray) {
  let match;
  parkArray.forEach((item) => {
    // console.log(item);
    if (item.park_name === park) {
      console.log('park found');
      match=item;
    }
  });
  return match;
}
// function refreshList (target, storage) {
//   target.addEventListener('click', async (event) => {
//     event.preventDefault();
//     localStorage.clear();
//     const parks = await fetch('/api/race/parks');
//     const parksArray = await parks.json();
//     console.log(typeof parksArray);
//     localStorage.setItem(storage, parksArray);
//     // location.reload();
//   });
// }
// function inputListener(target) {
//   target.addEventListener('input', async (event) => {
//     console.log(event.target.value);
//     const selectResto = storedDataArray.filter((item) => {
//       const lowerName = item.name.toLowerCase();
//       const lowerValue = event.target.value.toLowerCase();
//       return lowerName.includes(lowerValue);
//     });
//     console.log(selectResto);
//     updateParks(selectResto);
//   });
// }

async function mainEvent() { // the async keyword means we can make API requests
  const reviewForm = document.querySelector('.review_form');

  const submit = document.querySelector('.submit_button');

  const parks = document.querySelector('#park');

  const retrievalVar = 'parks';
  submit.style.display = 'none';

  // refreshList(refresh, retrievalVar);

  const parksapi = await fetch('/api/race/');
  const parksjson = await parksapi.json();
  const parksArray = parksjson.parks;
  // const storedDataArray = JSON.parse(parksArray);
  console.log(parksArray);
  // console.log(storedDataArray);
 // test 
  updateParks(parksArray);
  if (parksArray?.length > 0) {
    // this statement is to prevent a race condition on data load
    submit.style.display = 'block';

    let currentArray = parksArray;
    let currentPark = parksArray[0];
    // inputListener(parks);
    parks.addEventListener('change', async (event) => {
      console.log(event.target.value);
      console.log(parksArray);
      matchingPark = findPark(event.target.value, parksArray);
      currentPark = matchingPark;
      // console.log(currentPark);
    });

    reviewForm.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      const rev = formToObject(reviewForm);
      // console.log(rev);
      const reviewJson = {
        park_id: currentPark.park_id,
        title: rev.review_title,
        author: rev.review_author,
        description: rev.review
      };

      fetch('/api/race/reviews', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        // make sure to serialize your JSON body
        body: JSON.stringify(reviewJson)
      })
        .then((response) => {
          console.log(response);
        });
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests