/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable indent */

const productsBody = document.querySelector('.products-body');
const familiesBody = document.querySelector('.families-body');
const categoriesBody = document.querySelector('.categories-body');
const storesBody = document.querySelector('.stores-body');

async function productsTable() {
    const request = await fetch('/api/products/');
    const productsData = await request.json();
    console.log(productsData);

    productsData.data.forEach((product) => {
        const productsRow = document.createElement('tr');
        const productsPrice = document.createElement('td');
        const productsImage = document.createElement('td');
        const productsDescr = document.createElement('td');
        const productsColor = document.createElement('td');
        const productsFam = document.createElement('td');
        const productsCatg = document.createElement('td');

        productsPrice.innerText = product.product_unit_price;
        productsImage.innerText = product.image_link;
        productsDescr.innerText = product.product_description;
        productsColor.innerText = product.product_color;
        productsFam.innerText = product.family_id;
        productsCatg.innerText = product.category_id;

        productsBody.append(productsRow);
        productsRow.append(productsPrice);
        productsRow.append(productsImage);
        productsRow.append(productsDescr);
        productsRow.append(productsColor);
        productsRow.append(productsFam);
        productsRow.append(productsCatg);
    });
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
    productsTable();
    familiesTable();
    categoriesTable();
    storesTable();
}

window.onload = windowActions();

// // Get all database records from the store table
// router.get('/stores', async (req, res) => {
//     try {
//       const store = await db.stores.findAll();
//       const reply = store.length > 0 ? { data: store} : { message: 'no results found' };
//       res.json(reply);
//     } catch (err) {
//       console.error(err);
//       res.error('Server error');
//     }
// });