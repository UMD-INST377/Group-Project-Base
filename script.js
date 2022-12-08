let filmCount = 0;
let filmCC = [];
let film2CC = [];


let firstdone = false;
let jsonTest;
let film1CC = {};

// Used for showing demo
let autotypingI = 0;
let autotypingI2 = 0;
const autotypingtext = "Schindler's List";
const autotypingtext2 = "Pulp Fiction";


// Need to clear form after submit
async function mainEvent() {
  firstdone = false;
  sampleUse();
  const titleform = document.getElementById("titleForm");
  const apiCall = "https://imdb-api.com/en/API/Search/k_ljv5h5vz/";
  let currentFilmID = "";
  
  // Gets the names of the films from the form
  titleform.addEventListener("submit", async (x) => {
    x.preventDefault();
    console.log("Film added");
    document.getElementById("button").classList.toggle("fadeOut");
    const formData = new FormData(x.target); // get the data from the listener target
    const formProps = Object.fromEntries(formData); // Turn it into an object
    console.log(Object.values(formProps));
    filmCount++;

    // Gets the ID of the film
    getFilmTitle(apiCall + Object.values(formProps))
    .then(function(jsonData){
      console.log(jsonData);
      currentFilmID= JSON.stringify(jsonData.results[0]).substring(7,16);
      console.log("ID: " + currentFilmID);

      // Adds posters
      getPoster("https://imdb-api.com/en/API/Title/k_ljv5h5vz/" + currentFilmID)
      .then(function(jsonData){
        const poster = JSON.stringify(jsonData.image);
        console.log("First done:" + firstdone);
        if(firstdone){
          document.getElementById("secondpost").src = poster.slice(1, -1);
          document.getElementById("postName2").innerHTML = Object.values(formProps)
        } else {
          document.getElementById("firstpost").src = poster.slice(1, -1);
          document.getElementById("postName1").innerHTML = Object.values(formProps)
          
        }
      });
      cast(currentFilmID); 
       
    });


  });



}

async function sampleUse() {
  console.log("Showing Demo");
  
  

  typeWriter();
  console.log("Done");
  setTimeout(function() {
    fadeIn(document.getElementById("leftFilm"));
  }, 1500);
  setTimeout(function() {
    document.getElementById("filmfield").value="";
  }, 2500);
  setTimeout(function() {
    typeWriter2();
  }, 2500);
  setTimeout(function() {
    fadeIn(document.getElementById("rightFilm"));
  }, 3500);
  setTimeout(function() {
    document.getElementById("filmfield").value="";
  }, 4200);
} 



function fadeIn(id){
  id.classList.toggle("fadeOut");
  id.classList.toggle("fade");
}
    
function typeWriter() {
  if (autotypingI < autotypingtext.length) {
    document.getElementById("filmfield").value += autotypingtext.charAt(autotypingI);
    
    autotypingI++;
    setTimeout(typeWriter, 70);
    
  }
  
}
function typeWriter2() {
  if (autotypingI2 < autotypingtext.length) {
    document.getElementById("filmfield").value += autotypingtext2.charAt(autotypingI2);
    
    autotypingI2++;
    setTimeout(typeWriter2, 70);
    
  }
  
}
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

    console.log("Testing input data");
    jsonTest = jsonData;

    if(firstdone){
            
      // Updates photo and name for first actor
      document.getElementById("preview11").src = JSON.stringify(jsonData.actors[0].image).slice(1, -1);
      document.getElementById("preview11Name").innerHTML = JSON.stringify(jsonData.actors[0].name).slice(1, -1);

      // Updates photo and name for second actor
      document.getElementById("preview12").src = JSON.stringify(jsonData.actors[1].image).slice(1, -1);
      document.getElementById("preview12Name").innerHTML = JSON.stringify(jsonData.actors[1].name).slice(1, -1);

      // Updates photo and name for third actor
      document.getElementById("preview13").src = JSON.stringify(jsonData.actors[2].image).slice(1, -1);
      document.getElementById("preview13Name").innerHTML = JSON.stringify(jsonData.actors[2].name).slice(1, -1);
      document.getElementById("filmfield").value="";

      (jsonData.writers.items).forEach(x => film2CC[x.id]="Writer");
      (jsonTest.directors.items).forEach(x => film2CC[x.id]="Director");
      (jsonTest.actors).forEach(x => film2CC[x.id]="Actor");
      (jsonTest.others[0].items).forEach(x => film2CC[x.id] = "Producer");
      (jsonTest.others[1].items).forEach(x => film2CC[x.id] = "Cinematography");
      (jsonTest.others[2].items).forEach(x => film2CC[x.id] = "Film Editing");
      (jsonTest.others[3].items).forEach(x => film2CC[x.id] = "Casting");
      (jsonTest.others[4].items).forEach(x => film2CC[x.id] = "Production Design");
      (jsonTest.others[5].items).forEach(x => film2CC[x.id] = "Art Direction");
      (jsonTest.others[6].items).forEach(x => film2CC[x.id] = "Costume Design");
      (jsonTest.others[7].items).forEach(x => film2CC[x.id] = "Makeup Department");
      (jsonTest.others[8].items).forEach(x => film2CC[x.id] = "Production Management");
      (jsonTest.others[9].items).forEach(x => film2CC[x.id] = "Second Unit Director or Assistant Director");
      (jsonTest.others[10].items).forEach(x => film2CC[x.id] = "Art Department");
      (jsonTest.others[11].items).forEach(x => film2CC[x.id] = "Sound Department");
      (jsonTest.others[12].items).forEach(x => film2CC[x.id] = "Special Effects");
      (jsonTest.others[13].items).forEach(x => film2CC[x.id] = "Visual Effects");
      (jsonTest.others[14].items).forEach(x => film2CC[x.id] = "Stunts");
      (jsonTest.others[15].items).forEach(x => film2CC[x.id] = "Camera and Electrical Department");
      (jsonTest.others[16].items).forEach(x => film2CC[x.id] = "Animation Department");
      (jsonTest.others[17].items).forEach(x => film2CC[x.id] = "Casting Department");
      (jsonTest.others[18].items).forEach(x => film2CC[x.id] = "Costume and Wardrobe Department");
      (jsonTest.others[19].items).forEach(x => film2CC[x.id] = "Editorial Department");
      (jsonTest.others[20].items).forEach(x => film2CC[x.id] = "Location Management");
      (jsonTest.others[21].items).forEach(x => film2CC[x.id] = "Music Department");
      (jsonTest.others[22].items).forEach(x => film2CC[x.id] = "Production Department");
      (jsonTest.others[23].items).forEach(x => film2CC[x.id] = "Script and Continuity Department");
      (jsonTest.others[24].items).forEach(x => film2CC[x.id] = "Transportation Department");
      (jsonTest.others[25].items).forEach(x => film2CC[x.id] = "Additional Crew");
      (jsonTest.others[26].items).forEach(x => film2CC[x.id] = "Thanks");
      //console.log(film2CC);
      firstdone = false;
      intersect();  
      sleep(4000);
    } else{
      console.log("First is done!")
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
      document.getElementById("filmfield").value=""; 
      document.getElementById("button").classList.toggle("fadeOut"); 
      document.getElementById("button").classList.toggle("fade"); 
      (jsonData.writers.items).forEach(x => film1CC[x.id]="Writer");
      (jsonTest.directors.items).forEach(x => film1CC[x.id]="Director");
      (jsonTest.actors).forEach(x => film1CC[x.id]="Actor");
      (jsonTest.others[0].items).forEach(x => film1CC[x.id] = "Producer");
      (jsonTest.others[1].items).forEach(x => film1CC[x.id] = "Cinematography");
      (jsonTest.others[2].items).forEach(x => film1CC[x.id] = "Film Editing");
      (jsonTest.others[3].items).forEach(x => film1CC[x.id] = "Casting");
      (jsonTest.others[4].items).forEach(x => film1CC[x.id] = "Production Design");
      (jsonTest.others[5].items).forEach(x => film1CC[x.id] = "Art Direction");
      (jsonTest.others[6].items).forEach(x => film1CC[x.id] = "Costume Design");
      (jsonTest.others[7].items).forEach(x => film1CC[x.id] = "Makeup Department");
      (jsonTest.others[8].items).forEach(x => film1CC[x.id] = "Production Management");
      (jsonTest.others[9].items).forEach(x => film1CC[x.id] = "Second Unit Director or Assistant Director");
      (jsonTest.others[10].items).forEach(x => film1CC[x.id] = "Art Department");
      (jsonTest.others[11].items).forEach(x => film1CC[x.id] = "Sound Department");
      (jsonTest.others[12].items).forEach(x => film1CC[x.id] = "Special Effects");
      (jsonTest.others[13].items).forEach(x => film1CC[x.id] = "Visual Effects");
      (jsonTest.others[14].items).forEach(x => film1CC[x.id] = "Stunts");
      (jsonTest.others[15].items).forEach(x => film1CC[x.id] = "Camera and Electrical Department");
      (jsonTest.others[16].items).forEach(x => film1CC[x.id] = "Animation Department");
      (jsonTest.others[17].items).forEach(x => film1CC[x.id] = "Casting Department");
      (jsonTest.others[18].items).forEach(x => film1CC[x.id] = "Costume and Wardrobe Department");
      (jsonTest.others[19].items).forEach(x => film1CC[x.id] = "Editorial Department");
      (jsonTest.others[20].items).forEach(x => film1CC[x.id] = "Location Management");
      (jsonTest.others[21].items).forEach(x => film1CC[x.id] = "Music Department");
      (jsonTest.others[22].items).forEach(x => film1CC[x.id] = "Production Department");
      (jsonTest.others[23].items).forEach(x => film1CC[x.id] = "Script and Continuity Department");
      (jsonTest.others[24].items).forEach(x => film1CC[x.id] = "Transportation Department");
      (jsonTest.others[25].items).forEach(x => film1CC[x.id] = "Additional Crew");
      (jsonTest.others[26].items).forEach(x => film1CC[x.id] = "Thanks");
      //console.log(film1CC);
    }
    
  })
  
}

function removeDups(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function intersect() {
  
  //window.location.href = "chart.html";
  film1CC;
  film2CC;

  Object.keys(film1CC).filter(x => Object.keys(film2CC).includes(x));
  console.log("In Common: " + filteredArray);
  //document.getElementById("cloud").appendChild(document.createElement('img')).src = "https://quickchart.io/wordcloud?text=" + y + z;
}




document.addEventListener('DOMContentLoaded', async () => mainEvent());