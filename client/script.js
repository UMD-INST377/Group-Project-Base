function myFunction(contentID) {
  document.getElementById(contentID).classList.toggle('show');
}

async function getData() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '11fb2e648emshff0f511bd987be4p197887jsne25c60c996d9',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  const request = await fetch(url, options);
  const json = await request.json();
  return json;
}

async function injectDateFilter(list, filterInput, injectLocation) {
  let newArray = list.filter((item) => {
    const years = item.year >= filterInput && item.year <= (filterInput + 9);
    return years;
  });
  const target = document.querySelector(injectLocation);
  target.innerHTML = '';

  newArray = newArray.slice(0, 5);

  const listOl = document.createElement('ol');
  target.appendChild(listOl);
  newArray.forEach((item) => {
    const ol = document.createElement('li');
    ol.innerText = item.title;
    listOl.appendChild(ol);
  });
}

async function mainEvent() {
  data = await getData();
  console.log(data);
  injectDateFilter(data, 1960, '#best_1960s');
  injectDateFilter(data, 1970, '#best_1970s');
  injectDateFilter(data, 1980, '#best_1980s');
  injectDateFilter(data, 1990, '#best_1990s');
  injectDateFilter(data, 2000, '#best_2000s');
  injectDateFilter(data, 2000, '#best_2010s');
}

async function processmovies(list) {
  console.log('movie lists');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());