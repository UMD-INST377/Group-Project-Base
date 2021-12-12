// Graphs
// eslint-disable-next-line func-names

async function pieChartGenrePerc() {
  const response = await fetch('./api/vinyl');
  const vinyls = await response.json();
  const genres = [];

  for (let i = 0; i < vinyls.length; i++) {
    genres.push(vinyls[i].Genre);
  }

  // eslint-disable-next-line no-return-assign
  const result = genres.reduce((acc, o) => (acc[o] = (acc[o] || 0) + 1, acc), {});

  const dict = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(result)) {
    dict.push({
      y: (value / genres.length) * 100,
      label: key
    });
  }

  const chart = new CanvasJS.Chart('pie-graph', {
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Popular Vinyls By Genre'
    },
    data: [{
      type: 'pie',
      startAngle: 25,
      toolTipContent: '<b>{label}</b>: {y}%',
      showInLegend: 'true',
      legendText: '{label}',
      indexLabelFontSize: 16,
      indexLabel: '{label} - {y}%',
      dataPoints: dict
    }]
  });

  const dataPoints = [];

  const chart2 = new CanvasJS.Chart('bar-graph', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Daily Sales Data'
    },
    axisY: {
      title: 'Units',
      titleFontSize: 24,
      includeZero: true
    },
    data: [{
      type: 'column',
      yValueFormatString: '#,### Units',
      dataPoints: dataPoints
    }]
  });

  function addData(data) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      dataPoints.push({
        x: new Date(data[i].date),
        y: data[i].units
      });
    }
    chart2.render();
  }
  chart.render();
  $.getJSON('https://canvasjs.com/data/gallery/javascript/daily-sales-data.json', addData);
}
pieChartGenrePerc();
