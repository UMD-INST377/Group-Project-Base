async function handleButtonClick(event) {
  const bookId = document.querySelector('#bookId');
  const title = document.querySelector('#title');
  const amountSold = document.querySelector('#amountSold');
  const publishYear = document.querySelector('#publishYear');
  const originalLanguage = document.querySelector('#originalLanguage');
  const googleUserPercentage = document.querySelector('#googleUserPercentage');
  const authorId = document.querySelector('#authorId');
  const publisherId = document.querySelector('#publisherId');
  const artisticMovementId = document.querySelector('#artisticMovementId');
  const retailerId = document.querySelector('#retailerId');
  const bookDescriptionId = document.querySelector('#bookDescriptionId');

  console.log('Clicked');
  const url = '/api/popularBooks';

  const put = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bookId: bookId.value,
      title: title.value,
      amountSold: amountSold.value,
      publishYear: publishYear.value,
      originalLanguage: originalLanguage.value,
      googleUserPercentage: googleUserPercentage.value,
      publicDomain: publicDomain.value,
      authorId: authorId.value,
      publisherId: publisherId.value,
      artisticMovementId: artisticMovementId.value,
      retailerId: retailerId.value,
      bookDescriptionId: bookDescriptionId.value
    })
  });
}

async function windowActions() {
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', (event) => { handleButtonClick(event); });
}

window.onload = windowActions;