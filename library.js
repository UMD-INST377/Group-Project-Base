const api_url = 'https://api.tvmaze.com/shows';





/* mainEvent */
async function mainEvent() {
  // fetch TV show api !!!
  const response = await fetch(api_url);
  const data = await response.json();
  console.table(data); // check data as table format

}


document.addEventListener('DOMContentLoaded', async () => mainEvent());