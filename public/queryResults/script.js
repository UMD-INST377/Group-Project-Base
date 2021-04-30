
//creates boxes that are html and populates boxes with author names

function buildResultBoxes (validBooks) {

  // validBook[0] is a title
  // validBook[1] is an author
  console.log(validBooks);
  const html = validBooks.map((validBook) => `<div class="result box">
    <div class="imageArea">
      <a href="../selectedBook/">
        <img
          src="example_image.jpg"
          alt="Example of where pic would go"
        />
      </a>
    </div>

    <div class="bookInfo">
      <h3 class="resultTitle">
        <a href="../selectedBook/"
          >${validBook[0]}</a
        >
      </h3>
      <hr />
      <p>By: ${validBook[1]}</p>
    </div>
  </div>`).join('');

  const suggestions = document.querySelector('#resultContainer'); // this is where the html above should be added
  suggestions.innerHTML = html;
}

// this function does the keyword and the books
// keyword is what the user entered and books is the actual data
async function filterWithKeyword(chosenkeyword, books) {
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
      validBooks.push([book.title, author]);
    }
  }
  buildResultBoxes(validBooks);
}

async function windowActions() {
  const request = await fetch('/api/popularBooksExpandedNoGenre');
  const books = await request.json();
  const params = new URLSearchParams(window.location.search);

  // in case nothing is entered
  if (typeof params.get('keyword') !== 'undefined') {
    filterWithKeyword(params.get('keyword'), books);
  }
}

window.onload = windowActions;