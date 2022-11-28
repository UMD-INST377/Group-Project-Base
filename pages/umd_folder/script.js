/* Data Request to API */ 
token = 'BQC_gFbcKlyVwNRBmWnyyyHEzPJIUn73KaK7LcBwOsqyBR59j_MTm0By9pJueNdpoWQMZRDHoUHz1nPDkvLSmeevRwKHGxAPcGom2R-Eepasie0xc-KID2HBfvPEG4dCkIZ4MGMrcY-iffmblr6ih3Grtr-wWnwt-YtK4XX51vSHZNSm4pwGXFf2ZybePKScRptUgBUdJCIKoT6LykgrFXg'
term = 'long_term'
artist_ids = '39cDMNnxwjrKJE1dyt47jh,1aBDI4nH6OfAkNyUX08O2V'
album_id='0TnOYISbd1XYRBk9myaseg'


// Saves the token to storage which can be used anywhere on the website
if (token !== null) {
  localStorage.setItem("access_token", token);
} else {
  token = localStorage.getItem("access_token");
}

console.log("token");
console.log(token);


const getTracklist = async (term, token) => {
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


/* Create a barchart with popularity scores of each track from the list*/ 

/*const getShowcategory = async (album_id, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}*/

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

const data_format = (track, location) => {
  let { song_name, popularity, artists } = track;
  const newLine = `
  <div class="art_name">Name: ${song_name}</div>
  <div class="song_name">Artist: ${artists.toString()}</div>
  <div class="pop_name">Popularity: ${popularity}</div>`;
  let content = document.createElement("li");
  content.className = "song_container";
  content.innerHTML = newLine;
  location.appendChild(content);
};

const data_clean = (final_obj, response, index) => {
  ret_obj = {};
  for (item in response) {
    if (item in final_obj) {
      final_obj[item] += response[item];
    } else {
      final_obj[item] = response[item];
    }
  }
  if (index == 0) {
    const sortable = Object.entries(final_obj)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    // graph code here
    ret_obj["label"] = Object.keys(sortable).slice(0, 6);
    ret_obj["data"] = Object.values(sortable).slice(0, 6);
    return ret_obj;
  }
};
// const updateChart = (chart, data) => {
//   graph_data = Object.values(data).slice(0, 6);
//   graph_labels = Object.keys(data).slice(0, 6);
//   chart.update();
// };

const mainEvent = async () => {
  // div which receives top 50 tracks
  const data_list = document.querySelector("#data");
  // Value of the term in the initial form
  const term_value = document.querySelector('input[name="term"]:checked').value;
  // Initial form to pull top 50 songs
  form = document.querySelector("#load_button");
  // Form that pulls the graph data and graph
  graph_load = document.querySelector("#graph_load");
  // div that holds the graph
  const chart_target = document.querySelector("#myChart");
  // chart object holds the actual chart
  let chart_object = "";
  let chart_data = {};
  // Event listener for initial form - Top user tracks
  form.addEventListener("click", (SubmitEvent) => {
    // stops the page from redirecting/reloading
    SubmitEvent.preventDefault();
    // Clears the div of any old information
    data_list.innerHTML = "";
    // Pulls the top 50 tracks - Song name(string), artists(array), popularity(int)
    getTracklist(term_value, token)
      .then((data) => {
        // On success, format and insert into data div
        data.forEach((track) => {
          data_format(track, data_list);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // call the get_authorIDArray request and get back author ids
  graph_load.addEventListener("click", (SubmitEvent) => {
    SubmitEvent.preventDefault();
    get_authorIDArray(term_value, token)
      .then((response) => {
        genre_obj = {};
        response.forEach((cur_array, index) => {
          // Convert an array of strings to one string
          const temp_IDString = cur_array.toString();
          // Calls the getGenresCount and get back the genres count object
          getGenresCount(temp_IDString, token).then((response_obj) => {
            if (index == 0) {
              chart_data = data_clean(genre_obj, response_obj, index);
              chart_object = initChart(chart_target, chart_data);
            } else {
              data_clean(genre_obj, response_obj, index);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
document.addEventListener("DOMContentLoaded", async () => mainEvent());
