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
}

async function mainEvent() {

  const form = document.querySelector('.submit_song');
  const submit = document.querySelector('.submit_button');

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    const formObj = formToObject(form);
    console.log('check the form for filters', formObj);
    const postResult = await fetch('http://localhost:3000/api/songDisplay/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    });
    const postResultJSON = await postResult.json();
    console.log('return from Post', postResult);
    console.log('return from Post JSON', postResultJSON);
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());