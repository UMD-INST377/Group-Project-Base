/* 
    NAVBAR BURGER FUNCTIONALITY
*/
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
});


/* 
    POPULATING CHARTS
*/
async function getUSCharts() {
    const songRequest = await fetch('/api/wholeUSchart');
    const songData = await songRequest.json();
    return songData;
}

async function getGlobalCharts() {
    const songRequest = await fetch('/api/wholeGlobalChart');
    const songData = await songRequest.json();
    return songData;
}

async function windowActions() {
    const usResults = await getUSCharts();
    const globalResults = await getGlobalCharts();
    // console.table(usCharts.data);
    console.table(globalResults.data);
    const usCharts = usResults.data;
    const globalCharts = globalResults.data;

    const usTopSong = document.querySelector('.us-top-songs');
    usCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.us_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;
        
        if (usTopSong) {
            usTopSong.append(appendItem);
        }
        
    });

    const globalTopSong = document.querySelector('.global-top-songs');
    globalCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.global_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;

        if (globalTopSong) {
           globalTopSong.append(appendItem); 
        }
        
    });
}

window.onload = windowActions;