
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  return json;
}