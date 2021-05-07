import { classToInvokable } from 'sequelize/types/lib/utils';
import Artists from '../models/Artists';
import Songs from '../models/Songs';

// Commented out to see if I could pin-point issue

/* function createTable(json) {
  if (json == null || json.length === 0) return;

  function createTableHead(table) {
    const createTableHead = table.createTHead();
    const row = tableHead.insertRow();

    for (key in json.data[0]) {
      const th = document.createElement('th');
      const label = document.createTextNode(key);
      th.appendChild(label);
      row.appendChild(th);
    }
    console.log('Done making table head');
  }
  function createTableBody(table) {
    for (key in json.data) {
      const row = table.insertRow();
      for (key2 in json.data[key]) {
        const cell = row.insertCell();
        const text = document.createTextNode(json.data[key][key2]);
        classToInvokable.appendChild(text);
      }
    }
    console.log('Done making table body');
  }

  // find pop 1-10
  albumPop.getAll = function(ap) {
    post.findAll({
      where: {
        ALBUM_POPULARITY: {
          [Op.gte]: 10
        }
      }
    });
  };
  const table = document.createElement('table');
  document.body.appendChild(table);
  createTableBody(table);
  createTableHead(table);
  table.setAttribute('class', 'table is-striped');
}
*/

// Top 10 Songs, Artists, and Albums
const copiedSongs = { ...Songs};
const copiedArtists = { ...Artists};
const copiedAlbums = { ...Albums};

// Copy of Data from Songs, Artists, and Albums in ascending order for Popularity
copiedArtists.sort((a, b) => parseFloat(a.ARTIST_POPULARITY)
  - parseFloat(b.ARTIST_POPULARITY));

copiedSongs.sort((a, b) => parseFloat(a.SONG_POPULARITY) - parseFloat(b.SONG_POPULARITY));

copiedAlbums.sort((a, b) => parseFloat(a.ALBUM_POPULARITY)
- parseFloat(b.ALBUM_POPULARITY));

// Only gives us top 10 results
const topSongs = copiedSongs.slice(0, 10);
const topArtists = copiedArtists.slice(0, 10);
const topAlbums = copiedAlbums.slice(0, 10);

// Creating table using Javascript
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of data) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

const table = document.querySelector('table');
const data = Object.keys(topSongs[0]);

generateTableHead(table);