

const film1 = "Nightclawer";
const film2 = "Zodiac";
const imdbkey = "x/";
const firstCall = "https://imdb-api.com/en/API/Search/"+ imdbkey+ film1;
const secondCall = "https://imdb-api.com/en/API/Search/"+ imdbkey + film2;





let cclist1;
let cclist2;

let firstdone = false;

const output = document.getElementById("data").innerHTML;

    
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

getFilmTitle(secondCall)
    .then(function(jsonData){
    console.log(jsonData);
    let secondID= JSON.stringify(jsonData.results[0]).substring(7,16);
    console.log("ID: " + secondID);
    cclist2 = cast(secondID);
    intersect();
  })



function cast(filmID){
  let cast1 = "https://imdb-api.com/en/API/FullCast/" + imdbkey + filmID;

  console.log("Cast: " + cast1);
  getFilmTitle(cast1)
  .then(function(jsonData){
    let regex = /name":"([a-zA-z ]* [a-zA-z ]*)/g;
    let response = JSON.stringify(jsonData);
    let matches = response.match(regex);
    //console.log("Matches: " + matches);
    if(firstdone == false){
      document.getElementById("data").innerHTML = matches;
    } else{
      document.getElementById("data2").innerHTML = matches;
    }
    firstdone = true;
    return matches;
    
  })
  
  

}



async function intersect() {

  console.log("Test1: " + cclist1);
  console.log(cclist2);
  const filteredArray = cclist1.filter(value => cclist2.includes(value));
  console.log("In Common: " + filteredArray);
}
//document.getElementById("demo").innerHTML = n;