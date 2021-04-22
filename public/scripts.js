const myDisplay = document.getElementsByClassName('displayMe')[0];
const left = document.getElementsByClassName('leftarrow')[0];
const right = document.getElementsByClassName('rightarrow')[0];

async function loadMyData() {

    myData = []
    const products = await fetch('/api/products/');
    const jsonProducts = await products.json();

    jsonProducts["data"].forEach((product) => {
        myData.push(product.image_link);
    });

    newMyData = await myData;
    return newMyData;
}

data = loadMyData();
console.log(data);

function leftShift() {
    const one = data.shift();
    data.push(one);
    display = data.slice(0);
    myDisplay.setAttribute('src', display);
    console.log(data);
}

function rightShift() {
    const last = data.pop();
    data.unshift(last);
    display = data.slice(0);
    myDisplay.setAttribute('src', display);
    console.log(data);
}

left.addEventListener('click', leftShift);

right.addEventListener('click', rightShift);