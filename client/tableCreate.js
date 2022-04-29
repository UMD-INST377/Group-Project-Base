async function loadTable() {

    const arrayFromJson = await fetch('/api/meals');
    let data = await arrayFromJson.json();
    data = data.data;

    const form = document.querySelector('.form');
    const table = document.querySelector('.table');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log(data);
        data.forEach((item) => {
            const row = document.createElement('tr');

            const meal_id = document.createElement('td');
            meal_id.innerHTML = item.meal_id;
            row.appendChild(meal_id);

            const meal_name = document.createElement('td');
            meal_name.innerHTML = item.meal_name;
            row.appendChild(meal_name);

            const meal_category = document.createElement('td');
            meal_category.innerHTML = item.meal_category;
            row.appendChild(meal_category);

            table.appendChild(row);
        });
    });
}

async function createFilteredTable() {
    let currentData = [];
    let data = [];

    const form = document.querySelector(".form");
    const table = document.querySelector(".table");

    const mealidSelector = document.querySelector(".meal_id");
    const mealnameSelector = document.querySelector(".meal_name");
    const mealcategorySelector = document.querySelector(".meal_category");

    function filterCheck (array) {
        let filterArray = array;
        if (mealidSelector.value !== "") {
            const mealId = filterArray.filter(
                (item) => item.meal_id === parseInt(mealidSelector.value)
            );
            filterArray = mealId;
        }
        if (mealnameSelector.value !== "") {
            const nameFilter = filterArray.filter((item) =>
            item.name.toLowerCase().includes(mealnameSelector.value.toLowerCase())
            );
            filterArray = nameFilter;
        }
        if (mealcategorySelector.value !== "") {
            const nameFilter = filterArray.filter((item) =>
            item.name.toLowerCase().includes(mealcategorySelector.value.toLowerCase())
            );
            filterArray = nameFilter;
        }
        return filterArray;
}

    document.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (currentData.length === 0) {
            const arrayFromJson = await fetch("/api/movies");
            data = await arrayFromJson.json();

            data = await data.data;

            currentData = filterCheck(data);
            loadTable(currentData);
            else {

            currentData = filterCheck(data);
            await loadTable(currentData);
            filmnameSelector.addEventListener("change", async () => {
                currentData = filterCheck(data);
                await loadTable(currentData);
            });
            currentData = filterCheck(data);
            await loadTable(currentData);
            filmidSelector.addEventListener("change", async () => {
                currentData = filterCheck(data);
                await loadTable(currentData);
            });
            currentData = filterCheck(data);
            await loadTable(currentData);
            filmcategorySelector.addEventListener("change", async () => {
                currentData = filterCheck(data);
                await loadTable(currentData);
            });
            }
        }
        createFilteredTable();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await createFilteredTable();
});