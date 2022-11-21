function injectHTML(list) {
  const target = document.querySelector('#song_list');
  target.innerHTML = '';
  
  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.foreach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });

}

function processSongs(list) {
  const range = [...Array(10).keys()];
  const newArray = range.map();
  return newArray;
}

async function mainEvent() {
  const submit = document.querySelector('#get-song');
  submit.style.display = 'none';
  
  const results = await fetch('/api/');
  const arrayFromJson = await results.json();

  consle.table(arrayFromJson);

  if (arrayFromJson.data?.length > 0) {
    submit.style.display = 'block';

    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();

      const songList = processSongs(arrayFromJson.data);
      console.log(songList);
      injectHTML(songList)
    })
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());