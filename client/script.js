function createHtmlList(collection) {
    const targetList = document.querySelector('#resto-list');
    targetList.innerHTML = '';
    collection.forEach((item) => {
      const {first_name} = item;
      const displayName = first_name.toLowerCase();
      const injectThisItem = `<li>${displayName}</li>`;
      targetList.innerHTML += injectThisItem;
    });

    collection.forEach((litem) => {
        const {last_name} = litem;
        const displayName = last_name.toLowerCase();
        const injectThisItem = `<li>${displayName}</li>`;
        targetList.innerHTML += injectThisItem;
      });
  }

async function mainEvent() { // the async keyword means we can make API requests
    console.log('script loaded'); // substituting for a 'breakpoint'
    const form = document.querySelector('.main_form');
    const submit = document.querySelector('.submit');
  
    const fname = document.querySelector('#first_name');
    const lname = document.querySelector('#last_name');
    submit.style.display = 'none';
  
    const results = await fetch('/api/artists'); // This accesses some data from our API
    const arrayFromJson = await results.json(); // This changes it into data we can use - an object
    // it is better not to display this until the data has loaded
  
    if (arrayFromJson.data.length > 0) {
      submit.style.display = 'block';
  
      let currentArray = [];
  
      // first Name
      fname.addEventListener('input', async (event) => {
        console.log(event.target.value);
  
        if (currentArray.length < 1) {
          return;
        }
  
        const artistFname = currentArray.filter((item) => {
          const lowerName = item.first_name.toLowerCase();
          const lowerValue = event.target.value.toLowerCase();
          return lowerName.includes(lowerValue);
        });
        console.log(artistFname);
        createHtmlList(artistFname);
      });
  
      // last name
      lname.addEventListener('input', async (event) => {
        console.log(event.target.value);
  
        if (currentArray.length < 1) {
          return;
        }
        const selectedLname = currentArray.filter((item) => {
            const lowerName = item.lname.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.includes(lowerValue);
        });
        console.log(selectedLname);
        createHtmlList(selectedLname);
      });
  
      form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
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
  
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests