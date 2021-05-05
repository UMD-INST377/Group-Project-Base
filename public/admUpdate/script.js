async function getData() {
  const request = await fetch('/api/popularBooks');
  const json = await request.json(request);
  return json.data;
}

async function handleButtonClick(event) {
  const id = document.querySelector('#bookId');
  const title = document.querySelector('#title');
  console.info('Clicked');
  const url = '/api/popularBooks';
  const put = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({book_id: id.value, title: title.value})
  });
}

async function windowActions() {
  booksData = await getData();
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', (event) => { handleButtonClick(event); });
}

window.onload = windowActions;