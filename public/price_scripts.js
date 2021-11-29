function BuildChart(labels, values, chartTitle) {
  const data = {
    labels: labels,
    datasets: [{
      label: chartTitle, // Name the series
      data: values,
      backgroundColor: ['rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Listed Price'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'price Id'
          }
        }]
      }
    }
  });

  return myChart;
}

// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const json = JSON.parse(this.response)[0];
    console.log(json)

    // Map json labels  back to values array
    const labels = json.map((e) => e.price_id);
    console.log(labels)

    // Map json values back to values array
    const values = json.map((e) => (e.listed_price) 
    );

    BuildChart(labels, values, 'Real Time Price');
  }
};

// const data= await fetch('http://localhost:3000/api/price');
xhttp.open('GET', 'api/price', false);
const d=xhttp.open('GET', 'api/price', false);
console.log(d);
xhttp.send();