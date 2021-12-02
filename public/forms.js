async function windowActions() {
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

  async function formSubmit() {
    const form = document.querySelector('#form');
    const obj = formToObject(form);
    console.log(obj);
    fetch('api/nba-players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
  }

  const button = document.querySelector('#submit');

  button.onclick = formSubmit;
}
window.onload = windowActions;