const familiesBody = document.querySelector('.families-body');
const categoriesBody = document.querySelector('.categories-body');

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

        categoryId.innerText = category.category_id;
        categoryName.innerText = category.category_name;

        categoriesBody.append(categoriesRow);
        categoriesRow.append(categoryId);
        categoriesRow.append(categoryName);
    });
}


async function windowActions() {
    familiesTable();
    categoriesTable();
}

window.onload = windowActions();