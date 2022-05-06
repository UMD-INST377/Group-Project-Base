/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
let mainCollection;
let typeCollection;
let infoCollection;
let restCollection;

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

docReady(() => {
  fetch('api/cuisine')
    .then((response) => response.json())
    .then((data) => createHtmlList(data));

  fetch('api/util/type')
    .then((response) => response.json())
    .then((data) => setter(data, 1));

  fetch('api/util/info')
    .then((response) => response.json())
    .then((data) => setter(data, 2));

    fetch('api/util/restaurant')
    .then((response) => response.json())
    .then((data) => setter(data, 3));
});

function setter (json, variable) {
  if (variable === 1) {
    typeCollection = json[0];
  } else if(variable === 2) {
    infoCollection = json[0];
  } else{
    restCollection = json[0];
  }
}

function createHtmlList(collection) {
  output = document.getElementById('cuisineTable');
  mainCollection = collection[0];
  let tableContent = '<tr><th>cuisine_id</th><th>cuisine</th><th>Checkbox</th></tr>';

  for (i = 0; i < collection[0].length; i++) {
    tableContent += `<tr><td>${collection[0][i].type_id}</td>`
      + `<td>${collection[0][i].type}</td>`
      + `<td><input type='checkbox' id=${collection[0][i].type_id}></td></tr>`;
  }
  output.innerHTML = tableContent;
}

async function cuisineSubmit() {
  const collection = [];
  for (i = 0; i < mainCollection.length; i++) {
    const check = document.getElementById(mainCollection[i].type_id);

    if (check.checked === true) {
      collection.push({
        type_id: parseInt(mainCollection[i].type_id),
        type: String(mainCollection[i].type)
      });
    }
  }

  output = document.getElementById('resultTable');
  let tableContent = '<th>Restaurant Name</th><th>cuisine type</th>';
  let infoList = [];
  let returantListID = [];

  for (i = 0; i < collection.length; i++) {
    for (j = 0; j < typeCollection.length; j++) {
      if (collection[i].type_id === typeCollection[j].type_id) {
        returantListID.push({
          restaurant_info_id: parseInt(typeCollection[j].restaurant_info_id),
          type_id: parseInt(typeCollection[j].type_id),
          type: String(collection[i].type)
        });
      }
    }
  }

  for (i = 0; i < returantListID.length; i++) {
    for (j = 0; j < infoCollection.length; j++) {
      if (returantListID[i].restaurant_info_id === infoCollection[j].restaurant_info_id) {
        infoList.push({
          restaurant_info_id: parseInt(infoCollection[j].restaurant_info_id),
          restaurant_id: parseInt(infoCollection[j].restaurant_id),
          type: String(returantListID[i].type)
        });
      }
    }
  }
    for (i = 0; i < infoList.length; i++) {
      for (j = 0; j < restCollection.length; j++) {
        
        if (infoList[i].restaurant_id === restCollection[j].restaurant_id) {
          // console.log("here");
          // console.log(infoList[i]);
          tableContent += `<tr><td>${restCollection[j].restaurant_name}</td>
          <td>${String(infoList[i].type)}</td></tr>`;

        }
      }
    output.innerHTML = tableContent;
  }
}