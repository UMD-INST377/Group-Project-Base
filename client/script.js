
//This will get the data into console
fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

//this will populate the data from json to the data html page
fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeHolder = document.querySelector("#data-output");
    let out = "";

    let num = 1;
    for(let product of products) {
        out += `
        <tr> 
        <td class = "tableData">${num++}</td>
        <td class = "tableData">${product.payee_name}</td>
        <td class = "tableData">${product.agency}</td>
        <td class = "tableData">${product.zip_code}</td>
        <td class = "tableData">${product.amount}</td>
        <td class = "tableData">${product.payment_description}</td>
        </tr>
        `;
    }

    placeHolder.innerHTML = out;
})


// Code for the buttons //
async function fetchData() {
  const url = "https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json";
  const response = await fetch(url);

  const dataPoints = await response.json();
  console.log(dataPoints);
  return dataPoints;
};

// Code for the fetch payee buttons //
async function getPayee() {
  fetchData().then(dataPoints => {
    const payeeDat = dataPoints.map(function(index){
      return index.payee_name
    })
    const unique = [...new Set(dataPoints.map(item => item.payee_name))];
    const count = {};

    for (const element of payeeDat) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    myChart.config.data.labels = unique;
    myChart.config.data.datasets[0].label = "Total";
    myChart.config.data.datasets[0].data = Object.values(count);
    myChart.update();
  })

};

// Code for the fetch agency buttons //
async function getAgency() {
  fetchData().then(dataPoints => {
    const agencyDat = dataPoints.map(function(index){
      return index.agency
    })

    const unique = [...new Set(dataPoints.map(item => item.agency))];
    const count = {};

    for (const element of agencyDat) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    myChart.config.data.labels = unique;
    myChart.config.data.datasets[0].label = "Total";
    myChart.config.data.datasets[0].data = Object.values(count);
    myChart.update();
  })
};

// Code for the fetch zipcode buttons //
async function getZip() {
  fetchData().then(dataPoints => {
    const zipDat = dataPoints.map(function(index){
      return index.zip_code
    })
    const unique = [...new Set(dataPoints.map(item => item.zip_code))];
    const count = {};

    for (const element of zipDat) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    myChart.config.data.labels = unique;
    myChart.config.data.datasets[0].label = "Total";
    myChart.config.data.datasets[0].data = Object.values(count);
    myChart.update();
  })

};

//need to set this to get range instead of unique number
async function getAmount() {
  fetchData().then(dataPoints => {
    const amountDat = dataPoints.map(function(index){
      return index.amount
    })
    const unique = [...new Set(dataPoints.map(item => item.amount))];
    const count = {};

    // for (const element of amountDat) {
    //   if (count[element]) {
    //     count[element] += 1;
    //   } else {
    //     count[element] = 1;
    //   }
    // }

    function groupBy(array, keyFunc){

      var r = {};
      array.forEach(function(x) {
        var y = keyFunc(x);
        r[y] = (r[y] || []).concat(x);
      });

    }

    g = groupBy(amountDat, function(x) {return Math.floor(x/100)});

  

    console.log(g);
    // myChart.config.data.labels = unique;
    // myChart.config.data.datasets[0].label = "Total";
    // myChart.config.data.datasets[0].data = Object.values(count);
    // myChart.update();
  })

};


//Change chart type
async function BarChart(){
  myChart.config.type = "bar";
  myChart.update();
}

async function DoughnutChart(){
  myChart.config.type = "doughnut";
  myChart.update();
}
// Code for the buttons // top



function filterTable(array, filterItem){
  return array.filter((item) => {
    const lowerCaseName = item.agency.toLowerCase();
    const lowerCaseQuery = filterItem.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  })
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#data-output');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
}

async function mainEvent(){

  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#myInput')

  console.log("inside mainevent");

  if(response.data?.length > 0){

    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);

      const newList = filterTable(currentList, event.target.value);

      injectHTML(newList);


    });

    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();

      currentList = response;

      injectHTML(currentList);
    });

  }

  console.log(response);
}



const ctx = document.getElementById('chart');

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }
});



