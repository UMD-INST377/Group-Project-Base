// Configure and Initialize Glide.js
const config = {
  type: 'slider',
  perView: 5,
  focusAt: 'center'
};

const glide = new Glide('.glide', config).mount();

// Initialize Elements
const body = document.querySelector('body');
const container = document.querySelector('.container');
const slider = document.querySelector('.glide');
const albums = document.querySelectorAll('img');

// Create Detail Table
function createDetail() {
  const new_container = document.createElement('div');
  new_container.className = 'detail';
  new_container.style.cssText = `height: 40vh;
                                  `;

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
  openTab(0);
  function openTab(tabIndex) {
    const heading = document.querySelectorAll('.heading');
    heading.forEach((item) => {
      item.style.display = 'none';
    });
    heading[tabIndex].style.display = 'block';
  }
}

// Generate Detail Table After an Album is Selected by Clicking
const lastClickedItem = [];
albums.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.style.cssText = ` border: 5px solid grey;
                                   `;

    // Center on Clicked Image
    glide.go(`=${evt.target.id}`);

    if (lastClickedItem[0] != evt.target && lastClickedItem[0]) {
      lastClickedItem[0].style.removeProperty('border');
      lastClickedItem.shift();
    } else if (lastClickedItem.length >= 1) {
      lastClickedItem.splice(0, 2);
    }
    lastClickedItem.push(evt.target);

    container.style.cssText = `height: 50vh; 
                                   transition-duration: 1s
                                  `;
    if (!body.contains(document.querySelector('.detail'))) {
      createDetail();
    }
  });
});

const track = document.querySelector('.glide__slides').childNodes;
// track.forEach(item => {
//     item.addEventListener("mouseover", evt => {
//         // item.style.cssText = `transform: scale(1.5)
//         //                      `
//         console.log(item)
//         item.style.transform = "scale(0.7)"

//     })
//     item.addEventListener("mouseleave", evt => {
//         item.style.transform = "scale(1)"

//     })

// })

// Generate Detail Table After an Album is Selected by Enter
body.addEventListener('keydown', (evt) => {
  const active = document.querySelector('.glide__slide--active').querySelector('img');
  if (evt.key === 'Enter') {
    active.style.cssText = ` border: 5px solid grey;
                               `;
    container.style.cssText = `height: 50vh; 
                                   transition-duration: 1s;
                                  `;

    if (!body.contains(document.querySelector('.detail'))) {
      createDetail();
    }
  } else if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') {
    albums.forEach((item) => {
      item.style.removeProperty('border');
    });
  }

  albums.forEach((item) => {
    item.addEventListener('click', (evt) => {
      active.style.removeProperty('border');
      item.style.cssText = `border: 5px solid grey
                                 `;
    });
  });
});
//

// Remove Box When Other Area of Container Is Clicked On Other Than the Images or When ESC is Pressed
body.addEventListener('click', (evt) => {
  const active = document.querySelector('.glide__slide--active').querySelector('img');
  const detail = document.querySelector('.detail');
  console.log(evt.target);
  if (evt.target.nodeName === 'IMG' || evt.target.className === 'detail'
        || evt.target.className === 'tab' || evt.target.className === 'link'
        || evt.target.className === 'contents') {

  } else {
    container.style.cssText = `height: 100vh;
                                   transition-duration: 1s;
                                  `;
    detail.remove();
    active.style.removeProperty('border');
    slider.style.cssText = 'margin-bottom: 100px';
  }
});

body.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        console.log("esc")
    }
})
