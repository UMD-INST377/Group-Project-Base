async function windowActions () {
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
    const form = document.querySelector('#sales');
    const data = formToObject(form);
    console.log(data);
    const response = await fetch('/api/sales', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  
    });
  }
  
  const button = document.querySelector('#delete_button');
  button.onclick = formSubmit;
}
  
window.onload = windowActions;