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

function runGraph(counts, days) {
  const NumOfDataShown = 10;
  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: counts,
      datasets: [
        {
          label: 'Song Counts',
          backgroundColor: poolColors(NumOfDataShown),
          data: days
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Genres'
      },
      ticks: {
        autoSkip: false
      }
    }
  });
  return chart; // return chart object
}

function newGraph(label, values) {
  chart.data.labels = label;
  chart.data.datasets.data = values;
  console.log(label, values);
  chart.update();
}
async function getData() {
  const genreResponse = await fetch('/api/graphgenres');
  const artistResponse = await fetch('/api/artistGraph');
  const albumresponse = 'a';
  const dropdown = document.getElementById('graphDropdown');
  const NumOfDataShown = 10;
  let GenreName = [];
  let values = [];

  const genresData = await genreResponse.json();
  const artistsData = await artistResponse.json();

  for (i = 0; i < NumOfDataShown; i += 1) {
    GenreName.push(genresData.data[i].genre);
    values.push(genresData.data[i]['song amount']);
  }
  chart = runGraph(GenreName, values);
  GenreName = [];
  values = [];

  dropdown.addEventListener('change', async (event) => {
    if (event.target.value === 'artists') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(artistsData.data[i].name);
        values.push(artistsData.data[i].album_count);
      }
      chart = newGraph(GenreName, values);
    }
    if (event.target.value === 'albums') {
      GenreName = [];
      values = [];
      for (i = 0; i < NumOfDataShown; i += 1) {
        GenreName.push(genresData.data[i].genre);
        values.push(genresData.data[i]['song amount']);
      }
      newGraph(GenreName, values);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => getData());
