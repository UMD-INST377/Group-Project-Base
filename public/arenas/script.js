/* eslint-disable comma-dangle */
/* eslint-disable quotes */

const arenaIDIndex = [
  ["Heat", "American Airlines Arena", "1"],
  ["Mavericks", "American Airlines Center", "2"],
  ["Magic", "Amway Center", "3"],
  ["Spurs", "AT&T Center", "4"],
  ["Nuggets", "Ball Arena", "5"],
  ["Pacers", "Bankers Life Fieldhouse", "6"],
  ["Nets", "Barclays Center", "7"],
  ["Wizards", "Capital One Arena", "8"],
  ["Warriors", "Chase Center", "9"],
  ["Thunder", "Chesapeake Energy Arena", "10"],
  ["Grizzlies", "FedExForum", "11"],
  ["Bucks", "Fiserv Forum", "12"],
  ["Kings", "Golden 1 Center", "13"],
  ["Pistons", "Little Caesars Arena", "14"],
  ["Knicks", "Madison Square Garden", "15"],
  ["TrailBlazers", "Moda Center", "16"],
  ["Cavaliers", "Rocket Mortgage FieldHouse", "17"],
  ["Raptors", "Scotiabank Arena", "18"],
  ["Pelicans", "Smoothie King Center", "19"],
  ["Hornets", "Spectrum Center", "20"],
  ["Lakers", "Staples Center", "21"],
  ["Clippers", "Staples Center", "21"],
  ["Hawks", "State Farm Arena", "22"],
  ["Suns", "Talking Stick Resort Arena", "23"],
  ["Timberwolves", "Target Center", "24"],
  ["Celtics", "TD Garden", "25"],
  ["Rockets", "Toyota Center", "26"],
  ["Bulls", "United Center", "27"],
  ["Jazz", "Vivint Smart Home Arena", "28"],
  ["76ers", "Wells Fargo Center", "29"],
];

let allArenaData;

const arenaDiv = {
  name: document.querySelector("#name"),
  city: document.querySelector("#city"),
  state: document.querySelector("#state"),
  country: document.querySelector("#country"),
  arenaResultContainer: document.querySelector("#arenaResultContainer"),
};

// GET ARENAS
fetch("/api/basketball/arenas")
  .then((response) => response.json())
  .then((data) => {
    allArenaData = data;
  });

// arenaDiv.arenaResultContainer.style.display = "none";
function arenaClicked(arenaName) {
  // get arena id from arenaIDIndex
  const arenaId = arenaIDIndex.find((arena) => arena[0] === arenaName)[2];

  // now get arena information from allArenaData
  const arenaInfo = allArenaData[arenaId - 1];

  // now get the div to show it in
  arenaDiv.name.innerHTML = `<p>${arenaInfo.name}</p>`;
  arenaDiv.city.innerHTML = `<p>${arenaInfo.city}</p>`;
  arenaDiv.state.innerHTML = `<p>${arenaInfo.state}</p>`;
  arenaDiv.country.innerHTML = `<p>${arenaInfo.country}</p>`;
}

const arenaSelected = document.getElementById("nba-arenas");
arenaSelected.addEventListener("change", () => {
  arenaClicked(arenaSelected.value);
});
