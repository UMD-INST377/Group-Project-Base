async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

const data = await getData();