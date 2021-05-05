async function handleButtonClick(event) {
    //const id = document.querySelector('#bookId');
    const title = document.querySelector('#title');
    const author_name = document.querySelector('#author_name');
    const original_language = document.querySelector('#original_language');
    const genre = document.querySelector('#genre');
    const amount_sold = document.querySelector('#amount_sold');
    const public_domain = document.querySelector('#public_domain');
    const book_rating = document.querySelector('#book_rating');

    console.info('Clicked');
    const url = '/api/popularBooks';
    const postData = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            title: title.value,
            amount_sold: amount_sold.value,
            public_domain: public_domain.value,
            original_language: original_language.value
        })
    });
}
  
 function windowActions() {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (event) => { handleButtonClick(event); });
  }
  
  window.onload = windowActions;