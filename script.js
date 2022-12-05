

/* const film1 = "The Breakfast Club";
const film2 = "Ferris Bueller's Day Off"; */
const imdbkey = "k_ljv5h5vz/";
const firstCall = "https://imdb-api.com/en/API/Search/"+ imdbkey+ film1;
const secondCall = "https://imdb-api.com/en/API/Search/"+ imdbkey + film2;


/* document.getElementById("h2").innerHTML = "Looking for Cast and Crew members in common between " + film1 + " & " + film2;
 */

let cclist1;
let cclist2;

let firstdone = false;

const output1 = document.getElementById("#get-film1").innerHTML;


    
async function getFilmTitle(name){
  let response = await fetch(name)
  return response.json();
}



console.log("Start")


getFilmTitle(firstCall)
.then(function(jsonData){
  console.log(jsonData);
  let firstID= JSON.stringify(jsonData.results[0]).substring(7,16);
  console.log("ID: " + firstID);
  cclist1 = cast(firstID); 
   
})
.then(function(){
  getFilmTitle(secondCall)
  .then(function(jsonData){
  console.log(jsonData);
  let secondID= JSON.stringify(jsonData.results[0]).substring(7,16);
  console.log("ID: " + secondID);
  cclist2 = cast(secondID);
  
})

})



function cast(filmID){
  let cast1 = "https://imdb-api.com/en/API/FullCast/" + imdbkey + filmID;

  console.log("Cast: " + cast1);
  getFilmTitle(cast1)
  .then(function(jsonData){
    let regex = /name":"([a-zA-z ]* [a-zA-z ]*)/g;
    let response = JSON.stringify(jsonData);
    let matches = response.match(regex).map(x => x.replace('name":"',""));
    if(firstdone == false){
      document.getElementById("get-film1").innerHTML = matches;
    } else{
      document.getElementById("get-film2").innerHTML = matches;
      intersect();
    }
    firstdone = true;
    return matches;
    
  })
  
}

function removeDups(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

async function intersect() {

  const a = document.querySelector("#get-film1").innerHTML;
  const b = document.querySelector("#get-film2").innerHTML;

  const y = a.split(',');
  const z = b.split(',');

  const filteredArray = removeDups(y.filter(value => z.includes(value)));
  console.log("In Common: " + filteredArray);
  document.getElementById("h3").innerHTML = "People in common: " + filteredArray;
  document.getElementById("cloud").appendChild(document.createElement('img')).src = "https://quickchart.io/wordcloud?text=" + y + z;
}



async function mainEvent() {
  const form = document.querySelector('.main_form');
  const submit1 = document.querySelector('#get-film1');
  const submit2 = document.querySelector('#get-film2');
  
  const results = await fetch('https://imdb-api.com/en/API/Search/');
}
//document.getElementById("demo").innerHTML = n;