// Contribute Page 
const contributeForm = document.querySelector('#contribute_form');

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
};

console.log(contributeForm)

contributeForm.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent)
    const formObj = formToObject(contributeForm);

    
    const postResult = await fetch('api/artist', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)

    
    });
    
    const postResultJSON = await postResult.json();
    console.log('return from POST', postResult);
    console.log('return from POST JSON', postResultJSON)
    

});
//CHarts Maxim Galkin

async function mainChart() {
const genres = await fetch('api/genre'); // This accesses some data from our API
  const genreArray = await results.json(); // This changes it into data we can use - an object
  console.log(genreArray);
  createGenreList(genreArray);
}


  function createGenreList(collection) {
    console.log(collection);
    const targetList = document.querySelector('#songs-images');
    targetList.innerHTML = '';
    collection.forEach((item) => {
      const injectThisItem = `<li>${item.name}</li>`;
      targetList.innerHTML += injectThisItem;
    });
  }
// Search Bar
const searchBar = document.querySelector("#index_search_bar")
searchBar.onkeyup = inTuneSearch()
function inTuneSearch() {
    console.log()
} 

