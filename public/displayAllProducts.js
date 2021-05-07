/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable indent */

const productsBody = document.querySelector('.products-body');
const familiesBody = document.querySelector('.families-body');
const categoriesBody = document.querySelector('.categories-body');
const storesBody = document.querySelector('.stores-body');
const filterField = document.querySelector('#filterField');
const filterButton = document.querySelector('#allSubmit');
const resultDisplay = document.querySelector('.searchResultsAll');

async function productsTable() {
    const request = await fetch('/api/products/');
    const productsData = await request.json();
    console.log(productsData);

    productsData.data.forEach((product) => {
        const productsRow = document.createElement('tr');
        const productsId = document.createElement('td');
        const productsPrice = document.createElement('td');
        const productsImage = document.createElement('img');
        const productsDescr = document.createElement('td');
        const productsColor = document.createElement('td');
        const productsFam = document.createElement('td');
        const productsCatg = document.createElement('td');

        productsId.innerText = product.product_id;
        productsPrice.innerText = product.product_unit_price;
        productsImage.src = product.image_link;
        productsDescr.innerText = product.product_description;
        productsColor.innerText = product.product_color;
        productsFam.innerText = product.family_id;
        productsCatg.innerText = product.category_id;

        productsImage.style.height = '20vw';
        productsImage.style.width = 'auto';

        productsBody.append(productsRow);
        productsRow.append(productsId);
        productsRow.append(productsPrice);
        productsRow.appendChild(productsImage);
        productsRow.append(productsDescr);
        productsRow.append(productsColor);
        productsRow.append(productsFam);
        productsRow.append(productsCatg);
    });
    return productsData;
}

async function familiesTable() {
    const request = await fetch('/api/productFamilies/');
    const familiesData = await request.json();
    console.log(familiesData);

    familiesData.data.forEach((family) => {
        const familiesRow = document.createElement('tr');
        const familyId = document.createElement('td');
        const familyName = document.createElement('td');

        familyId.innerText = family.family_id;
        familyName.innerText = family.family_name;

        familiesBody.append(familiesRow);
        familiesRow.append(familyId);
        familiesRow.append(familyName);
    });
}

async function categoriesTable() {
    const request = await fetch('/api/productCategories/');
    const categoriesData = await request.json();
    console.log(categoriesData);

    categoriesData.data.forEach((category) => {
        const categoriesRow = document.createElement('tr');
        const categoryId = document.createElement('td');
        const categoryName = document.createElement('td');
        const categoryDescr = document.createElement('td');

        categoryId.innerText = category.category_id;
        categoryName.innerText = category.category_name;
        categoryDescr.innerText = category.category_description;

        categoriesBody.append(categoriesRow);
        categoriesRow.append(categoryId);
        categoriesRow.append(categoryName);
        categoriesRow.append(categoryDescr);
    });
}

async function storesTable() {
    const request = await fetch('/api/stores/');
    const storesData = await request.json();
    console.log(storesData);

    storesData.data.forEach((store) => {
        const storesRow = document.createElement('tr');
        const storeAddress = document.createElement('td');
        const storeCity = document.createElement('td');
        const storeState = document.createElement('td');
        const storeZip = document.createElement('td');

        storeAddress.innerText = store.store_address_line1;
        storeCity.innerText = store.store_city;
        storeState.innerText = store.store_state;
        storeZip.innerText = store.store_zip_code;

        storesBody.append(storesRow);
        storesRow.append(storeAddress);
        storesRow.append(storeCity);
        storesRow.append(storeState);
        storesRow.append(storeZip);
    });
}

async function windowActions() {
    const data = await productsTable();
    familiesTable();
    categoriesTable();
    storesTable();

    filterButton.addEventListener('click', (event) => {
        event.preventDefault();
        const result = data['data'][filterField.value - 1];
        const newTableResult = document.createElement('table');
        const newTabTitles = document.createElement('tr');

        const newThID = document.createElement('th');
        newThID.innerHTML = "Product ID";
        const newThPrice = document.createElement('th');
        newThPrice.innerHTML = "Price";
        const newThImage = document.createElement('th');
        newThImage.innerHTML = "Product Image";
        const newThDescription = document.createElement('th');
        newThDescription.innerHTML = "Description";
        const newThColor = document.createElement('th');
        newThColor.innerHTML = "Color";
        const newThFam = document.createElement('th');
        newThFam.innerHTML = "Family ID";
        const newThCat = document.createElement('th');
        newThCat.innerHTML = "Category ID";

        newTabTitles.appendChild(newThID);
        newTabTitles.appendChild(newThPrice);
        newTabTitles.appendChild(newThImage);
        newTabTitles.appendChild(newThDescription);
        newTabTitles.appendChild(newThColor);
        newTabTitles.appendChild(newThFam);
        newTabTitles.appendChild(newThCat);

        newTableResult.appendChild(newTabTitles);

        newTableResult.classList.add("table");

        const rowResult = document.createElement('tr');

        const nextThID = document.createElement('td');
        nextThID.innerHTML = result.product_id;
        const nextThPrice = document.createElement('td');
        nextThPrice.innerHTML = result.product_unit_price;
        const nextThImage = document.createElement('img');
        nextThImage.src = result.image_link;
        const nextThDescription = document.createElement('td');
        nextThDescription.innerHTML = result.product_description;
        const nextThColor = document.createElement('td');
        nextThColor.innerHTML = result.product_color;
        const nextThFam = document.createElement('td');
        nextThFam.innerHTML = result.family_id;
        const nextThCat = document.createElement('td');
        nextThCat.innerHTML = result.category_id;

        nextThImage.style.height = '20vw';
        nextThImage.style.width = 'auto';

        rowResult.appendChild(nextThID);
        rowResult.appendChild(nextThPrice);
        rowResult.appendChild(nextThImage);
        rowResult.appendChild(nextThDescription);
        rowResult.appendChild(nextThColor);
        rowResult.appendChild(nextThFam);
        rowResult.appendChild(nextThCat);

        newTableResult.appendChild(rowResult);

        resultDisplay.appendChild(newTableResult);
    });
}

window.onload = windowActions();