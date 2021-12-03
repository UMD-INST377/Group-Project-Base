// Graphs
// eslint-disable-next-line func-names
window.onload = function() {
  const chart = new CanvasJS.Chart('pie-graph', {
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Desktop Browser Market Share in 2016'
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
        { y: 51.08, label: 'Chrome' },
        { y: 27.34, label: 'Internet Explorer' },
        { y: 10.62, label: 'Firefox' },
        { y: 5.02, label: 'Microsoft Edge' },
        { y: 4.07, label: 'Safari' },
        { y: 1.22, label: 'Opera' },
        { y: 0.44, label: 'Others' }
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
