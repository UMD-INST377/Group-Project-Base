async function handleButtonClick(event) {
  async function nullOnEmpty(formEntry) {
    if (!formEntry) {
      return null;
    } return formEntry;
  }
  const title = await nullOnEmpty(document.querySelector('#title').value);
  const authorId = document.querySelector('#authorId').value;
  const originalLanguage = await nullOnEmpty(document.querySelector('#originalLanguage').value);
  const amountSold = await nullOnEmpty(document.querySelector('#amountSold').value);
  const publicDomain = await nullOnEmpty(document.querySelector('#publicDomain').value);
  const bookRating = await nullOnEmpty(document.querySelector('#bookRating').value);
  const publishYear = await nullOnEmpty(document.querySelector('#publishYear').value);
  const publisherId = document.querySelector('#publisherId').value;
  const artisticMovementId = await nullOnEmpty(document.querySelector('#artisticMovementId').value);
  const retailerId = document.querySelector('#retailerId').value;
  const descriptionId = document.querySelector('#descriptionId').value;

  console.info('Clicked');
  const url = '/api/popularBooks';
  const postData = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      authors_author_id: authorId,
      original_language: originalLanguage,
      amount_sold: amountSold,
      public_domain: publicDomain,
      google_user_percentage: bookRating,
      publish_year: publishYear,
      publishers_publisher_id: publisherId,
      artistic_movement_artistic_movement_id: artisticMovementId,
      book_retailers_retailer_id: retailerId,
      book_description_description_id: descriptionId
    })
  });
}

function windowActions() {


  async function nullOnEmpty(formEntry) {
    if (!formEntry) {
      return null;
    } return formEntry;
  }

  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', (event) => {
    handleButtonClick(event);
  });
}

window.onload = windowActions;