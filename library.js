const api_url = 'https://api.tvmaze.com/shows';





/* mainEvent */
async function mainEvent() {
  // fetch TV show api !!!
  const response = await fetch(api_url);
  const data = await response.json();
  console.table(data); // check data as table format

  const form = document.querySelector('.main_form');
  form.addEventListener('start', async(submitEvent) => {
    submitEvent.preventDefault();
    console.log('form start');
  });
  const start = document.querySelector('#refresh');
  start.style.display = '';
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());