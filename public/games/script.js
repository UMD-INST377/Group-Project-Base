const teamIDIndex = [
  ["Hawks", "Hawks", "1610612737"],
  ["Celtics", "Celtics", "1610612738"],
  ["Cavaliers", "Cavaliers", "1610612739"],
  ["Pelicans", "Pelicans", "1610612740"],
  ["Bulls", "Bulls", "1610612741"],
  ["Mavericks", "Mavericks", "1610612742"],
  ["Nuggets", "Nuggets", "1610612743"],
  ["Warriors", "Warriors", "1610612744"],
  ["Rockets", "Rockets", "1610612745"],
  ["Clippers", "Clippers", "1610612746"],
  ["Lakers", "Lakers", "1610612747"],
  ["Heat", "Heat", "1610612748"],
  ["Bucks", "Bucks", "1610612749"],
  ["Timberwolves", "Timberwolves", "1610612750"],
  ["Nets", "Nets", "1610612751"],
  ["Knicks", "Knicks", "1610612752"],
  ["Magic", "Magic", "1610612753"],
  ["Pacers", "Pacers", "1610612754"],
  ["76ers", "76ers", "1610612755"],
  ["Suns", "Suns", "1610612756"],
  ["Trail Blazers", "Trail Blazers", "1610612757"],
  ["Kings", "Kings", "1610612758"],
  ["Spurs", "Spurs", "1610612759"],
  ["Thunder", "Thunder", "1610612760"],
  ["Raptors", "Raptors", "1610612761"],
  ["Jazz", "Jazz", "1610612762"],
  ["Grizzlies", "Grizzlies", "1610612763"],
  ["Wizards", "Wizards", "1610612764"],
  ["Pistons", "Pistons", "1610612765"],
  ["Hornets", "Hornets", "1610612766"],
];

// fetch("/api/basketball/teams")
//   .then((response) => response.json())
//   .then((data) => {
//     allTeamData = data;
//     console.log(data);
//     console.log("Team data received!");
//   });

// fetch("/api/basketball/games")
//   .then((response) => response.json())
//   .then((data) => {
//     allTeamData = data;
//     console.log(data);
//     console.log("Team data received!");
//   });

// get the two different submit button
const submitButtonTwoTeams = document.querySelector("#submitTwoTeams");
const submitButtonOneTeam = document.querySelector("#submitOneTeam");

// get the two team comparison selects
const team1OfTwoSelect = document.querySelector("#team1OfTwoSelect");
const team2OfTwoSelect = document.querySelector("#team2OfTwoSelect");
const twoTeamsYearSelect = document.querySelector("#twoTeamsYearSelect");

// get the one team by year selects
const teamSelect = document.querySelector("#teamSelect");
const yearSelect = document.querySelector("#yearSelect");

// get the table to show rows
tableBody = document.querySelector("#gamesRows");

// GET Two Team Data
const fetchTwoTeamsData = async () => {
  // get team 1 id
  const team1Id = teamIDIndex.find(
    (team) => team[0] === team1OfTwoSelect.value
  )[2];
  // get team 2 id
  const team2Id = teamIDIndex.find(
    (team) => team[0] === team2OfTwoSelect.value
  )[2];

  // get the year
  const year = twoTeamsYearSelect.value;

  const res = await fetch(
    `/api/basketball/games/${team1Id}/${team2Id}/${year}`
  );
  const games = await res.json();
  return games;
};

const fetchOneTeamData = async () => {
  // get team id
  const teamId = teamIDIndex.find((team) => team[0] === teamSelect.value)[2];

  // get the year

  const year = yearSelect.value;
  const res = await fetch(`/api/basketball/games/${teamId}/${year}`);
  const games = await res.json();
  return games;
};

const showGames = async (games) => {
  games.map((game) => {
    const gameNode = document.createElement("tr");
    gameNode.innerHTML = `<td>${game.date_played}</td><td>${game.home_team_name}</td><td>${game.home_team_score}</td><td>${game.away_team_name}</td><td>${game.away_team_score}</td>`;
    tableBody.appendChild(gameNode);
  });
};

submitButtonTwoTeams.addEventListener("click", async () => {
  tableBody.innerHTML = "";
  const games = await fetchTwoTeamsData();
  showGames(games);
});

submitButtonOneTeam.addEventListener("click", async () => {
  tableBody.innerHTML = "";
  const games = await fetchOneTeamData();
  showGames(games);
});

// // arenaDiv.arenaResultContainer.style.display = "none";
// function arenaClicked(arenaName) {
//   // get arena id from arenaIDIndex
//   const arenaId = arenaIDIndex.find((arena) => arena[0] === arenaName)[2];

//   // now get arena information from allArenaData
//   const arenaInfo = allArenaData[arenaId - 1];

//   // now get the div to show it in
//   arenaDiv.name.innerHTML = `<p>${arenaInfo.name}</p>`;
//   arenaDiv.city.innerHTML = `<p>${arenaInfo.city}</p>`;
//   arenaDiv.state.innerHTML = `<p>${arenaInfo.state}</p>`;
//   arenaDiv.country.innerHTML = `<p>${arenaInfo.country}</p>`;
// }

// const arenaSelected = document.getElementById("nba-arenas");
// arenaSelected.addEventListener("change", () => {
//   arenaClicked(arenaSelected.value);
// });
