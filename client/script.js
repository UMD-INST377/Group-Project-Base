

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5632c77d22msh70c6d62094e11eep1c2c19jsn4061b7fbefc3',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

document.querySelector('#search').addEventListener('click', getPlayer);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

async function getPlayer(e) {
  try {
    const name = document.querySelector('#namePlayer').value;
    const playerName = lowerCaseName(name);
    const newData = await fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${playerName}`, options)
    const data = await newData.json();
    const playerID = data.response[0].id;
    document.querySelector(".playerBox").innerHTML = `
    <div>
      </div>
      <div class="playerInfo">
        <h1>${capitalizeFirstLetter(
          data.response[0].firstname + " " + data.response[0].lastname
        )}</h3>
        <p>ID: ${(ind = data.response[0].id)}</p>
        ${ind}
      </div>`;
      fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${playerID}&season=2021`, options)
        .then((res) => res.json())
        .then((info) => {
          console.log(info);
          document.querySelector('.nbaBox').innerHTML = `
            <div class = "nbaInfo">
                <h1>${info.response[0].team.name}</h3>
            </div>
            <div>
            <img
            src ="${info.response[0].team.logo}"
            alt = "${data.name}"
            />
            </div>
            `;
      });
  } catch (err) {
    console.log('Data Request Failed', err);
  }
  e.preventDefault();
}