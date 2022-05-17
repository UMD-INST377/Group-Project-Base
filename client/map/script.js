async function mainEvent() {
  const results = await fetch('/api/dining');
  const hallArray = await results.json();

  const map = L.map('map').setView([38.9882, -76.9460], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // initialize map and set the view
  for (let i = 0; i < hallArray.data.length; i++) { 
    L.marker([hallArray.data[i].hall_lat, hallArray.data[i].hall_long]).addTo(map)
      .bindPopup(hallArray.data[i].hall_name)
      .openPopup(); // for each hall, adds a marker and pop up to the map
  }

  // console.log(hallArray.data.length);
  // console.log(hallArray.data[0].hall_name); 
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());