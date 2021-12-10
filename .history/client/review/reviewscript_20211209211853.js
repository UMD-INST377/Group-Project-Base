function windowActions() {
  const inputForm = document.querySelector('#form');


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

  
  async function test(e) {
    e.preventDefault();
    console.log(e);
    const formObject = formToObject(inputForm);
    console.log(formObject);
  // e.target.parentnode.classList.toggle('is-active');
  await fetch('/api/review', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  }
  )
  }

  inputForm.addEventListener('submit', test);
}

window.onload = windowActions;