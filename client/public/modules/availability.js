/* eslint-disable import/prefer-default-export */
async function loadAvail() {
  const results = await fetch('/api/table/data');
  const items = await results.json();
  const genreType = document.querySelector('.genre_selector');
  const canvas = document.getElementById('MyChart');
  const ctx = document.getElementById('MyChart').getContext('2d');
  function genreAll() {
    let netflix = 0;
    let hulu = 0;
    let prime = 0;
    let disney = 0;
    items.forEach((item) => {
      if (item.is_on_netflix === 1) {
        netflix += 1;
      } else if (item.is_on_hulu === 1) {
        hulu += 1;
      } else if (item.is_on_prime === 1) {
        prime += 1;
      } else if (item.is_on_hulu === 1) {
        disney += 1;
      }
    });
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Netflix', 'Hulu', 'Prime', 'Disney'],
        datasets: [{
          label: '# of Votes',
          data: [netflix, hulu, prime, disney],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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
  genreAll();
  genreType.onclick = (e) => {
    myChart.destroy();
    console.log(genreType.value)
    if (genreType.value === 'All') {
      genreAll();
    }
  };
}
export { loadAvail };