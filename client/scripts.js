async function mainEvent() {
  const parks = await fetch('/api/race/parks');
  const parksArray = await parks.json();
  console.log(parksArray);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());