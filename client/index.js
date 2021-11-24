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
const albums = document.querySelectorAll('img');
const search = document.querySelector('.fa-search');

// Create Search Bar
function createSearchBar() {
    const searchBox = document.createElement('label');
    searchBox.className = 'search';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.required = 'required';

    const searchPlaceholder = document.createElement('span');
    searchPlaceholder.className = 'placeholder';
    searchPlaceholder.innerHTML = 'Search an Album';

    searchBox.append(searchInput, searchPlaceholder);
    body.appendChild(searchBox);
}

// Request and Compile PRICES Information
// const pricesRequest = await fetch('http://localhost:3000/api/prices');
const pricesRequest = await fetch('https://inst377-vinylweb.herokuapp.com/api/prices');
const allPrices = await pricesRequest.json();
const prices = new Object();
for (const currentPrice in allPrices) {
    prices[currentPrice] = allPrices[currentPrice];
}

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

// PRICES Contents
const prices_content = document.createElement('div');
prices_content.className = 'heading';
prices_content.innerHTML = `
    <div class="items items-prices">
        <div class="item">
          <i class="fas fa-dice-six"></i>
          <p class="header">Highest Discog Price</p>
          <p class="result">$${prices[id].highest_discog}</p>
        </div>
      <div class="item">
          <i class="fas fa-dice-three"></i>
          <p class="header">Average Discog Price</p>
          <p class="result">$${prices[id].average_discog}</p>
      </div>
      <div class="item">
          <i class="fas fa-dice-one"></i>
          <p class="header">Lowest Discog Price</p>
          <p class="result">$${prices[id].lowerst_discog}</p>
      </div>
    </div>
      `;

// Create Search Box When Search Icon is Clicked On
search.addEventListener('click', (evt) => {
    if (!body.contains(document.querySelector('.search'))) {
        createSearchBar();
    }
});

// Generate Detail Table After an Album is Selected by Clicking
const lastClickedItem = [];
albums.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.target.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                                 transform: scale(0.8);
                                 transition-duration: 0.5s`;

        // Center on Clicked Image
        glide.go(`=${evt.target.id}`);

        if (lastClickedItem[0] != evt.target && lastClickedItem[0]) {
            lastClickedItem[0].style.removeProperty('box-shadow');
            lastClickedItem[0].style.removeProperty('transform');
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

// Remove Detail Box When Area Outside of Container Is Clicked On, Other Than the Images
body.addEventListener('click', (evt) => {
    const active = document.querySelector('.glide__slide--active').querySelector('img');
    const detail = document.querySelector('.detail');
    const searchBox = document.querySelector('.search')

    if (evt.target.nodeName === 'IMG' || evt.target.nodeName === 'INPUT' || evt.target.className === 'detail' ||
        evt.target.className === 'tab' || evt.target.className === 'link' ||
        evt.target.className === 'contents' || evt.target.nodeName === 'I') {} else {
        container.style.cssText = `height: 100vh;
                               transition-duration: 1s;
                                    `;
        detail.remove();
        if (body.contains(searchBox)) {
            searchBox.remove();
        }
        active.style.removeProperty('box-shadow');
        active.style.removeProperty('transform');
    }
});

// Generate Detail Table After an Album is Selected by Enter
// Delete Detail Table When ESC is Entered
body.addEventListener('keydown', (evt) => {
    const active = document.querySelector('.glide__slide--active').querySelector('img');
    const detail = document.querySelector('.detail');
    if (evt.key === 'Enter') {
        active.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                             transform: scale(0.8);
                             transition-duration: 0.5s`;
        container.style.cssText = `height: 50vh; 
                                   transition-duration: 1s;
                                  `;
        if (!body.contains(document.querySelector('.detail'))) {
            createDetail();
        }
    } else if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') {
        albums.forEach((item) => {
            item.style.removeProperty('box-shadow');
            item.style.removeProperty('transform');
        });
    }
    albums.forEach((item) => {
        item.addEventListener('click', (evt) => {
            active.style.removeProperty('box-shadow');
            active.style.removeProperty('transform');
            item.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                             transform: scale(0.8);
                             transition-duration: 0.5s
                                 `;
        });
    });

    // Remove Detail Table
    if (evt.key === 'Escape' && detail) {
        container.style.cssText = `height: 100vh;
                                   transition-duration: 1s;
                                  `;
        detail.remove();
        active.style.removeProperty('box-shadow');
        active.style.removeProperty('transform');
    }
});
}
albums.forEach((item) => {
    item.addEventListener('click', (evt) => {
        active.style.removeProperty('box-shadow');
        active.style.removeProperty('transform');
        item.style.cssText = ` box-shadow: 33px 32px 0px -5px rgba(0,0,0,0.29);
                             transform: scale(0.8);
                             transition-duration: 0.5s
                                 `;
    });
});

// Remove Detail Table
if (evt.key === 'Escape' && detail) {
    container.style.cssText = `height: 100vh;
                                   transition-duration: 1s;
                                  `;
    detail.remove();
    active.style.removeProperty('box-shadow');
    active.style.removeProperty('transform');
}
});