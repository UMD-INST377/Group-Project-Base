/* Data Request to API */ 

/*https://umd-spotify-backend.herokuapp.com/tracklist?access_token=${token}&term=${term}*/

token = 'BQDthlbhw-OxSuE_vOWbxw1keBWdWWGoTvY9h1dBDyXhBs3weOKzBFEDWkqwhdu9UCBfNGvvpXIuDHvUmGca1f5F0wtCo2hPDgonDA9LOuebiQUJGYH0W7LQ0Gf2dIIaEntcDWHSqUTGvKyaKj9vX9z3ym2wrTZf25DFsnZXlXc0wp6kQS82aRY4hrmG-JpTN-QThQOq3SPs'
term = 'long_term'

const getTracklist = async (term, token) => {
const url = `https://umd-spotify-backend.herokuapp.com/tracklist?access_token=${token}&term=${term}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const mainEvent = async () => {
  let data = await getTracklist (term, token);
  console.log(data)
};
document.addEventListener("DOMContentLoaded", async () => mainEvent());

/* Create a barchart with popularity scores of each track from the list*/ 
function initChart(){
const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6'],
      datasets: [{
        label: 'Popularity of top tracks',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

initChart()

