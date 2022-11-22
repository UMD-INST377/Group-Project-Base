

function getRandomInclusing(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }



function injectHTML(list) {

}

function createplaylsit(array, song) {
    playlist = []; 
    array.forEach((element) => { // not sure if element is correct
        // will have to do an if statement grabbing songs what have the same genre
        // add them to a new playlist array
     });
    return playlist;
}

async function mainEvent() {
    // map here or something
     const results = await fetch()


     if(arrayFromJson.data?.length > 0) {     

        form.addEventListener('input', (event) =>{

        });



    } else {
        console.log('Sorry, that is not a valid genre');
    }


}

 document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
/*

An asynchronous data request to your API 
A processing request that uses array methods (.map, .filter, .find, .reduce) to change your data into the shape your chart, map, or other component needs for display
*/