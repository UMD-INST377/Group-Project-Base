async function createFilteredTable() {
  let currentData = [];
  let data = [];

  const form = document.querySelector('.form');
  const table = document.querySelector('.table');

  const mealIdSelector = document.querySelector('.meal_id');
  const mealNameSelector = document.querySelector('.meal_name');
  const mealCategorySelector = document.querySelector('.meal_category');

  function filterCheck (array) {
    let filterArray = array;

    // put the meals into a unique array
    /* let uniqueArray = {};
        array.forEach((item) => {
            if (!uniqueArray.hasOwnProperty(item.meal_name)) {
                uniqueArray[item.meal_name] = item.meal_id
            } else {
                uniqueArray[item.meal_name] += ',' + item.meal_id
            }
        })

        console.log(uniqueArray) */

    if (mealIdSelector.value !== '') {
      const mealIdFilter = filterArray.filter(
        (item) => item.meal_id === parseInt(mealIdSelector.value)
      );
      filterArray = mealIdFilter;
    }
    if (mealNameSelector.value !== '') {
      const mealNameFilter = filterArray.filter(
        (item) => item.meal_name.toLowerCase().includes(mealNameSelector.value.toLowerCase()));
      filterArray = mealNameFilter;
    }
    if (mealCategorySelector.value !== '') {
      const mealCategoryFilter = filterArray.filter((item) => item.meal_category.toLowerCase().includes(mealCategorySelector.value.toLowerCase()));
      filterArray = mealCategoryFilter;
    }
    return filterArray;
  }

  async function loadTable(array) {
    // reset to table to header only
    table.innerHTML = `<tbody><tr>
            <th>Meal ID</th>
            <th>Meal Name</th>
            <th>Meal Category</th>
        </tr>
    </tbody>`;
    array.forEach((item) => {
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
  }

  document.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (currentData.length === 0) {
      const arrayFromJson = await fetch('/api/will/meals'); 
      data = await arrayFromJson.json();

      data = await data.data;

      currentData = filterCheck(data);
      await loadTable(currentData);
    } else {
      currentData = filterCheck(data);
      await loadTable(currentData);
      mealIdSelector.addEventListener('change', async () => {
        currentData = filterCheck(data);
        await loadTable(currentData);
      });
      currentData = filterCheck(data);
      await loadTable(currentData);
      mealNameSelector.addEventListener('change', async () => {
        currentData = filterCheck(data);
        await loadTable(currentData);
      });
      currentData = filterCheck(data);
      await loadTable(currentData);
      mealCategorySelector.addEventListener('change', async () => {
        currentData = filterCheck(data);
        await loadTable(currentData);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await createFilteredTable();
});