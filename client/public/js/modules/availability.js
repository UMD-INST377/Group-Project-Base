/* eslint-disable brace-style */
document.addEventListener('DOMContentLoaded', async () => {
  const results = await fetch('/api/table/data');
  const items = await results.json();
  const genreType = document.querySelector('.genre_selector');
  const ctx = document.getElementById('MyChart').getContext('2d');
  let genreCurrentValue = 'All';
  let myChart = null;
  const genreArray = ['All'];
  items.forEach((item) => {
    if (genreArray.includes(item.genre) === false) {
      genreArray.push(item.genre);
      genreType.innerHTML += `
      <option value="${item.genre}">${item.genre}</option>`;
    }
  });

  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  function genreAll() {
    // if a chart exists, destroy it.
    if (myChart != null) {
      myChart.destroy();
    }
    let netflix = 0;
    let hulu = 0;
    let prime = 0;
    let disney = 0;
    // Default OR if ALL is selected
    if (genreCurrentValue === 'All') {
      items.forEach((item) => {
        if (item.is_on_netflix === 1) {
          netflix += 1;
        } if (item.is_on_hulu === 1) {
          hulu += 1;
        } if (item.is_on_prime === 1) {
          prime += 1;
        } if (item.is_on_disney === 1) {
          disney += 1;
        }
      });
    }
    // Check if is in a genre:
    else {
      items.forEach((item) => {
        if (item.is_on_netflix === 1 && item.genre === genreCurrentValue) {
          netflix += 1;
        } if (item.is_on_hulu === 1 && item.genre === genreCurrentValue) {
          hulu += 1;
        } if (item.is_on_prime === 1 && item.genre === genreCurrentValue) {
          prime += 1;
        } if (item.is_on_disney === 1 && item.genre === genreCurrentValue) {
          disney += 1;
        }
      });
    }
    // make that chart!
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Netflix', 'Hulu', 'Prime', 'Disney'],
        datasets: [{
          label: '# of Movies',
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
  // Start it in All:
  genreAll();

  genreType.addEventListener('change', () => {
    if (genreType.value === genreCurrentValue) {
      console.log('Nothing Changed!');
    } else {
      genreCurrentValue = genreType.value;
      genreAll();
    }
  });
});