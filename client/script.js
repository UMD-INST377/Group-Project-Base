const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');
// const data = getData();

// console.log(data);

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  console.log(json);
  return json
}
getData()