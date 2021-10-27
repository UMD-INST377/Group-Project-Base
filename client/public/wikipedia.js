
//ive got no clue where to go from here haha
// we prob need to have our own api to return a poster
async function getFullImageUrl(website) {
  try {
    const response = await axios.get(website);
    const html = response.data;
    console.log(html);
  } catch (error) {
    throw error;
  }
}
async function handleSubmit(event) {
  event.preventDefault();
  const inputValue = document.querySelector('.titlesearch').value;
  const searchQuery = inputValue.trim();

  try {
    const results = await searchWikipedia(searchQuery);
    const imageSearch = grabImageFromPage(results);
    //const fullurl = getFullImageUrl(imageSearch);
  } catch (err) {
    console.log(err);
    console.log('Failed to search wikipedia');
  }
}

async function searchWikipedia(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  console.log('idk', json);
  const pageid = json.query.search;
  console.log(pageid);
  return pageid;
}
async function grabImageFromPage(pageid) {
  const foundPageID = pageid[0].pageid;
  console.log('pageid:', foundPageID);
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=images&pageids=${foundPageID}&imlimit=20`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const json = await response.json();
  console.log(json);
  if (
    json !== undefined
    && json.query !== undefined
    && json.query.pages !== undefined
  ) {
    json.query.pages[foundPageID].images.forEach((thing) => {
      if (thing.title.includes('poster')) {
        console.log(thing.title);
        alert(`Poster found on wikipedia, ${thing.title}`)
        return (`https://en.wikipedia.org/wiki/${thing.title}`);
      }
    });
  }
  console.log();
  // this gets the image file name of the poster
}

const button = document.querySelector('.titlesubmit');
button.addEventListener('click', handleSubmit);
