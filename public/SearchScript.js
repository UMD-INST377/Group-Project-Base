// Fetch TeamInfo // 
const teamendpoint = '/api/teamCustom';
const teamlist = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => teamlist.push(...data));

function findMatches(wordToMatch, teamlist) {
    return teamlist.filter((team) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return team.team_name.match(regex);
    });
  }



function displayMatches() {
    const matchArray = findMatches(this.value, teamlist);
    const html = matchArray.map((team) => {
      const regex = new RegExp(this.value, 'gi');
      const TeamName = team.team_name.replace(regex, `<span class="hl">${this.value}</span>`);
      const teamlocation = team.team_location;
      const teamfounded = team.year_founded;
      const playeramount = team.player_amount;
      const ownername = team.owner;
      const headcoach = team.head_coach;
      const genmanager = team.general_manager;
      const headphysician = team.head_physician;