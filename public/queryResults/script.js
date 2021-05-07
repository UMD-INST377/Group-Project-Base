// creates boxes that are html and populates boxes with author names

function buildResultBoxes (validBooks) {
  // validBook[0] is the book_id
  // validBook[1] is a title
  // validBook[2] is an author
  console.log(validBooks);
  const html = validBooks.map((validBook) => `<div class="result box">
    <div class="imageArea">
      <a href="../selectedBook/?bookId=${validBook[0]}">
      <img src="../bookPics/book_id_${validBook[0]}.jpg" alt="book cover picture" onerror="if (this.src != '../bookPics/placeholder.jpg') this.src = '../bookPics/placeholder.jpg';">
      </a>
    </div>

    <div class="bookInfo">
      <h3 class="resultTitle">
        <a href="../selectedBook/?bookId=${validBook[0]}">${validBook[1]}</a>
      </h3>
      <hr />
      <p>By: ${validBook[2]}</p>
    </div>
  </div>`).join('');

  const suggestions = document.querySelector('#resultContainer'); // this is where the above html should be added
  suggestions.innerHTML = html;
}

async function filterBooks(urlParams, books) {
  const titleSearch = urlParams.get('titleSearch').toLowerCase();
  const authorSearch = urlParams.get('authorSearch').toLowerCase();
  const minRating = urlParams.get('ratingSearch');
  const genreSearch = urlParams.get('genreSearch').toLowerCase();

  console.log(books);
  const validBooks = [];

  for (const book of books) {
    const title = book.title.toLowerCase();
    const author = `${book.first_name} ${book.last_name}`.toLowerCase();
    const rating = book.google_user_percentage ? book.google_user_percentage : 0;
    const genre = book.genre_name ? book.genre_name : "no genre";

    if (title.includes(titleSearch)
    && author.includes(authorSearch)
    && rating >= minRating
    && genre.includes(genreSearch)) {
      validBooks.push([book.book_id, book.title, `${book.first_name} ${book.last_name}`]);
    }
  }
  buildResultBoxes(validBooks);
}

async function windowActions() {
  const request = await fetch('/api/popularBooksExpanded');
  const books = await request.json();
  const params = new URLSearchParams(window.location.search);
  filterBooks(params, books);
}

window.onload = windowActions;