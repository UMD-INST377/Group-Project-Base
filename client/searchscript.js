async function windowActions() {
  // Get data
  const url = "/api/HotelOverview";
  data = [];
  const request = await fetch(url);
  if (request.ok) {
    data = await request.json();
}
window.onload = windowActions;
