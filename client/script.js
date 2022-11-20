function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#restaurant_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
}

function processCrimes(list, sector) {
  return list.filter((item) => item.pgpd_sector === (sector));
}
function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Crimes by Category',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  return new Chart(chart, config);
}
function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);
  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });
  chart.update();
}

function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.clearance_code_inc_type]) {
      collection[item.clearance_code_inc_type] = [item];
    } else {
      collection[item.clearance_code_inc_type].push(item);
    }
    return collection;
  }, {});
}
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.pgpd_sector));
  console.log(reply);
  return reply;
}
async function mainEvent() {
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  // const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  //  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to our loading animation
  const chartTarget = document.querySelector('#myChart');
  // submit.style.display = 'none'; // let your submit button disappear

  const chartData = await getData();

  const shapedData = shapeDataForLineChart(chartData);
  const myChart = initChart(chartTarget, shapedData);

  // This IF statement ensures we can't do anything if we don't have information yet
  // if (chartData?.length > 0) { // the question mark in this means "if this is set at all"
  // submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

  // Lets hide the load button now that we have some data to manipulate
  // loadAnimation.classList.remove('lds-ellipsis');
  // loadAnimation.classList.add('lds-ellipsis_hidden'); // Lets turn the submit button back on by setting its display as a block when we have data

  form.addEventListener('input', (event) => {
    console.log(event.target.value);
    sector = event.target.value;
    const filteredList = processCrimes(chartData, event.target.value);
    console.log(filteredList);
    //injectHTML(filteredList);
    const localData = shapeDataForLineChart(filteredList);
    changeChart(myChart, localData);
  });
}
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests