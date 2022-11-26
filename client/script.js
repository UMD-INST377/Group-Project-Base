function getRandomInclusing(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function injectHTML(list) {

}

async function mainEvent() {
    // map here or something
    const results = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population%27');
    const arrayFromJson = await results.json(); 
    console.log(arrayFromJson);


     if(arrayFromJson.data?.length > 0) {     
      //inject? and map shit
     }

}
 document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests


 /*

An asynchronous data request to your API 
A processing request that uses array methods (.map, .filter, .find, .reduce) to change your data into the shape your chart, map, or other component needs for display
