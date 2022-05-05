function dynamicColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b}, 0.5)`;
}
function poolColors(a) {
  const pool = [];
  for (i = 0; i < a; i++) {
    pool.push(dynamicColors());
  }
  return pool;
}

function genresGraph(xAxis, yAxis) {
  const NumOfDataShown = 10;
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: xAxis,
      datasets: [
        {
          label: 'Song Counts',
          backgroundColor: poolColors(NumOfDataShown),
          data: yAxis
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Genres'
      },
      scaleShowValues: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart; // return chart object
}
function artistsGraph(xAxis, yAxis) {
  const NumOfDataShown = 10;
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: xAxis,
      datasets: [
        {
          label: 'Album Counts',
          backgroundColor: poolColors(NumOfDataShown),
          data: yAxis
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Artists With The Most Albums'
      },
      scaleShowValues: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart; // return chart object
}
function songsGraph(xAxis, yAxis) {
  const NumOfDataShown = 10;
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: xAxis,
      datasets: [
        {
          label: 'Song Counts',
          backgroundColor: poolColors(NumOfDataShown),
          data: yAxis
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Longest Songs'
      },
      scaleShowValues: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart; // return chart object
}

function albumGraph(xAxis, yAxis) {
  const NumOfDataShown = 10;
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: xAxis,
      datasets: [
        {
          label: 'number of songs in album',
          backgroundColor: poolColors(NumOfDataShown),
          data: yAxis
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Albums with The Most Songs'
      },
      scaleShowValues: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart; // return chart object
}




async function getData() {
  const genreResponse = await fetch('/api/graphgenres');
  const artistResponse = await fetch('/api/artistGraph');
  const albumresponse = await fetch('/api/albumGraph');
  const songResponse = await fetch('/api/songGraph');
  const dropdown = document.getElementById('graphDropdown');
  const NumOfDataShown = 10;
  let GenreName = [];
  let values = [];

  const genresData = await genreResponse.json();
  const artistsData = await artistResponse.json();
  const songsData = await songResponse.json();
  const albumData = await albumresponse.json();

  for (i = 0; i < NumOfDataShown; i += 1) {
    GenreName.push(genresData.data[i].genre);
    values.push(genresData.data[i]['song amount']);
  }
  chart = genresGraph(GenreName, values);

  dropdown.addEventListener('change', async (event) => {
    if (event.target.value === 'artists') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(artistsData.data[i].name);
        values.push(artistsData.data[i].album_count);
      }
      console.log(event.target.value, GenreName, values);
      chart.destroy();
      chart = artistsGraph(GenreName, values);
    }
    if (event.target.value === 'albums') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(albumData.data[i].name);
        values.push(albumData.data[i]['numnber of songs']);
      }
      console.log(event.target.value, GenreName, values);
      chart.destroy();
      chart = albumGraph(GenreName, values);
    }
    if (event.target.value === 'songs') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(songsData.data[i]['song name']);
        values.push(songsData.data[i].duration);
      }
      console.log(event.target.value, GenreName, values);
      chart.destroy();
      chart = songsGraph(GenreName, values);
    }
    if (event.target.value === 'default') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(genresData.data[i].genre);
        values.push(genresData.data[i]['song amount']);
      }
      console.log(event.target.value, GenreName, values);
      chart.destroy();
      chart = genresGraph(GenreName, values);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => getData());
