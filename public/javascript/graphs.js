/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
async function pieChartGenrePerc() {
  const response = await fetch('./api/vinyls');
  const vinyls = await response.json();
  const genres = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < vinyls.length; i++) {
    genres.push(vinyls[i].Genre);
  }

  // eslint-disable-next-line no-return-assign
  const result = genres.reduce((arr, val) => (arr[val] = (arr[val] || 0) + 1, arr), {});

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
      text: 'Vinyls By Genre'
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

  chart.render();
}
async function barChartCert() {
  const response = await fetch('./api/certifications');
  const jsonCert = await response.json();
  const gold = [];
  const platinum = [];
  const multiPlat = [];
  const diamond = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < jsonCert.length; i++) {
    gold.push(jsonCert[i].Gold);
    platinum.push(jsonCert[i].Platinum);
    multiPlat.push(jsonCert[i]['Multi-Platinum']);
    diamond.push(jsonCert[i].Diamond);
  }

  const goldResult = gold.reduce((arr, val) => (arr[val] = (arr[val] || 0) + 1, arr), {});
  const platResult = platinum.reduce((arr, val) => (arr[val] = (arr[val] || 0) + 1, arr), {});
  const multiResult = multiPlat.reduce((arr, val) => (arr[val] = (arr[val] || 0) + 1, arr), {});
  const diamondResult = diamond.reduce((arr, val) => (arr[val] = (arr[val] || 0) + 1, arr), {});

  const dict = [];

  Object.keys(goldResult);
  Object.keys(platResult);
  Object.keys(multiResult);
  Object.keys(diamondResult);

  dict.push({
    y: goldResult[Object.keys(goldResult)[Object.keys(goldResult).length - 1]],
    label: 'Gold'
  });

  dict.push({
    y: platResult[Object.keys(platResult)[Object.keys(platResult).length - 1]],
    label: 'Platinum'
  });

  dict.push({
    y: multiResult[Object.keys(multiResult)[Object.keys(multiResult).length - 1]],
    label: 'Multi-Platinum'
  });

  dict.push({
    y: diamondResult[Object.keys(diamondResult)[Object.keys(diamondResult).length - 1]],
    label: 'Diamond'
  });

  const chart2 = new CanvasJS.Chart('bar-graph', {
    animationEnabled: true,
    theme: 'light1',
    title: {
      text: 'Vinyls Based on Certifications'
    },
    axisY: {
      title: 'Count',
      titleFontSize: 24,
      includeZero: true
    },
    data: [{
      type: 'column',
      dataPoints: dict
    }]
  });

  chart2.render();
}

pieChartGenrePerc();
barChartCert();