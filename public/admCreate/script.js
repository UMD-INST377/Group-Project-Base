async function handleButtonClick(event) {
    //const id = document.querySelector('#bookId');
    const title = document.querySelector('#title');
    const author_name = document.querySelector('#author_name');
    const original_language = document.querySelector('#original_language');
    // const genre = document.querySelector('#genre');
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
            book_id: null,
            title: title.value,
            amount_sold: amount_sold.value,
            publish_year: null,
            google_user_percentage: null,
            authors_author_id: null,
            publishers_publisher_id: null,
            artistic_movement_artistic_movement_id: null,
            book_retailers_retailer_id: null,
            ook_description_description_id: null,
            public_domain: public_domain.value,
            original_language: original_language.value
        })
    })
}
  
 function windowActions() {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (event) => {
        // event.preventDefault();
        handleButtonClick(event); 
    });
  }
  
  window.onload = windowActions;