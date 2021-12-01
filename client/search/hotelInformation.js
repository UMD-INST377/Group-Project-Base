const queryString = window.location.search;
const idNum = queryString.replace(/^\D+/g, "");

const loadHotels = async () => {
  try {
    const res = await fetch("https://group4-final-inst377fa2021.herokuapp.com/api/hotel_overview");
    hotelsOverview = await res.json();
    console.log(hotelsOverview);
  } catch (err) {
    console.error(err);
  }
  const overviewHTML = `
                <li class="content" style="list-style-type: none">
                <ul>${hotelsOverview[idNum - 1].hotel_name}</ul>
                <ul>${hotelsOverview[idNum - 1].street_address}</ul>
                <ul>${hotelsOverview[idNum - 1].hotel_phone_number}</ul>
                <ul>${hotelsOverview[idNum - 1].hotel_rating}</ul>
                </li>
                    `;
  document.getElementById("info").innerHTML = overviewHTML;
};

loadHotels();
