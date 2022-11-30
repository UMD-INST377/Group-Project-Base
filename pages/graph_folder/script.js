// params reads in the queries in the url. Example ?access_token=token12345
let params = new URL(document.location).searchParams;
// Pulls the token

console.log("token");
console.log(token);

/*
  Fetch request to get top 50 songs - Name, popularity, 
  Receives: Access token(obtained through login),term(short_term,medium_term,long_term)
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
  "name": "Rich Flex",
  "popularity": 94,
  "artists": ["Drake","21 Savage"]
  }
*/

const getTracklist = async (req_term, req_token) => {
  url = "https://umd-spotify-backend.herokuapp.com/mod/tracklist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        term: req_term,
      })
  );
  const data = await response.json();
  return data;
};

/*
  Fetch request to author ids in the top 50 songs.
  Receives: Access token(obtained through login),term(short_term,medium_term,long_term)
  Returns: Nested array with author id strings. Strings within nested array go up to 50.
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
    [['sadfsadfsf','erwt34t3t3t34t43t4'],['sadfsadfsf','erwt34t3t3t34t43t4']]
  }
*/

const get_authorIDArray = async (req_term) => {
  url = "https://umd-spotify-backend.herokuapp.com/mod/authorlist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        term: req_term,
      })
  );
  const data = await response.json();
  return data;
};

/*
  Fetch request to get genres count based on artist ids
  Receives: Access token(obtained through login), artist ids(string of artist ids separated by commas)
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
    "alternative r&b": 4,
    "indie jazz": 3,
    "indie r&b": 4,
    "indie soul": 3,
  }
*/
const getGenresCount = async (artist_ids) => {
  url = "https://umd-spotify-backend.herokuapp.com/mod/genreslist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        id_string: artist_ids,
      })
  );
  const data = await response.json();
  return data;
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
