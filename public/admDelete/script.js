async function getBookData() {
  const endpoint = '/api/popularBooks/';
  const request = await fetch(endpoint);
  const result = await request.json();

  // Create an array then push data from the json to it
  const arr = [];
  arr.push(result.data);
  //console.log(arr[0]);

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
  const appendObj = document.createElement('h2');
  appendObj.innerHTML = `<h2>Book Selected: ${randomArr[0].title}</h2>`;
  target.append(appendObj);

  //console.log(randomArr[0].title)
}


async function windowActions() {
  getBookData();
}

window.onload = windowActions();