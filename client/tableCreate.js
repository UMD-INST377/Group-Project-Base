//const arrayFromJson = await fetch('/api/meals');
//const data = await arrayFromJson.json();
//console.log(data);
async function createTable() {
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
    createTable();
});
