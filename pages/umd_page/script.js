/* Data Request to API */
token = "BQDh4RD541vJuz8rvPSBmIHo_ZtQFBSZGa36SkdFYqxfOjk1T8BfYgKso1LrnW1QWe1T5ye-rDzyxnRoZaggRbMcNp-hLZUfEsZ3QY6Ocyinyk9qXyLJDFNKYtPahfFph3NS8U3DpuenQYNpJl3X37rQW6vAVR037v_nlQ7qGWwIy7p3POTItEQWutPLRvTDR3YrfYD2wDfXYcAuq08bsemWFGq_tCLY-gA4CcIZkd9FW6UXJr8c"
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

function injectHTML(list) {
  console.log(list)
  console.log('fired injectHTML');
  const target = document.querySelector('#loadfilter');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });

  
}

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





function filterList(array, filterInputValue) {
  return array.filter((item) => {
    if (!item.name) { return; }
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

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
  /*console.log(label)
  console.log(data)*/
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

/*function shapeDataforBarChart(array) {
  console.log(array)
  return array.reduce((collection,item)=>{
    if (!collection[data.category]){
      collection[data.category]=[item];
    } else {
      collection[item.category].push(item);
    }
    return collection;
  }, {});

}*/

async function mainEvent() {

  const data_list = document.querySelector("#data");
  const submit = document.querySelector("#load_button_2");
  const graph_submit = document.querySelector("#graph_load_2")
  //const graph_form = document.querySelector('.graph-form') 
  const chart_target = document.querySelector("#myChart")
  const laodAnimation = document.querySelector('.lds-ellipsis')
  graph_submit.style.display='none';

  // These queryselectors are for the filtering
  const mainFilterform = document.querySelector(".filter-form")
  /*const filterid = document.querySelector("#mySearch")*/
  const filterButton = document.querySelector("#loadfilter")
  /*const filterBox= document.querySelector("#data2")*/

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
    /*injectHTML(arrayFromJson)*/
    /*shapeDataforBarChart(arrayFromJson)*/
    /*const filtered = 
    const data = total_results.label.filter*/
  });

//Used in tehe filter box
  let currentList = []
  mainFilterform.addEventListener('input', (event) => {
    console.log(event.target.value);
    const filteredList = filterList(currentList, event.target.value);
    injectHTML(filteredList)
    /*data_format(filteredList)*/
    /*markerPlace(filteredList, pageMap);*/
  });

  mainFilterform.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    currentList = arrayFromJson.data;
    console.log(currentList);
    injectHTML(currentList);
  })

}


document.addEventListener("DOMContentLoaded", async () => mainEvent());