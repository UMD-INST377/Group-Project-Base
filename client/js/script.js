document.addEventListener('DOMContentLoaded', async () => {

async function postFormDataAsJson({url, formData}) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMsg = await response.text();
        throw new Error(errorMsg);
    }
    return response.json();
}

async function formSubmission(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = 'api/artist';

    try {
        const formData = new FormData(form);

        const responseData = await postFormDataAsJson({url, formData});

        console.log({responseData});
    }
    catch (error) {
        console.error(error);
    }
}


const contributeForm = document.querySelector('.form_block');
contributeForm.addEventListener('submit', formSubmission);
})


/*
const submitButton = document.querySelector('button[type="submit"]');

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

  const formObj = formToObject(form);

  let artist = {
      first_name: formObj[0],
      last_name: formObj[1]
  };

  const postResult = await fetch('/api/artist', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(artist)
  });
  const postResultJSON = await postResult.json();

*/

