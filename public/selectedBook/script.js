async function DisplayPic(bookId) {
  const html = `<img src="../bookPics/book_id_${bookId}.jpg" 
  alt="book cover picture" onerror="if (this.src != '../bookPics/placeholder.jpg') 
  this.src = '../bookPics/placeholder.jpg';"></img>`;

  const suggestions = document.querySelector('#BookPicture');
  suggestions.innerHTML = html;
}
async function buildMetaData(book) {
  console.log(book);

  async function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  let genres = book.genre_name ? book.genre_name : 'no genre';
  genres = await toTitleCase(`${genres}`);

  const publicDomain = book.public_domain === 1 ? 'Yes' : 'No';
  const movement = book.movement_name ? book.movement_name : 'N/A';
  if (book.google_user_percentage >= 80) {
    judgement = 'goodRating';
  } else if (book.google_user_percentage >= 70 && book.google_user_percentage < 80) {
    judgement = 'mediumRating';
  } else { judgement = 'badRating'; }

  const html = `<ul>
  <li>Book Title: ${book.title}</li>
  <li>Author: ${book.first_name} ${book.last_name}</li>
  <li>Genre: ${genres}</li>
  <li>Rating (Google User Percentage): <span id="${judgement}">${book.google_user_percentage}/100 </span></li>
  <li>Original Language: ${book.original_language}</li>
  <li>Publish Year: ${book.publish_year}</li>
  <li>Public domain: ${publicDomain}</li>
  <li>Associated Artistic Movement: ${movement}</li>
  <li>Publisher: ${book.publisher_name}</li>
  <li>Retailer: ${book.retailer_name}</li>
  <li>Amount Sold: ${book.amount_sold}</li>
  <li>Book Description: ${book.book_description}</li>
</ul>`;
  const suggestions = document.querySelector('#bookMetaData');
  suggestions.innerHTML = html;
  DisplayPic(book.book_id);
}

async function windowActions() {
  const params = new URLSearchParams(window.location.search);
  const chosenId = params.get('bookId');
  const request = await fetch(`/api/popularBooksExpanded/${chosenId}`);
  const book = await request.json();
  buildMetaData(book[0]);
}

window.onload = windowActions;
