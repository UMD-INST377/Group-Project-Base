function initChart(chart, object) {
  const labels = Object.keys(object);

  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'NBA 3 pointers made in 2022 per player',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y'
    }
  };

  return new Chart(
    chart,
    config
  );
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

function shapeDataForBarChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.fg3m]) {
      collection[item.fg3m] = [item];
    } else {
      collection[item.fg3m].push(item);
    }
    return collection;
  }, {});
}