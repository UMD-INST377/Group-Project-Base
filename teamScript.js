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
  res.forEach((item, index) => {
    teamID = item.id;
    teamLogo = item.logo;
  });
  console.log(` ${teamName}, ${teamID}`);
  return [teamID, teamLogo];
}

async function getAnyTeam(teamName, year) {
  // api to get a team by its name and year
  // to see stats of the team from that year
  // Example Wizards 2022
  const data = await teamToID(teamName);
  const teamID = data[0];
  const teamLogo = data[1];

  const url = `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamID}&season=${year}`;
  const apiData = await fetch(url, options);
  const json = await apiData.json();
  const res = json.response;
  return [res, teamLogo];
}

async function mainEvent() {
  const params = (new URL(document.location)).searchParams;
  const teamName = params.get('team-name');
  const year = params.get('year');
  console.log(teamName);
  console.log(year);

//   const data = await getAnyTeam(teamName, year);
  const teamLogo = data[1]
  const teamResponse = data[0]

  console.log(teamLogo);
  console.log(teamResponse);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());