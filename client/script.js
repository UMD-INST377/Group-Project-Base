function initMap() {
    console.log('initMap');
    const map = L.map('map').setView([38.9897, -76.9378], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }

function initChart(chart) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 30, 45]
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return new Chart(
    chart,
    config
  );
}
/*   const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return ctx;
} */

async function mainEvent() {

    const pageMap = initMap();
    
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#get-resto'); // get a reference to your submit button
    /*const loadAnimation = document.querySelector('.lds-ellipsis');*/
    const restoName = document.querySelector('#resto');
    const chartTarget = document.querySelector('#myChart');
    
    const results = await fetch('/api/CrimeIncidentsPG');
    const arrayFromJson = await results.json();

    initChart(chartTarget);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());