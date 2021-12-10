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
async function fetchRequest(name, id) {
  const data = formToObject(document.querySelector('#form-id'));

  const response = await fetch('/api/film', {
    method: data.answer,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  console.log(data); 
} 
const button = document.querySelector('#submit-button');
button.onclick = fetchRequest;