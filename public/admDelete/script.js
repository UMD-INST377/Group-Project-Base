async function windowActions() {
  async function displayIdSearch(event) {
    // confirms that the admin knows what book they are deleting
    // deleteOrCancel function occurs at the end and creates the respective buttons
    // function is wrapped in try/catch in order to send alert if book_id not found
    async function deleteOrCancel (chosenId) {
      // build cancel button
      const cancelButton = document.querySelector('#cancelButton');
      cancelButton.addEventListener('click', () => { window.location.reload(); });

      // build delete button
      async function deleteBook() {
        const url = '/api/popularBooks';
        const routeDelete = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            bookId: chosenId
          })
        });
        alert(`Book Id ${chosenId} has been deleted`);
        window.location.reload();
      }

      const deleteButton = document.querySelector('#deleteButton');
      deleteButton.addEventListener('click', () => { deleteBook(); });
    }
    try {
      event.preventDefault();
      console.log('click');

      // Extract which book should be deleted from searchbar
      const bookId = document.querySelector('#bookId').value;
      console.log('Form entry is', bookId);

      // get which book is being searched for
      const endpoint = `/api/popularBooks/${bookId}`;
      const request = await fetch(endpoint);
      const result = await request.json();
      const chosenBook = await result[0];

      console.log('Chosen book is', chosenBook.title);

      // Target a specific box and add the book info to it
      const target = document.querySelector('#deleteInfoContainer');
      const buttonTarget = document.querySelector('#deleteCancelButtons');

      const dividingLine = document.createElement('hr');
      const appendTitle = document.createElement('h2');
      const appendId = document.createElement('h2');
      const appendImg = document.createElement('a');

      const appendCancelButton = document.createElement('button');
      const appendDeleteButton = document.createElement('button');

      dividingLine.innerHTML = '<hr>';
      appendTitle.innerHTML = `<h2>Book Title: ${chosenBook.title}</h2>`;
      appendId.innerHTML = `<h2>Book ID: ${chosenBook.book_id}</h2>`;
      appendImg.innerHTML = `<img src="../bookPics/book_id_${chosenBook.book_id}.jpg" alt="book cover picture" onerror="if (this.src != '../bookPics/placeholder.jpg') this.src = '../bookPics/placeholder.jpg';"></img>`;
      appendCancelButton.innerHTML = '<button class="button is-normal" id="cancelButton">Cancel action</button>';
      appendDeleteButton.innerHTML = '<button class="button is-danger" id="deleteButton">Delete Book From Database</button>';

      target.append(dividingLine);
      target.append(appendTitle);
      target.append(appendId);
      target.append(appendImg);
      buttonTarget.append(appendCancelButton);
      buttonTarget.append(appendDeleteButton);

      // this prevents searching for running twice on a webpage
      const submitButton = document.querySelector('#findByIdButton');
      submitButton.removeEventListener('click', buildPage);

      deleteOrCancel(chosenBook.book_id);
    } catch (err) { alert('Error in search. Likely that no book with that Id exists.'); }
  }

  const submitButton = document.querySelector('#findByIdButton');
  const buildPage = (event) => { displayIdSearch(event); };
  submitButton.addEventListener('click', buildPage);
}

window.onload = windowActions();