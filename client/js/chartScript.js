function createHTMLList(listIn) { // Populates the list elements in the HTML model.
    // console.log('Fired HTML creator')
    // console.log(listIn);
    const targetlist = document.querySelector('.songs');
    targetlist.innerHTML = '';
    listIn.forEach((item) => {
      const {name} = item;
      const displayName = "placeholder_name"
      targetlist.innerHTML += injectThisItem;
      const injectThis =  `<li><img src="placeholder.png" alt="Placeholder Image"> ${displayName} </li>`
      // console.log(injectThisItem);
      targetlist.innerHTML += injectThis;
    });
  
    return targetlist;
  }

async function mainEvent() {
    const billboard = document.querySelector('#billboard');
    const spotify = document.querySelector('#spotitfy');
    const apple = document.querySelector('#apple');
    const pandora = document.querySelector('#pandora');
    console.log('Query selectors selected successfully');

    billboard.addEventListener('click', async () => {
        const resp = await fetch('/api/songs')
        const songsJson = await resp.json()
        createHTMLList(songsJson)
    });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); 