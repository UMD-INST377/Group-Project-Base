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
                item.meal_name.toLowerCase().includes(mealnameSelector.value.toLowerCase())
            );
            filterArray = nameFilter;
        }
        if (mealcategorySelector.value !== "") {
            const categoryFilter = filterArray.filter((item) =>
                item.meal_category.toLowerCase().includes(mealcategorySelector.value.toLowerCase())
            );
            filterArray = categoryFilter;
        }
        return filterArray;
}

    document.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (currentData.length === 0) {
            const arrayFromJson = await fetch("/api/meals");
            data = await arrayFromJson.json();

            data = await data.data;

            currentData = filterCheck(data);
            loadTable(currentData);
            else {

                currentData = filterCheck(data);
                await loadTable(currentData);
                mealnameSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
                currentData = filterCheck(data);
                await loadTable(currentData);
                mealidSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
                currentData = filterCheck(data);
                await loadTable(currentData);
                mealcategorySelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
            }
        }
        createFilteredTable();
    });
}

async function loadTable(array) {

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


document.addEventListener('DOMContentLoaded', async () => {
    await createFilteredTable();
});