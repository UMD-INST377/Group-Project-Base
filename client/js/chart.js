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

async function getData() {
  const response = await fetch(
    '/api/graphgenres'
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  length = data.data.length;
  console.log(length);

  NumOfDataShown = 10;
  GenreName = [];
  values = [];
  for (i = 0; i < NumOfDataShown; i += 1) {
    GenreName.push(data.data[i].genre);
    values.push(data.data[i]['song amount']);
  }

  const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: GenreName,
      datasets: [
        {
          label: 'Song Counts',
          backgroundColor: poolColors(NumOfDataShown),
          data: values
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 Genres'
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => getData());