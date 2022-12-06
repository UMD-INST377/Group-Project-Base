async function getData() {
    const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
    const request = await fetch(url);
    const json = await request.json();
    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.location));
    return json
  }
  
  function shapeDataForLineChart(array) {
    return array.reduce((collection, item) => {
      if(!collection[item.category]) {
        collection[item.category] = [item]
      } else {
        collection[item.category].push(item);
      }
      return collection;
    }, {});
  }