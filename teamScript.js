const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1743d88febmsh05b21d50c3a6e02p118d8djsnb38c4acc127e',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

async function teamToID(teamName) {
  // fetching team data with team name
  // grabbing the team ID from the response to use in other funtions'

  const url = `https://api-nba-v1.p.rapidapi.com/teams?search=${teamName}`;
  const data = await fetch(url, options);
  const json = await data.json();
  const res = json.response;
  let teamID = 0;
  let teamLogo = '';
  let fullTeamName = '';
  res.forEach((item, index) => {
    teamID = item.id;
    teamLogo = item.logo;
    fullTeamName = item.name;
  });
  console.log(` ${teamName}, ${teamID}`);
  return [teamID, teamLogo, fullTeamName];
}

async function getAnyTeam(teamName, year) {
  // api to get a team by its name and year
  // to see stats of the team from that year
  // Example Wizards 2022
  const data = await teamToID(teamName);
  const teamID = data[0];
  const teamLogo = data[1];
  const fullTeamName = data[2];

  const url = `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamID}&season=${year}`;
  const apiData = await fetch(url, options);
  const json = await apiData.json();
  const res = json.response;
  return [res, teamLogo, fullTeamName];
}

async function mainEvent() {
  const params = (new URL(document.location)).searchParams;
  const teamName = params.get('team-name');
  const year = params.get('year');
  console.log(teamName);
  console.log(year);

  const data = await getAnyTeam(teamName, year);
  const teamLogo = data[1];
  const teamResponse = data[0];
  const teamFullName = data[2];

  console.log(teamLogo);
  console.log(teamResponse);

  document.getElementById('team-header').textContent = `${teamFullName} ${year}`;
  document.getElementById('team-logo').src = teamLogo;

  teamResponse.forEach((item, index) => {
    document.getElementById('total-games').textContent = `Games played: ${item.games}`;
    document.getElementById('FG-percent').textContent = `Team FG percentage: ${item.fgp}`;
    document.getElementById('FT-percent').textContent = `Team Free Throw percentage: ${item.ftp}`;
    document.getElementById('Three-percent').textContent = `Team Three Point percentage: ${item.tpp}`;
    document.getElementById('total-points').textContent = `Total Points: ${item.points}`;
    document.getElementById('total-rebound').textContent = `Total Rebounds: ${item.totReb}`;
    document.getElementById('total-assists').textContent = `Total Assists: ${item.assists}`;
    document.getElementById('total-steal').textContent = `Total Steals: ${item.steals}`;
    document.getElementById('total-turn').textContent = `Total Turnovers: ${item.turnovers}`;
    document.getElementById('total-blocks').textContent = `Total Blocks: ${item.blocks}`;
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());