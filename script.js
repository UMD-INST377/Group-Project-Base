

const film1 = "The Breakfast Club";
const film2 = "Ferris Bueller's Day Off";
const imdbkey = "k_ljv5h5vz/";
const firstCall = "https://imdb-api.com/en/API/Search/"+ imdbkey+ film1;
const secondCall = "https://imdb-api.com/en/API/Search/"+ imdbkey + film2;


document.getElementById("h2").innerHTML = "Looking for Cast and Crew members in common between " + film1 + " & " + film2;


let cclist1;
let cclist2;

let firstdone = false;

const output = document.getElementById("data").innerHTML;

    
async function getFilmTitle(name){
  let response = await fetch(name)
  return response.json();
}

async function getPoster(name){
  let response = await fetch(name)
  return response.json();
}




function cast(filmID){
  let cast1 = "https://imdb-api.com/en/API/FullCast/k_ljv5h5vz/" + filmID;

  // Get all cast members from the film
  console.log("Cast: " + cast1);
  getFilmTitle(cast1)
  .then(function(jsonData){
    let regex = /name":"([a-zA-z ]* [a-zA-z ]*)/g;
    let response = JSON.stringify(jsonData);
    let matches = response.match(regex).map(x => x.replace('name":"',""));
    if(firstdone == false){
      document.getElementById("data").innerHTML = matches;
    } else{
      document.getElementById("dataa").innerHTML = matches;
      intersect();

            
      // Updates photo and name for first actor
      document.getElementById("preview11").src = JSON.stringify(jsonData.actors[0].image).slice(1, -1);
      document.getElementById("preview11Name").innerHTML = JSON.stringify(jsonData.actors[0].name).slice(1, -1);

      // Updates photo and name for second actor
      document.getElementById("preview12").src = JSON.stringify(jsonData.actors[1].image).slice(1, -1);
      document.getElementById("preview12Name").innerHTML = JSON.stringify(jsonData.actors[1].name).slice(1, -1);

      // Updates photo and name for third actor
      document.getElementById("preview13").src = JSON.stringify(jsonData.actors[2].image).slice(1, -1);
      document.getElementById("preview13Name").innerHTML = JSON.stringify(jsonData.actors[2].name).slice(1, -1);

    } else{
      firstdone = true;
      
      // Updates photo and name for first actor
      document.getElementById("preview1").src = JSON.stringify(jsonData.actors[0].image).slice(1, -1);
      document.getElementById("preview1Name").innerHTML = JSON.stringify(jsonData.actors[0].name).slice(1, -1);

      // Updates photo and name for second actor
      document.getElementById("preview2").src = JSON.stringify(jsonData.actors[1].image).slice(1, -1);
      document.getElementById("preview2Name").innerHTML = JSON.stringify(jsonData.actors[1].name).slice(1, -1);

      // Updates photo and name for third actor
      document.getElementById("preview3").src = JSON.stringify(jsonData.actors[2].image).slice(1, -1);
      document.getElementById("preview3Name").innerHTML = JSON.stringify(jsonData.actors[2].name).slice(1, -1);
    }
    
    return matches;
    
  })
  
}

function removeDups(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

async function intersect() {

  const a = document.querySelector("#data").innerHTML;
  const b = document.querySelector("#dataa").innerHTML;

  const filteredArray = removeDups(a.filter(value => b.includes(value)));
  console.log("In Common: " + filteredArray);
  //document.getElementById("cloud").appendChild(document.createElement('img')).src = "https://quickchart.io/wordcloud?text=" + y + z;
}



async function mainEvent() {
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-film');
  
  const results = await fetch('https://imdb-api.com/en/API/Search/');
}


