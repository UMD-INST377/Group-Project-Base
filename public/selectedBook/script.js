async function DisplayOneGenre (book) {
  console.log('One Genre');
  console.log(book);
  const html = ``;
  const suggestions = document.querySelector('#bookMetaData'); // this is where the above html should be added
  suggestions.innerHTML = html;
}

async function DisplayMultiGenre (book) {
  console.log('Two or more Genres');
}

async function windowActions() {
  const params = new URLSearchParams(window.location.search);
  const chosenId = params.get('bookId');
  const request = await fetch(`/api/popularBooksExpanded/${chosenId}`);
  const book = await request.json();
  if (book.length === 1) {
    DisplayOneGenre(book);
  } else {
    DisplayMultiGenre(book);
  }
}

window.onload = windowActions;