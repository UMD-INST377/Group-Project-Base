const myDisplay = document.getElementsByClassName('displayMe')[0];
const left = document.getElementsByClassName('leftarrow')[0];
const right = document.getElementsByClassName('rightarrow')[0];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

async function loadMyData() {
  const products = await fetch('/api/products/');
  const jsonProducts = await products.json();

  // gets an array of 5 random, unique index values that is within the range of jsonProducts
  const indexArray = [];
  while (indexArray.length < 5) {
    const randomNumber = getRandomIntInclusive(0, jsonProducts.data.length - 1);
    if (indexArray.indexOf(randomNumber) === -1) {
      indexArray.push(randomNumber);
    }
  }

  // gets the link associated to the 5 random index values above
  const myData = indexArray.map((element) => jsonProducts.data[element].image_link);

  newMyData = await myData;
  return newMyData;
}

function leftShift() {
  const one = data.shift();
  data.push(one);
  const display = data[0];
  console.log(display);
  myDisplay.setAttribute('src', display);
}

function rightShift() {
  const last = data.pop();
  data.unshift(last);
  const display = data[0];
  console.log(display);
  myDisplay.setAttribute('src', display);
}

async function windowActions() {
  data = await loadMyData();

  left.addEventListener('click', leftShift);

  right.addEventListener('click', rightShift);
}

window.onload = windowActions();
