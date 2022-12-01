/* Data Request to API */
token = "BQDD7bjlALmh4vmm2ByUnxtKvDmOCxu8x528AqVRPbVdTDWa6Zvh3o5h13r462_3H0IT_-Y6nN9Kdk63lZBcn2Olqc9LtuyIW7R2kEnaM5wdgd8y4QS0fsIclKUmmRsQMocbSbiD2iVfaDiG1KbLS19ot4Krt8F8Py1NA_Ia0btv1I6hkjxuSSGOmdh791PbCRAt3tKR1c3QFlVxgQFqntdvUV-s0u06ZlPiCnoMyq-jUc4gT8IG"
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

/*const getShowcategory = async (album_id, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}
getShowcategory(album_id,token)*/

const data_format = (track, location) => {
  let { name, release_date, total_tracks } = track;
  const newLine = `
  <div class="art_name">Album: ${name}</div>
  <div class="song_name">Release Date: ${release_date}</div>
  <div class="pop_name">Total Tracks: ${total_tracks}</div>`;
  let content = document.createElement("li");
  content.className = "song_container";
  content.innerHTML = newLine;
  location.appendChild(content);
};

const initChart = (chart,chartData) => {
   //Gather items for names
  //const trackInfo = Object.values(chartData["total_tracks"]) 
  //console.log(trackInfo)

    const data = {
    labels: chartData.name_result,
    datasets: [
      {
        label: "Total Tracks Per Album",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData.track_results
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
  const data_list = document.querySelector("#data");
  const submit = document.querySelector("#load_button_2");
  const graph_submit = document.querySelector("#graph_load_2") 
  const chart_target = document.querySelector("#myChart")
  let chart_object = "";

  const results = await fetch(
    `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`
  );
  const arrayFromJson = await results.json();
  //console.log(arrayFromJson)
  
  submit.addEventListener("click", async (submitEvent) => {
    submitEvent.preventDefault();
    data_list.innerHTML = "";
    arrayFromJson["items"].forEach((item) => {
      //console.log(item)
      data_format(item,data_list)
    });
  });
  graph_submit.addEventListener("click", async (submitEvent) => {
    submitEvent.preventDefault();
    chart_target.innerHTML="";
    let total_result = {
      name_result:[],
      track_results:[]
    }
    arrayFromJson["items"].forEach((item) => {
      const { name, total_tracks } = item
      total_result.name_result.push(name)
      total_result.track_results.push(total_tracks)
      });
      initChart(chart_target, total_result)
  });
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());

