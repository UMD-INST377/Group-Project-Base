const myDisplay = document.getElementsByClassName('displayMe')[0];
const left = document.getElementsByClassName('leftarrow')[0];
const right = document.getElementsByClassName('rightarrow')[0];

async function loadMyData() {
  myData = [];
  const products = await fetch('/api/products/');
  const jsonProducts = await products.json();

  jsonProducts.data.forEach((product) => {
    myData.push(product.image_link);
  });

  newMyData = await myData;
  return newMyData;
}

function leftShift() {
  const one = data.shift();
  data.push(one);
  const {display} = data[0];
  console.log(display);
  myDisplay.setAttribute('src', display);
}

function rightShift() {
  const last = data.pop();
  data.unshift(last);
  const {display} = data[0];
  console.log(display);
  myDisplay.setAttribute('src', display);
}

async function windowActions() {
  data = await loadMyData();

  left.addEventListener('click', leftShift);

  right.addEventListener('click', rightShift);
}

window.onload = windowActions();
