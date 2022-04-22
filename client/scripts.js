/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
async function mainEvent() { // the async keyword means we can make API requests
  // const form = document.querySelector('.');
  // const submit = document.querySelector('.form-rows');
  const results = await fetch('/api/artists'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  console.table(arrayFromJson);
  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';
    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      console.log('form submission');
    });
  }
}
