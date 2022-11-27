/* Data Request to API */ 
token = 'BQCR6UmzMZlG3MB5N6KiFTXSrt-VGMDfQV89QhsdIGBYoR5pER8aeFZeHTsyElCKCgny4Q7dUOn8IIcekq8cPmPu2XrvZ-W2WfK4FCamILEx7OIzyRnJTg-YLBWNUl7wkbwJHRHNjmT5Uf1au0bsI4rIzSXmta9PSB0IvJfF7IgHt-YTOnOyEXYeCeCAnBHPMR2j0t2AfeMTiGT7QMF288s'
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

/*const getShowcategory = async (album_id, token) => {
  const url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}*/

function getAlbuminfo(album_id,token) {
  let url = `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`
  fetch(url)
  .then(response => response.json())
  .then(responseData => {
  let display = responseData;
  //console.log(display.items);

let name_items = []
let date_items = []
let tracks_items = []

// take all album names and log them into an array
for (let i = 0; i < display.items.length; i++) {
  name_items.push(display.items[i].name);
}
console.log(name_items);

// take all release date items and log them into an seperate array 
for (let i = 0; i < display.items.length; i++) {
  date_items.push(display.items[i].release_date)
  }
console.log(date_items);

// take all total tracks items and log them into an array 
for (let i = 0; i < display.items.length; i++) {
  tracks_items.push(display.items[i].total_tracks);
    }
console.log(tracks_items);  

//getAlbuminfo(album_id,token)

function format_Data(){
  //let { song_name, popularity, artists } = track;
  
  const newLine = `
  <div class="art_name">Name: ${name_items}</div>
  <div class="song_name">Release Date: ${date_items}</div>
  <div class="pop_name">Number of Tracks: ${tracks_items}</div>`;
  //let li = document.createElement('li')
  //li.textContent = newLine
  //const menu = document.querySelector('#full_container');
  //menu.appendChild(li)
  form = document.querySelector("#load_button_2")
  form.addEventListener("click", (SubmitEvent) => {
  SubmitEvent.preventDefault();
  //content.className = "song_container";
  //const listContainer = document.querySelectorAll('.full_container');
  var json_data = JSON.stringify(newLine);
  document.write(json_data);
})

  }
format_Data()
}) 

}
getAlbuminfo(album_id,token)














//`<div class="name_info">Name: ${name_items}</div>
 // <div class="release_info">Release Date: ${date_items}</div>
 // <div class="tracks_info">Total Tracks: ${tracks_items}</div>`

/*let content = document.createElement("ul");
  document.getElementById('.song_container');
  content.className = "user_request";
  newLine.innerHTML = "";*/




/*const mainEvent = async () => {
  let res = await data_Format();
  console.log(res);
};
document.addEventListener("DOMContentLoaded", async () => mainEvent());*/



/*function data_Format(){
  const newLine = `
  <div class="album_name">Album Name: ${name_items}</div>
  <div class="date_name">Date: ${date_items}</div>
  <div class="tracks_name">Number of Tracks: ${tracks_items}</div>`;
  let content = document.createElement("li");
  content.className = "song_container";
  content.innerHTML = newLine;
  console.log(content)
}
data_Format()


const mainEvent = async () => {
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
}

document.addEventListener("DOMContentLoaded", async () => mainEvent());*/




/* let {name_items, date_items, tracks_items} = information;
    const newLine = `
    <div class="art_name">Name: ${name_items}</div>
    <div class="song_name">Artist: ${date_items}</div>
    <div class="pop_name">Popularity: ${tracks_items}</div>`;
    let content = document.createElement("li");
    content.className = "song_container";
    content.innerHTML = newLine;
    location.appendChild(content);*/



/*create_Table()
async function create_Table () {
  let information = await getShowcategory();
  let html = '';
  information.forEach(element => {
    let htmlSegment = `<div class="element">
    <div class="album_name">Name: ${name}</div>
    <div class="release_date">Release Date: ${release_date}</div>
    <div class="total_tracks">Total Tracks: ${total_tracks}</div>`;
    html += htmlSegment
  });
  let container = document.querySelector('.full_container')
  container.innerHTML = html;*/


/*async function mainEvent() {
  const form = document.querySelector('.full_container')
  const submit = document.querySelector('#load_button_2')
  const loadAnimation = document.querySelector('graph_area')
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());*/

 // extract the data and push the items in an array
 /*for (let i = 0; i < display.items.length; i++) {
  console.log(display.items[i].name);
}

for (let i = 0; i < display.items.length; i++) {
console.log(display.items[i].release_date);
}

for (let i = 0; i < display.items.length; i++) {
console.log(display.items[i].total_tracks);
}*/



//display.forEach((name_display)=>{name.push(name_display.items.name);});
//display.forEach((release_display)=>{name.push(release_display.items.release_date);});
//display.forEach((total_display)=>{name.push(total_display.items.total_tracks);});

//console.log(name)
//console.log(release_date)
//console.log(total_tracks)


/*async function format_data () {
  let information = await getShowcategory();
  let html = '';
  information.forEach(element => {
    let htmlSegment = `<div class="element">
    <div class="album_name">Name: ${name}</div>
    <div class="release_date">Release Date: ${release_date}</div>
    <div class="total_tracks">Total Tracks: ${total_tracks}</div>`;
    html += htmlSegment
  });
  let container = document.querySelector('.full_container')
  container.innerHTML = html;
}*/

/*const data_format = (album_information, location) => {
  getShowcategory();
  let {name , release_date, total_tracks } = album_information;
  const newLine = `
  <div class="album_name">Name: ${name}</div>
  <div class="release_date">Release Date: ${release_date}</div>
  <div class="total_tracks">Total Tracks: ${total_tracks}</div>`;
   content.className = "song_container";
  content.innerHTML = newLine;
  location.appendChild(content);
}*/


/*const mainEvent = async () => {
  let res = await getShowcategory(album_id, token);
  console.log(res);
  data_format(album_information,location)
};
document.addEventListener("DOMContentLoaded", async () => mainEvent());*/
