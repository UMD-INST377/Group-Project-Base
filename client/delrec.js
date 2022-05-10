const albumDelForm = document.querySelector('#albumDelForm');
const artistDelForm = document.querySelector('#artistDelForm');
const genreDelForm = document.querySelector('#genreDelForm');
const labelDelForm = document.querySelector('#labelDelForm');
albumDelForm.getElementsByClassName.display = 'none';
artistDelForm.getElementsByClassName.display = 'none';
genreDelForm.getElementsByClassName.display = 'none';
labelDelForm.getElementsByClassName.display = 'none';

function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject;
};

albumDelForm.addEventListener('submit', async (SubmitEvent) => {
  SubmitEvent.preventDefault();
  console.log(SubmitEvent);
  const formObj = formToObject(albumDelForm);

  const postResult = await fetch('/api/album', {

    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObj)
  });

  const postResultJSON = await postResult.json();
  console.log('return from POST', postResult);
  console.log('return from POST JSON', postResultJSON);
});

artistDelForm.addEventListener('submit', async (submitEvent) => {
  submitEvent.preventDefault();
  console.log(submitEvent);
  const formObj = formToObject(artistDelForm);

  const postResult = await fetch('/api/artist', {

    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObj)

  });

  const postResultJSON = await postResult.json();
  console.log('return from POST', postResult);
  console.log('return from POST JSON', postResultJSON);
});

genreDelForm.addEventListener('submit', async (submitEvent) => {
  submitEvent.preventDefault();
  console.log(submitEvent);
  const formObj = formToObject(genreDelForm);

  const postResult = await fetch('/api/genre', {

    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObj)

  });

  const postResultJSON = await postResult.json();
  console.log('return from POST', postResult);
  console.log('return from POST JSON', postResultJSON);
});

labelDelForm.addEventListener('submit', async (submitEvent) => {
  submitEvent.preventDefault();
  console.log(submitEvent);
  const formObj = formToObject(labelDelForm);

  const postResult = await fetch('/api/label', {

    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObj)

  });

  const postResultJSON = await postResult.json();
  console.log('return from POST', postResult);
  console.log('return from POST JSON', postResultJSON);
});

// CREATES TABLE FOR LABEL USING JSON DATA FROM DATABASE
tableMakeLabel = fetch('/api/label').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData += `<tr>
      <td>${values.label_id}</td>
      <td>${values.label_name}</td>
    </tr>`;
  });
  document.getElementById('table_body_label').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});
  
// Selectors for different tables within our application/database
const x = document.getElementById('artist');
const y = document.getElementById('album');
const z = document.getElementById('genre');
const a = document.getElementById('label');
x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
a.style.display = 'none';
  
// Function to display full details for records
function changeTable() {
  let dropdown = document.getElementById('selectBox')
  let index = dropdown.selectedIndex;
  if (index === 1) {
    x.style.display = 'block';
    y.style.display = 'none';
    z.style.display = 'none';
    a.style.display = 'none';
  }
  
  else if (index === 2) {
    y.style.display = 'block';
    x.style.display = 'none';
    z.style.display = 'none';
    a.style.display = 'none';
  }
  
  else if (index === 3) {
    z.style.display = 'block';
    x.style.display = 'none';
    y.style.display = 'none';
    a.style.display = 'none';
  }
  
  else if (index === 4) {
    a.style.display = 'block';
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'none'
  }
  else if (index !== 1 || index !== 2 || index !== 3 || index !== 4) {
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'none';
    a.style.display = 'none';
  }
}

// Functon to Show Form to Delete Table
function deleteTable() {
  let dropdown = document.getElementById('delBox')
  let index = dropdown.selectedIndex;
  if (index === 1) {
    albumForm.style.display = 'none';
    artistForm.style.display = 'block';
    genreForm.style.display = 'none';
    labelForm.style.display = 'none';
  }
  
  else if (index === 2) {
    albumForm.style.display = 'block';
    artistForm.style.display = 'none';
    genreForm.style.display = 'none';
    labelForm.style.display = 'none';
  }
  
  else if (index === 3) {
    albumForm.style.display = 'none';
    artistForm.style.display = 'none';
    genreForm.style.display = 'block';
    labelForm.style.display = 'none';
  }
  
  else if (index === 4) {
    albumForm.style.display = 'none';
    artistForm.style.display = 'none';
    genreForm.style.display = 'none';
    labelForm.style.display = 'block';
  }
  else if (index !== 1 || index !== 2 || index !== 3 || index !== 4) {
    albumForm.style.display = 'none';
    artistForm.style.display = 'none';
    genreForm.style.display = 'none';
    labelForm.style.display = 'none';
  }
}
