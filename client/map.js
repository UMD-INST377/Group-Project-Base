const apiKey =
  "pk.eyJ1IjoicmJsaWVudGVsZSIsImEiOiJjbDF3ZHhkcmEwY3htM2dtdDVyMzZ1MjYyIn0.LLDfQqH4DjlSkWmGnOByDw";

const latLong = [38.9072, -77.0369];
const mymap = L.map("map").setView(latLong, 10);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
  }
).addTo(mymap);

// adding markers of restaurants

coords = [
  [38.93911463543664, -77.0330022736526],
  [38.956625053273456, -77.02523077365214],
  [38.8955171332639, -77.02205201598237],
  [38.93909041575125, -77.03254606201037],
  [38.93686570449515, -77.03295648899581],
  [38.965435531140784, -77.02718306200958],
  [38.95472951406992, -77.02766226015952],
  [38.90674016120512, -77.02684003317557],
  [38.94920662659567, -77.07933395026993],
  [38.921902168093595, -77.04310338714585],
  [38.92086983461118, -77.00071314481748],
  [38.9089922055688, -76.9997154024893],
  [38.93582167924904, -77.05895470248856],
  [38.87762474812251, -76.99478396201222],
  [38.93062846229602, -77.03372158899599],
  [38.89517738387261, -77.02163761413202],
  [38.90419925768463, -77.04266156016104],
  [38.901269071500344, -77.03048618714644],
];

let l = coords.length;

/* names = [
  "Anejo Bar and Grill",
  "Centeno's Restaurant",
  "China Chilcano",
  "DC Corazon Fonda & Tequileria",
  "EL Amigo",
  "El Dorado Bread",
  "El Pulgarcito Restaurant And Bar",
  "El Sol Restaurante & Tequileria",
  "Guapo's Restaurant",
  "Habana Village",
  "Huacatay Peruvian Chicken",
  "La Cosecha",
  "Laredo DC Restaurant",
  "Las Placitas",
  "Mi Cuba Café",
  "Oyamel Cocina Mexicana",
  "Pisco Y Naza Ceviche Gastrobar DC",
  "Toro Toro",
]; */

for (let i = 0; i < l; i++) {
  const marker = L.marker(coords[i]).addTo(mymap);
}
