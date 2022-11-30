function initChart(targetElement, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Restaurants By Category',
      backgroundColor: 'rgb(255, 60, 255)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: '3',
      data: info
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  return new Chart(
    targetElement,
    config
  );
}

async function getData() {
  const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();
  const reply = json.filter((item));
  console.log(reply);
  return reply;
}

// async function mainEvent() {
//   const form = document.querySelector('.main_form');
//   const currentlist = [];

//   form.addEventListener('submit', (submitEvent) => {
//     const cryptoData = getData();
//     cryptoData.append(currentlist);
//     console.log(currentlist);
//   });

//   const chartData = await getData();
//   const shapedData = shapeDataForLineChart(chartData);
//   console.log(shapedData);
//   const myChart = initChart(chartTarget, shapedData);
// }

async function mainEvent() {
  const categoriesButton = document.getElementById("categories_button");
  categoriesButton.addEventListener("submit", () => {
    console.log("Print some stuff");
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());