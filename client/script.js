/* leaving space here to add more functions */
/// test

async function getData() {
  const url ='https://api-nba-v1.p.rapidapi.com/players';
  const options = {
    headers: {
      'X-RapidAPI-Key': '3264b40dd2mshd5149564bef5bf8p1bdbb3jsn1cb056c041c4',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  }
  const data = await fetch(url, options);
  const json = await data.json();
  return json;
}

async function mainEvent() {
  console.log('Hello World!');
  const results = await getData();
  console.log(results)
  console.table(results.data);
  console.log(results.data[0]);
  console.log(`${results.data[0].name} ${results.data[0].id}`);

  /// if (!arrayFromJson.data?.length) { return; }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());