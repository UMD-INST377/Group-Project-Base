const albumDelForm = document.querySelector('#albumDelForm');
const artistDelForm = document.querySelector('#artistDelForm');
const genreDelForm = document.querySelector('#genreDelForm');
const labelDelForm = document.querySelector('#labelDelForm');
albumDelForm.getElementsByClassName.display = 'none';
artistDelForm.getElementsByClassName.display = 'none';
genreDelForm.getElementsByClassName.display = 'none';
labelDelForm.getElementsByClassName.display = 'none';

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
