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

  const Endpoint_category = '/api/category_freq';
  const Request_category = await fetch(Endpoint_category);
  const data_category = await Request_category.json();
  CanvasJS.addColorSet('col',
    [
      '#ff2052',
      '#ff9966',
      '#fdee00',
      '#66ff00',
      '#b2ffff',
      '#4997d0',
      '#9932cc',
      '#A0638C',
      '#ff1493',
      '#f4bbff',
      '#ffd700',
      '#a9ba9d'
    ]);
  const category_list = data_category.map((item1) => ({
    x: item1.month,
    y: item1.frequency_of_category_type
  }));
  const chart_category = new CanvasJS.Chart('category_chart_container', {
    colorSet: 'col',
    animationEnabled: true,
    title: {
      text: ' Confirmed eruptions per month'
    },
    axisX: {
      valueFormatString: '####',
      title: 'Month'
    },
    axisY: {
      valueFormatString: '####',
      title: 'number of confirmed eruptions'
    },
    data: [{
      type: 'bar',
      dataPoints: category_list
    }]
  });
  chart_category.render();
}
window.onload = windowActions;
