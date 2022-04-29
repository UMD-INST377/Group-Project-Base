import Chart from 'chart.js/auto';
async function actorchart(){
    const Chart = require('chart.js');
    const myChart = new Chart(ctx, {...});
    const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart'
            }
          }
        },
      };
}
async function mainEvent() {
  console.log('mainEvent()');
  actorchart
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
