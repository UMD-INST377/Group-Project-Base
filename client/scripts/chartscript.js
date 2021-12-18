async function windowActions() {
  const endpoint = '/api/eruption_freq';
  const request = await fetch(endpoint);
  const data = await request.json();
  CanvasJS.addColorSet('col',
    [
      '#B4A2CA',
      '#C6708A',
      '#A0638C',
      '#0B4278',
      '#032545'
    ]);
  const freqList = data.map((item) => ({
    x: item.year,
    y: item.frequency
  }));
  const chart = new CanvasJS.Chart('chartContainer', {
    colorSet: 'col',
    animationEnabled: true,
    title: {
      text: 'Eruptions per year'
    },
    axisX: {
      valueFormatString: '####',
      title: 'Year'
    },
    axisY: {
      valueFormatString: '####',
      title: 'Eruptions'
    },
    data: [{
      type: 'bar',
      dataPoints: freqList
    }]
  });
  chart.render();
}
window.onload = windowActions;
