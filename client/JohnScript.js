
//this will populate the data from json to the data html page

async function createTable(json) {
  
    let placeHolder = document.querySelector("#data-output");
    let out = "";
  
    let num = 1;
    for (let x of json) {
      out += `
        <tr> 
        <td class = "tableData">${num++}</td>
        <td class = "tableData">${x.payee_name}</td>
        <td class = "tableData">${x.agency}</td>
        <td class = "tableData">${x.zip_code}</td>
        <td class = "tableData">${x.amount}</td>
        <td class = "tableData">${x.payment_description}</td>
        </tr>
        `;
    }
    placeHolder.innerHTML = out;
  }
  
  // Code for the buttons //
  async function fetchData() {
    const url = "https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json";
    const response = await fetch(url);
  
    const dataPoints = await response.json();
    return dataPoints;
  }
  
  // Code for the fetch payee buttons //
  async function getPayee() {
    fetchData().then((dataPoints) => {
      const payeeDat = dataPoints.map(function (index) {
        return index.payee_name;
      });
      const unique = [...new Set(dataPoints.map((item) => item.payee_name))];
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
    });
  }
  
  // Code for the fetch agency buttons //
  async function getAgency() {
    fetchData().then((dataPoints) => {
      const agencyDat = dataPoints.map(function (index) {
        return index.agency;
      });
  
      const unique = [...new Set(dataPoints.map((item) => item.agency))];
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
    });
  }
  
  // Code for the fetch zipcode buttons //
  async function getZip() {
    fetchData().then((dataPoints) => {
      const zipDat = dataPoints.map(function (index) {
        return index.zip_code;
      });
      const unique = [...new Set(dataPoints.map((item) => item.zip_code))];
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
    });
  }
  
  //need to set this to get range instead of unique number
  async function getAmount() {
    fetchData().then((dataPoints) => {
      const amountDat = dataPoints.map(function (index) {
        return index.amount;
      });
      const count = {};
  
      const range = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
      console.log(range);
  
      for (const x of amountDat) {
        for (const y of range) {
          if (x < y && x > y - 100) {
            if (count[y]) {
              count[y] += 1;
            } else {
              count[y] = 1;
            }
          }
        }
      }
  
      const labels = [
        "0-99",
        "100-199",
        "200-299",
        "300-399",
        "400-499",
        "500-599",
        "600-699",
        "700-799",
        "800-899",
        "900-999",
        "1000+",
      ];
  
      myChart.config.data.labels = labels;
      myChart.config.data.datasets[0].label = "Total";
      myChart.config.data.datasets[0].data = Object.values(count);
      myChart.update();
    });
  }
  
  //Change chart type
  async function BarChart() {
    myChart.config.type = "bar";
    myChart.update();
  }
  
  async function DoughnutChart() {
    myChart.config.type = "doughnut";
    myChart.update();
  }
  // Code for the buttons // top
  
  function filterTable(array, filterItem) {
    return array.filter((item) => {
      const lowerCaseName = JSON.stringify(item).toLowerCase();
      const lowerCaseQuery = filterItem.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
  }
  
  function injectHTML(list) {
    console.log("fired injectHTML");
    const target = document.querySelector("#data-output");
    target.innerHTML = "";
  
    const listEl = document.createElement("ol");
    target.appendChild(listEl);
  
    list.forEach((item) => {
      const el = document.createElement("li");
      el.innerText = item.name;
      listEl.appendChild(el);
    });
  }
  
  async function mainEvent() {
  
    const form = document.querySelector(".main_form");
  
    const response = await fetchData();
  
    createTable(response);
  
    if (response.length > 0) {
  
      form.addEventListener("input", (event) => {
  
        const myFILData = filterTable(response, event.target.value);
  
        createTable(myFILData);
        console.log(myFILData);
      });
    }
  }
  
  const ctx = document.getElementById("chart");
  
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Black",
        "Grey",
        "Pink",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
  });
  
  document.addEventListener("DOMContentLoaded", async () => mainEvent()); // the async keyword means we can make API requests