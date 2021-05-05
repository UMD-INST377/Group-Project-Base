async function windowActions() {
  const mainDiv = document.querySelector('.box');
  const str = localStorage.getItem('Array');
  const data = JSON.parse(str);

  console.log(data);

  mainDiv.innerHTML = '';
  data.forEach((element) => {
    const divElem = document.createElement('div'); // div surrounding each furniture preference
    divElem.className = 'resultEntry';

    const imgElem = document.createElement('img'); // image of each piece of furniture
    imgElem.src = element.image_link;
    imgElem.alt = 'Image of furniture piece';

    const pElem = document.createElement('p'); // h3 that has the family name of furniture
    pElem.className = 'furnitureName';
    pElem.innerHTML = '<b>Ikea Family Name: </b>';
    pElem.innerHTML += element.family_name;
    pElem.innerHTML += '<br/>';
    pElem.innerHTML += '<b>Item Description: </b>';
    pElem.innerHTML += element.product_description;
    pElem.innerHTML += '<br/>';
    pElem.innerHTML += '<b>Price: </b>$';
    pElem.innerHTML += element.product_unit_price;

    divElem.appendChild(imgElem);
    divElem.appendChild(pElem);
    mainDiv.appendChild(divElem); // appends the whole above div to the main 'box' div
  });
}

window.onload = windowActions();