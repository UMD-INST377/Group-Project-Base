let filmCount = 0;
let filmCC = [];

let firstdone = false;



// Need to clear form after submit
async function mainEvent() {
  
  const titleform = document.getElementById("titleForm");
  const apiCall = "https://imdb-api.com/en/API/Search/k_ljv5h5vz/";
  let currentFilmID = "";
  
  // Gets the names of the films from the form
  titleform.addEventListener("submit", async (x) => {
    x.preventDefault();
    console.log("Film added");
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
      getPoster("https://imdb-api.com/en/API/Posters/k_ljv5h5vz/" + currentFilmID)
      .then(function(jsonData){
        const poster = JSON.stringify(jsonData.backdrops[0].link);
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



    // Only calls intersect function if more than 2 films were added
    filmCC.push(matches);
    if(firstdone){
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

  const a = filmCC[0];
  const b = filmCC[1];

  const filteredArray = removeDups(a.filter(value => b.includes(value)));
  console.log("In Common: " + filteredArray);
  //document.getElementById("cloud").appendChild(document.createElement('img')).src = "https://quickchart.io/wordcloud?text=" + y + z;
}

function initChart(chart, shapedObj){
  const ctx = chart;
  
  const label = Object.keys(shapedObj);
  const info = Object.keys(shapedObj).map((item) => shapedObj[item].length);

  const cinst = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: label,
      datasets: [{
        label: 'Film Role',
        data: info,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  return cinst;
}

function changeChart(chart, dataObj){
  const labels = Object.keys(dataObj);
  const info = Object.keys(dataObj).map((item) => dataObj[item].length);

  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;})
  chart.update();
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());