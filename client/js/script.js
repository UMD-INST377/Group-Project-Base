function createHtmlList(collection) {
  const targetList = document.querySelector('.result_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { albums } = item;
    const { artists } = item;
    const displayName = albums.toLowerCase();
    const displayArtist = artists.toLowerCase();
    const injectThis = `<th>${displayName}</th>`;
    const injectThisCity = ` <td>${displayArtist}</td>`;
    targetList.innerHTML += injectThis + injectThisCity;
  });
}
async function albumDelete() {
  console.log('hello from delete');
  const request = `api/albums/${formbox.value}`;
  const resp = await fetch(request, {method: 'DELETE'});
  console.log(resp);
  if (resp.status === 200) {alert(`${formbox.value}.deleted`)}
  else {
    alert('Not_Found')
  }
}
async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('#results');
  const submitButton = document.querySelector('#submit_button');
  const restName = document.querySelector('#init_search');
  const del = document.querySelector('#delete');
  const results = await fetch('/api/main'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object

  if (arrayFromJson.data.length > 0) {
    submitButton.style.display = 'block';
    console.log('start');
    let currentArray = [];
    restName.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (event.length < 1) {
        console.log('caught');
        return;
      }
      // change arrayFromJson.data to currentArray if needed
      const dataArray = arrayFromJson.data.filter((item) => {
        const lowerName = item.albums.toLowerCase();
        const lowerValue = event.target.value.toLowerCase();
        return lowerName.includes(lowerValue);
      });
      console.log(dataArray);

      createHtmlList(dataArray);
    });

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a 'breakpoint'
      currentArray = arrayFromJson.data;
      createHtmlList(currentArray);
    });

    // del.addEventListener('input', albumDelete);
  }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests