const arenaImages = document.querySelectorAll(".arena-image");
const arenaIDIndex = [
  ['Heat', 'American Airlines Arena', '1'],
  ['Mavericks', 'American Airlines Center', '2'],
  ['Magic', 'Amway Center', '3'],
  ['Spurs', 'AT&T Center', '4'],
  ['Nuggets', 'Ball Arena', '5'],
  ['Pacers', 'Bankers Life Fieldhouse', '6'],
  ['Nets', 'Barclays Center', '7'],
  ['Wizards', 'Capital One Arena', '8'],
  ['Warriors', 'Chase Center', '9'],
  ['Thunder', 'Chesapeake Energy Arena', '10'],
  ['Grizzlies', 'FedExForum', '11'],
  ['Bucks', 'Fiserv Forum', '12'],
  ['Kings', 'Golden 1 Center', '13'],
  ['Pistons', 'Little Caesars Arena', '14'],
  ['Knicks', 'Madison Square Garden', '15'],
  ['TrailBlazers', 'Moda Center', '16'],
  ['Cavaliers', 'Rocket Mortgage FieldHouse', '17'],
  ['Raptors', 'Scotiabank Arena', '18'],
  ['Pelicans', 'Smoothie King Center', '19'],
  ['Hornets', 'Spectrum Center', '20'],
  ['Lakers', 'Staples Center', '21'],
  ['Clippers', 'Staples Center', '21'],
  ['Hawks', 'State Farm Arena', '22'],
  ['Suns', 'Talking Stick Resort Arena', '23'],
  ['Timberwolves', 'Target Center', '24'],
  ['Celtics', 'TD Garden', '25'],
  ['Rockets', 'Toyota Center', '26'],
  ['Bulls', 'United Center', '27'],
  ['Jazz', 'Vivint Smart Home Arena', '28'],
  ['76ers', 'Wells Fargo Center', '29']
];
let arenaSelected = ['','','']; //Alt, Name, ID
let allArenaData;
let resultDIVOLD = document.querySelector('#arenaResultsTEST');
let arenaDiv = {
  arenaName: document.querySelector('#arenaName'),
  city: document.querySelector('#arenaCity'),
  state: document.querySelector('#arenaState'),
  country: document.querySelector('#arenaCountry'),
  arenaResultContainer: document.querySelector('#arenaResultContainer')
};
let selectedArenaData;

//GET ARENAS
fetch('/api/basketball/arenas')
  .then(response => response.json())
  .then(data => {
    allArenaData = data;
    console.log(data);
    console.log('Arena data recieved');
  });

arenaDiv.arenaResultContainer.style.display = 'none';

for(let i = 0; i < arenaImages.length; i++){
    var a = document.getElementById('nba-arenas');
  a.addEventListener('click', function() {
    console.log("CLICKED ARENA");
    arenaClicked(arenaImages[i]);
    arenaImages[i].setAttribute('class','arena-image selectedImage');
  });
}

function arenaClicked(selectedArena){
    let arenaName = selectedArena['childNodes'][1]['alt'];
    console.log('ARENA CLICKED: ' + arenaName);
    arenaSelected[0] = arenaName;
    for(let i = 0; i < arenaIDIndex.length; i++){
        if(arenaIDIndex[i][0] == arenaName){
            arenaSelected[1] = arenaIDIndex[i][1];
            arenaSelected[2] = arenaIDIndex[i][2];
        }
    }
    console.log('ARENA ALT NAME: ' + teamSelected[0]);
    console.log('ARENA NAME: ' + teamSelected[1]);
    console.log('ARENA ID: ' + teamSelected[2]);
    // displayArenaData(arenaSelected[2]); 
}

function displayArenaData(arenaID){
    for(let i = 0; i < allArenaData.length; i++){
        if(allArenaData[i]['arena_id'] == arenaSelected[2]){
            selectedArenaData = allArenaData[i];
        }
    }

    console.log('SELECTED ARENA DATA');
    console.log(selectedArenaData);
    //Arena Data
    arenaDiv.arenaName.innerHTML = selectedArenaData['name'];
    arenaDiv.city.innerHTML = "<b>CITY: </b><br>"+selectedArenaData['city'];
    arenaDiv.state.innerHTML = "<b>STATE: </b><br>"+selectedArenaData['state'];
    arenaDiv.country.innerHTML = "<b>COUNTRY: </b><br>"+selectedArenaData['country'];

    arenaDiv.arenaResultContainer.style.display = 'flex';

}




