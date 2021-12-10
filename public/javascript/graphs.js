// Graphs
// eslint-disable-next-line func-names
window.onload = function() {
  const chart = new CanvasJS.Chart('pie-graph', {
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Most Popular Record Labels (All Time)'
    },
    data: [{
      type: 'pie',
      startAngle: 25,
      toolTipContent: '<b>{label}</b>: {y}%',
      showInLegend: 'true',
      legendText: '{label}',
      indexLabelFontSize: 16,
      indexLabel: '{label} - {y}%',
      dataPoints: [
        { y: 14.67, label: 'Motown Records' },
        { y: 9.00, label: 'Atlantic Records' },
        { y: 6.67, label: 'Epic' },
        { y: 8.33, label: 'Stax, Casablanca' },
        { y: 3.33, label: 'EMI' },
        { y: 5.00, label: 'ATCO, Philadelphia IR' },
        { y: 53.0, label: 'Others' }
      ]
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
};
