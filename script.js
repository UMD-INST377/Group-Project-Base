/* eslint-disable no-new */
/* eslint-disable no-console */
const xLabel = [];
const rateData = [];

async function getData() {
  // let tempUSDRate = "";
  // const tempEURRate = "";
  // const tempGBPRate = "";

  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await response.json();
  console.log(data);
  xLabel.push(data.bpi.USD.code);
  xLabel.push(data.bpi.EUR.code);
  xLabel.push(data.bpi.GBP.code);
  console.log(xLabel);

  tempUSDRate = data.bpi.USD.rate;
  tempUSDRate = tempUSDRate.replaceAll(',', '');
  tempUSDRate = parseFloat(tempUSDRate);

  tempEURRate = data.bpi.EUR.rate;
  tempEURRate = tempEURRate.replaceAll(',', '');
  tempEURRate = parseFloat(tempEURRate);

  tempGBPRate = data.bpi.GBP.rate;
  tempGBPRate = tempGBPRate.replaceAll(',', '');
  tempGBPRate = parseFloat(tempGBPRate);

  rateData.push(tempUSDRate);
  rateData.push(tempEURRate);
  rateData.push(tempGBPRate);
  console.log(rateData);
}

async function chartIt() {
  await getData();
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: xLabel,
    datasets: [{
      label: 'Country Rate of BTC',
      data: rateData,
      borderWidth: 10
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
}

chartIt();

// document.addEventListener('DOMContentLoaded', async () => mainEvent());