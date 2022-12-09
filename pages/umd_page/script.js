/* Data Request to API */
token = "BQBJqQwiFnPvr0_9EIZucy6QqL5hAN9TTZo3jNCfR9kLPGCFCOfljYMiDr6RrOVqzao2jH-XfaHaXXBl77FQX_fL1cjMQpe6otbzYRLhNZ_ZsnV8EfrDxAHls97I96cjlPPSjXLJd_UEBZlosk0-AvIorC1Fhg2MDUOz94xkLj1NhopR_KrUnqd1unoVMUJtNXvvq30i0FZRe52BmZB4y41L96y45DGTBp3p-85fvyFVvtzq32Za"
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

function addData(chart, label, data) {
  console.log(label)
  console.log(data)
  console.log(chart)
  chart.data.labels = label; /*set up as an array chart.data.labels*/ 
  chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}


async function mainEvent() {
  const data_list = document.querySelector("#data");
  const submit = document.querySelector("#load_button_2");
  const graph_submit = document.querySelector("#graph_load_2")
  //const graph_form = document.querySelector('.graph-form') 
  const chart_target = document.querySelector("#myChart")
  const laodAnimation = document.querySelector('.lds-ellipsis')
  graph_submit.style.display='none';

  const results = await fetch(
    `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`
  );
  const arrayFromJson = await results.json();
  //console.log(arrayFromJson)

  let total_result = {
    name_result:[],
    track_results:[]
  }
  
  arrayFromJson["items"].forEach((item) => {        
    const { name, total_tracks } = item
    total_result.name_result.push(name)
    total_result.track_results.push(total_tracks)
    });

  const mychart = initChart(chart_target, total_result)

  submit.addEventListener("click", async (submitEvent) => {
    submitEvent.preventDefault();
    data_list.innerHTML = "";
    arrayFromJson["items"].forEach((item) => {
      //console.log(item)
      data_format(item,data_list)

    });
  });

  if (!arrayFromJson.items?.length === 0){return;}
  graph_submit.style.display = 'block';
  laodAnimation.classList.remove('lds-ellipsis');
  laodAnimation.classList.add('lds-ellipsis_hidden')

  graph_submit.addEventListener("click", async (submitEvent) => {
    submitEvent.preventDefault();
    /*chart_target.innerHTML="";*/
    addData(mychart, total_result.name_result, total_result.track_results)
    removeData(mychart)


    /*const filtered = 
    const data = total_results.label.filter*/
  });
}

document.addEventListener("DOMContentLoaded", async () => mainEvent());

