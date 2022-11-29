async function getData() {
  const url = 'https://movie-database-alternative.p.rapidapi.com/';
  const data = await fetch(url);
  const json = await data.json();
  /* const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name)); */
  return reply;
}