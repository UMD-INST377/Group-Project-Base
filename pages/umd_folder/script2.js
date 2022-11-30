/* Data Request to API */
token ="BQCC_PS6IrtWlPIWTbvtYisQ0Z7ICMI3iEp4BmeFjsQvGxBJ9edfrnFgP2-Wj2VSQrvfMNYekLjNUoUe7jde2x2NKxHR3u0kVORtMyW-2dATGV2n7eNOHYFKfmwcoUiTCylmBtJmg6mjXyck2LCgExLSQkAb7buDAsb9MzgrREoOgYEuiCA-jRk7omEW_GGfuVzTKAy4Ogmps5CjSQ0WbaR7fL1mQIeRmgwZZYSyoMrgZQRjNUKV";
term = "long_term";
artist_ids = "39cDMNnxwjrKJE1dyt47jh,1aBDI4nH6OfAkNyUX08O2V";
album_id = "0TnOYISbd1XYRBk9myaseg";

// Saves the token to storage which can be used anywhere on the website
if (token !== null) {
  localStorage.setItem("access_token", token);
} else {
  token = localStorage.getItem("access_token");
}

console.log("token");
console.log(token);

/*const getTracklist = async (term, token) => {
const url = `https://umd-spotify-backend.herokuapp.com/tracklist?access_token=${token}&term=${term}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const get_authorIDArray = async (term, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/get_authorlist?access_token=${token}&term=${term}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


const getGenresCount = async (artist_ids, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/genreslist?access_token=${token}&id_string=${artist_ids}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
*/

/* Create a barchart with popularity scores of each track from the list*/
const getShowcategory = async (album_id, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`;
  const response = await fetch(url);
  const data = await response.json(); 
  //console.log(typeof data.items)
  for (const property in data.items[0]) {
    console.log(`${property}:${data.items[property]}`);
  }
}
getShowcategory(album_id, token)

// Gather the relevant elements that you want from the ALBUM API and filter them 
const data_format = (track, location) => {
  let { name, release_date, total_tracks } = track;
  //console.log('aaaaaaaaaaa')
  const newLine = `
  <div class="art_name">Album: ${name}</div>
  <div class="song_name">Track Number: ${release_date}</div>
  <div class="pop_name">Date: ${total_tracks}</div>`;
  let content = document.createElement("li");
  content.className = "song_container";
  content.innerHTML = newLine;
  location.appendChild(content);
};

const initChart = (chart, chart_data) => {
  const labels = chart_data["label"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Counts based on genres",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        data: chart_data["data"],
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return new Chart(chart, config);
};

async function mainEvent() { 
  const data_list = document.querySelector('#data');
  const submit = document.querySelector('#load_button_2'); // This class name needs to be set on your form before you can listen for an event on it

 submit.addEventListener('submit', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
  submitEvent.preventDefault();// This prevents your page from going to http://localhost:3000/api even if your form still has an action set on it
  data_list.innerHTML = ""; 
  getShowcategory(album_id, token)
 .then((data) => {
   // On success, format and insert into data div
   data.forEach((track) => {
     //data_format(track, data_list);
     //console.log(track)
   });
 })
 .catch((error) => {
   console.log(error);
 });   // console.log(''); // this is substituting for a "breakpoint"
  });  // the async keyword means we can make API requests
}      // Load DATA WHEN THE USER CLICKS THE BUTTON
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API request.