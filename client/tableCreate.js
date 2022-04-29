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
            await loadTable(currentData);
        } else {

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
        createFilteredTable();
    });
}

async function loadTable(array) {
    //reset to table to header only
    table.innerHTML = `<tbody><tr>
            <th>Film ID</th>
            <th>Film Title</th>
            <th>Genre</th>
            <th>Runtime</th>
            <th>Score</th>
        </tr>
    </tbody>`;
    array.forEach((item) => {
      // console.log(item) if you need to use console to see properties
      // create a new row element
      const row = document.createElement("tr");

      // create new column element this will be repeated
      const meal_id = document.createElement("td");
      // set each column to be respective property
      meal_id.innerHTML = item.meal_id;
      row.appendChild(meal_id);

      // repeat this for all the columns you want in the table
      const meal_name = document.createElement("td");
      // set each column to be respective property
      meal_name.innerHTML = item.meal_name;
      row.appendChild(meal_name);

      const meal_category = document.createElement("td");
      // set each column to be respective property
      meal_category.innerHTML = item.meal_category;
      row.appendChild(meal_category);

      // append this record to the table
      table.appendChild(row);
    });
  }

document.addEventListener('DOMContentLoaded', async () => {
    await createFilteredTable();
});