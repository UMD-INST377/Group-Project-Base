const config = {
  type: 'carousel',
  perView: 5,
  focusAt: 'center'
};
new Glide('.glide', config).mount();

const body = document.querySelector('body');
const container = document.querySelector('.container');
const albums = document.querySelectorAll('img');

function createDetail() {
  const new_container = document.createElement('div');
  new_container.className = 'detail';
  new_container.style.cssText = `border: 5px solid grey;
                                   height: 400px;`;

  // Created Tab and Content
  const tab = document.createElement('div');
  tab.className = 'tab';
  const content = document.createElement('div');
  content.className = 'contents';

  // Created Buttons
  const general_info = document.createElement('button');
  general_info.className = 'link';
  general_info.innerHTML = 'General Information';
  general_info.addEventListener('click', (evt) => { openTab(0); });

  const songs = document.createElement('button');
  songs.className = 'link';
  songs.innerHTML = 'Songs';
  songs.addEventListener('click', (evt) => { openTab(1); });

  const placements = document.createElement('button');
  placements.className = 'link';
  placements.innerHTML = 'Placement';
  placements.addEventListener('click', (evt) => { openTab(2); });

  const prices = document.createElement('button');
  prices.className = 'link';
  prices.innerHTML = 'Price';
  prices.addEventListener('click', (evt) => { openTab(3); });

  // Created Content and Appended to Content Div
  const general_info_content = document.createElement('h3');
  general_info_content.className = 'heading';
  general_info_content.innerHTML = 'Vinyl';

  const songs_content = document.createElement('h3');
  songs_content.className = 'heading';
  songs_content.innerHTML = 'Song';

  const placements_content = document.createElement('h3');
  placements_content.className = 'heading';
  placements_content.innerHTML = 'Placement';

  const prices_content = document.createElement('h3');
  prices_content.className = 'heading';
  prices_content.innerHTML = 'Price';

  content.append(general_info_content, songs_content, placements_content, prices_content);

  // Appended to Container
  tab.append(general_info, songs, placements, prices);
  new_container.append(tab, content);
  body.appendChild(new_container);

  function openTab(tabIndex) {
    const heading = document.querySelectorAll('.heading');
    heading.forEach((item) => {
      item.style.display = 'none';
    });

    heading[tabIndex].style.display = 'block';

    console.log(all_content);
  }
}

console.log(albums);
albums.forEach((item) => {
  item.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    // evt.target.style.hover = `transform: rotateY(-60deg);
    //                             transition-duration: 1s;
    //                            `
    container.style.cssText = `height: 400px; 
                                   transition-duration: 1s`;
    if (!body.contains(document.querySelector('.detail'))) {
      createDetail();
    }
  });
});
