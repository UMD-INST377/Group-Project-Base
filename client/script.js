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

const labels = [
  'weight',
];

function innitChart(chart) {
  const data = {
    labels: labels,
    datasets: [{
      label: 'Player Name',
      backgroundColor: 'rgb(255, 99, 131)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0],
    }]
  };
  
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  return new Chart(
    chart,
    config
  );
}

const chartTarget = document.querySelector('#myChart');
theChart = innitChart(chartTarget);

//data.response[0].firstname + " " + data.response[0].lastname

async function getPlayer() {
  try {
    const name = document.querySelector('#namePlayer').value;
    const playerName = lowerCaseName(name);
    const newData = await fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${playerName}`, options);
    const data = await newData.json()
    console.log(data);
    const weight = data.response[0].weight.pounds
    const playerID = data.response[0].id;
    const fullName = data.response[0].firstname + " " + data.response[0].lastname;
    theChart.data.datasets[0].data[0] = weight;
    theChart.data.datasets[0].label = fullName;
    theChart.update();
    



    document.querySelector('.playerBox').innerHTML = `
    <div>
      </div>
      <div class="playerInfo">
        <h1>${capitalizeFirstLetter(
    `${data.response[0].firstname} ${data.response[0].lastname}`
  )}</h3>
        <p>ID: ${(ind = data.response[0].id)}</p>
        ${ind}
      </div>`;
    fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${playerID}&season=2021`, options)
      .then((res) => res.json())
      .then((info) => {
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
    labelsWeight = weight
    console.log(weight)
  
  } catch (err) {
    console.log('Data Request Failed', err);
  }
}


