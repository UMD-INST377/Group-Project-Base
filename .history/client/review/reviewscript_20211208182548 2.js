// import chalk from 'chalk';
// import fetch from 'node-fetch';

// import db from '../database/initializeDB.js';

// const router = express.Router();

// router.get('/', (req, res) => {
//   console.log('You touched the default route');
// });

function windowActions() {
  const dropdown = document.querySelector('#dropdown');

  dropdown.onclick = function(e) { 
    console.log(e)
    e.path[3].classList.toggle('is-active');
  }
}

function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject
}

function test(e) {
  console.log(e);
  // e.target.parentnode.classList.toggle('is-active');
}

window.onload = windowActions;