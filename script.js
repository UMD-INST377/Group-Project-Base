const api_url = 'https://api.tvmaze.com/shows'



/* Cuurent Date and Time */
function date_time() {
  const datetimeDisplay = document.getElementById('date-time');
  const datetimeString = new Date().toLocaleString();
  const formatString = datetimeString.replace(', ', ' - ');
  datetimeDisplay.textContent = formatString;
}
setInterval(date_time, 100);




/* get Mood image :
the user can click the emoji button to random recommend movies based on the mood
*/











/* mainEvent */
async function mainEvent() {
  // fetch TV show api !!!
  const response = await fetch(api_url);
  const data = await response.json();
  console.table(data); // check data as table format


  const form = document.querySelector('.main_form');
  form.addEventListener('start', async(submitEvent) => {
    submitEvent.preventDefault();
    console.log('form start')
  })
  const start = document.querySelector('#refresh');
  start.style.display = '';



  


};


document.addEventListener('DOMContentLoaded', async () => mainEvent());