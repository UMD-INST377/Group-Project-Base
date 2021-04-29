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

async function filterBooks(chosenkeyword, books) {
  const keyword = chosenkeyword.toLowerCase();

  console.log(keyword);
  console.log(books);
  const validBooks = [];

  for (const book of books) {
    title = book.title.toLowerCase();
    if (title.includes(keyword)) {
      console.log(book);
      // add other filters here???
      author = `${book.first_name} ${book.last_name}`;
      validBooks.push([book.book_id, book.title, author]);
    }
  }
  buildResultBoxes(validBooks);
}

async function windowActions() {
  const request = await fetch('/api/popularBooksExpandedNoGenre');
  const books = await request.json();
  const params = new URLSearchParams(window.location.search); // this code allows you to access the "/?" part of the url
  filterBooks(params.get('keyword'), books);
}

window.onload = windowActions;