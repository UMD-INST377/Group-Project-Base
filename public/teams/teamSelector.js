const teamImages = document.querySelectorAll(".carousel_item1");
const teamIDIndex = [
    ['Hawks', 'Hawks', '1610612737'],
    ['Celtics', 'Celtics', '1610612738'],
    ['Cavaliers', 'Cavaliers', '1610612739'],
    ['Pelicans', 'Pelicans', '1610612740'],
    ['Bulls', 'Bulls', '1610612741'],
    ['Mavericks', 'Mavericks', '1610612742'],
    ['Nuggets', 'Nuggets', '1610612743'],
    ['Warriors', 'Warriors', '1610612744'],
    ['Rockets', 'Rockets', '1610612745'],
    ['Clippers', 'Clippers', '1610612746'],
    ['Lakers', 'Lakers', '1610612747'],
    ['Heat', 'Heat', '1610612748'],
    ['Bucks', 'Bucks', '1610612749'],
    ['Timberwolves', 'Timberwolves', '1610612750'],
    ['Nets', 'Nets', '1610612751'],
    ['Knicks', 'Knicks', '1610612752'],
    ['Magic', 'Magic', '1610612753'],
    ['Pacers', 'Pacers', '1610612754'],
    ['76ers', '76ers', '1610612755'],
    ['Suns', 'Suns', '1610612756'],
    ['Trail Blazers', 'Trail Blazers', '1610612757'],
    ['Kings', 'Kings', '1610612758'],
    ['Spurs', 'Spurs', '1610612759'],
    ['Thunder', 'Thunder', '1610612760'],
    ['Raptors', 'Raptors', '1610612761'],
    ['Jazz', 'Jazz', '1610612762'],
    ['Grizzlies', 'Grizzlies', '1610612763'],
    ['Wizards', 'Wizards', '1610612764'],
    ['Pistons', 'Pistons', '1610612765'],
    ['Hornets', 'Hornets', '1610612766']
];
let teamSelected = ['','','']; //Alt, Name, ID
let allTeamData;
let resultDIV = document.querySelector('#teamResults');

fetch('/api/basketball/teams')
  .then(response => response.json())
  .then(data => {
    allTeamData = data;
    console.log(data);
    console.log('Team data received!');
    });

for (let i = 0; i < teamImages.length; i++) {
    teamImages[i].addEventListener("click", function() {
        console.log('CLICKED TEAM');
        teamClicked(teamImages[i])
    });
}

function teamClicked(selectedTeam){
    let teamName = selectedTeam['childNodes'][1]['alt'];
    console.log('TEAM CLICKED: ' + teamName);
    teamSelected[0] = teamName;
    for(let i = 0; i < teamIDIndex.length; i++){
        if(teamIDIndex[i][0] == teamName){
            teamSelected[1] = teamIDIndex[i][1];
            teamSelected[2] = teamIDIndex[i][2];
        }
    }
    console.log('TEAM ALT NAME: ' + teamSelected[0]);
    console.log('TEAM Name: ' + teamSelected[1]);
    console.log('TEAM ID: ' + teamSelected[2]);
    displayTeamData(teamSelected[2]);
}

function displayTeamData(teamID){
    let selectedTeamData;
    for(let i = 0; i < allTeamData.length; i++){
        if(allTeamData[i]['team_id'] == teamSelected[2]){
            selectedTeamData = allTeamData[i];
        }
    }
    console.log(selectedTeamData);
    resultDIV.innerHTML = '';
    const addedHTML = selectedTeamData.map((team) => `
    <li>
      ${team.team_name}, <br> 
      ${team.conference} <br> 
      <i>${team.division} <br> 
      ${team.coach}</i>
    </li>
  `);
    resultDIV.append(selectedTeamData['team_name']);
    resultDIV.append(selectedTeamData['coach']);
    resultDIV.append(selectedTeamData['conference']);
    resultDIV.append(selectedTeamData['division']);
    console.log(resultDIV);
}




//Debugging help code
//console.log(teamIDIndex);
//console.log(teamImages[1]['childNodes'][1]['alt']);