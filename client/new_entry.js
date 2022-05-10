/* eslint-disable linebreak-style */
/* eslint-disable no-console */

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: formDataJsonString
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson({ url, formData });
    console.log({ responseData });
  } catch (error) { console.error(error); }
}

async function mainEvent() {
  console.log('script loaded');

  // const plant = document.querySelector('#plant_id');
  // const location = document.querySelector('#location');
  // const submit = document.querySelector('.submit_button');
  const form = document.querySelector('.new_form');

  form.addEventListener('submit', handleFormSubmit);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());