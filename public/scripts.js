const mybutton = document.getElementById('randomizer');
const myLabel = document.getElementById('myFurnLabel')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function loadData() {
    randVal = getRandomIntInclusive(1, 16);
    const requestProducts = await fetch(`/api/products/${randVal}`);
    dataProducts = await requestProducts.json();

    const newSrc = dataProducts[0].image_link;

    document.getElementsByClassName('testimg')[0].setAttribute('src', newSrc)

    const fam_id = dataProducts[0].family_id;
    const cat_id = dataProducts[0].category_id;


    const requestFamilies = await fetch (`/api/productFamilies/${fam_id}`);
    dataFamilies = await requestFamilies.json();
    

    const requestCategories = await fetch (`/api/productCategories/${cat_id}`);
    dataCategories = await requestCategories.json();

    const fam_name = dataFamilies[0].family_name;
    const cat_name = dataCategories[0].category_name;

    myLabel.innerHTML = fam_name + ' ' + cat_name;
}


mybutton.addEventListener('click', loadData);