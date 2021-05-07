async function getBookData() {
  const endpoint = '/api/popularBooks/';
  const request = await fetch(endpoint);
  const result = await request.json();

  // Create an array then push data from the json to it
  const arr = [];
  arr.push(result.data);
  console.log(arr[0]);

  const randomArr = [];
  const rLength = arr[0].length;

  // For loop for a random book
  let i;
  for (i = 0; i < 1; i++) {
    rVariable = Math.floor(Math.random() * rLength);
    randomArr.push(arr[0][rVariable]);
  }

  // Target a specific box and add the book info to it
  const target = document.querySelector('#bookTitle');
  const appendTitle = document.createElement('h2');
  const appendId = document.createElement('h2');
  const appendImg = document.createElement('a');
  appendTitle.innerHTML = `<h2>Book Title: ${randomArr[0].title}</h2>`;
  appendId.innerHTML = `<h2>Book ID: ${randomArr[0].book_id}</h2>`;
  appendImg.innerHTML = `<img src='../bookPics/book_id_${randomArr[0].book_id}.jpg'>`;
  target.append(appendTitle);
  target.append(appendId);
  target.append(appendImg);

  // console.log(randomArr[0].title)
}

async function windowActions() {
  getBookData();
}

window.onload = windowActions();