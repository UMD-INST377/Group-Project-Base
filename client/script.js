async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}