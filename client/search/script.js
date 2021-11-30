const hotelsList = document.getElementById("hotelsList");
const searchBar = document.getElementById("searchBar");
let hotelsOverview = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredHotels = hotelsOverview.filter((hotel) => {
    return (
      hotel.hotel_name.toLowerCase().includes(searchString) ||
      hotel.street_address.toLowerCase().includes(searchString)
    );
  });
  displayHotels(filteredHotels);
});

const loadHotels = async () => {
  try {
    const res = await fetch(
      "https://group4-final-inst377fa2021.herokuapp.com/api/hotel_overview"
    );
    hotelsOverview = await res.json();
    displayHotels(hotelsOverview);
  } catch (err) {
    console.error(err);
  }
};

const displayHotels = (hotels) => {
  const htmlString = hotels
    .map((hotel) => {
      return `
            <li class="results">
                <ul>${hotel.hotel_name}</ul>
                <ul>${hotel.street_address}</ul>
            </li>
        `;
    })
    .join("");
  hotelsList.innerHTML = htmlString;
};

loadHotels();
