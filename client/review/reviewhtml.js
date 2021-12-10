const queryString = window.location.search;
const idNum = queryString.replace(/^\D+/g, "");

const loadHotels = async () => {
  try {
    const res = await fetch("https://group4-final-inst377fa2021.herokuapp.com/");
    hotelsOverview = await res.json();
    console.log(hotelsOverview);
  } catch (err) {
    console.error(err);
  }
  const overviewHTML = `
              
                    `;
  document.getElementById("info").innerHTML = overviewHTML;
};

loadHotels();
