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
  
async function mainEvent(
    string = "Hello World"
    ) 
console.log("Hello world!"); 

