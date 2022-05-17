async function createFilteredTable() {
    let currentData = [];
    let data = [];

    const form = document.querySelector(".form");
    const table = document.querySelector(".table");

    const restrictionTypeSelector = document.querySelector(".restriction_type");
    const mealnameSelector = document.querySelector(".meal_name");
    const hallnameSelector = document.querySelector(".hall_name");
    const caloriesSelector = document.querySelector(".calories");

    function filterCheck (array) {
        let filterArray = array;

        /*/put the meals into a unique array
        let uniqueArray = {};
        array.forEach((item) => {
            if (!uniqueArray.hasOwnProperty(item.meal_name)) {
                uniqueArray[item.meal_name] = item.restriction_type;
            } else {
                uniqueArray[item.meal_name] += ',' + item.restriction_type;
            }
        })

        console.log(uniqueArray)*/

        /*if (restrictionTypeSelector.value !== "") {
            const restrictionType = filterArray.filter((item) =>
                item.restriction_type.toLowerCase().includes(restrictionTypeSelector.value.toLowerCase())
                /*(item) => item.meal_name.toLowerCase().includes(mealnameSelector.value.toLowerCase())*
            );
            filterArray = restrictionType;
        }*/

        /*if (mealnameSelector.value !== "") {
            const nameFilter = filterArray.filter((item) =>
                item.meal_name.toLowerCase().includes(mealnameSelector.value.toLowerCase())
                /*(item) => item.meal_name.toLowerCase().includes(mealnameSelector.value.toLowerCase())*
            );
            filterArray = nameFilter;
        }*/

        if (hallnameSelector.value !== "") {
            const hallnameFilter = filterArray.filter((item) =>
                item.hall_name.toLowerCase().includes(hallnameSelector.value.toLowerCase())
                /*(item) => item.meal_name.toLowerCase().includes(mealnameSelector.value.toLowerCase())*/
            );
            filterArray = hallnameFilter;
        }
        if (caloriesSelector.value !== "") {
            const caloriesFilter = filterArray.filter((item) => item.calories <= parseInt(caloriesSelector.value));
                /*item.calories.toLowerCase().includes(caloriesSelector.value.toLowerCase())*/
                /*(item) => item.calories > caloriesSelector.value*/
            
            filterArray = caloriesFilter;
        }
        return filterArray;
}

async function loadTable(array) {
    //reset to table to header only
    table.innerHTML = `<tbody><tr>
            <th>Restriction Type</th>
            <th>Meal Name</th>
            <th>Hall Name</th>
            <th>Calories</th>
        </tr>
    </tbody>`;
    array.forEach((item) => {
      // console.log(item) if you need to use console to see properties
      // create a new row element
      const row = document.createElement("tr");

      // create new column element this will be repeated
      const restriction_type = document.createElement("td");
      // set each column to be respective property
      restriction_type.innerHTML = item.restriction_type;
      row.appendChild(restriction_type);

      // repeat this for all the columns you want in the table
      const meal_name = document.createElement("td");
      // set each column to be respective property
      meal_name.innerHTML = item.meal_name;
      row.appendChild(meal_name);

      const hall_name = document.createElement("td");
      // set each column to be respective property
      hall_name.innerHTML = item.hall_name;
      row.appendChild(hall_name);

      const calories = document.createElement("td");
      // set each column to be respective property
      calories.innerHTML = item.calories;
      row.appendChild(calories);

      // append this record to the table
      table.appendChild(row);
    });
  }


    document.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (currentData.length === 0) {
            const arrayFromJson = await fetch("/vez/mealsinfo"); //("/api/meals") and go through and update table name in routes
            data = await arrayFromJson.json();

            data = await data.data;
            console.log(data);
            currentData = filterCheck(data);
            await loadTable(currentData);
        } else {

                /*currentData = filterCheck(data);
                await loadTable(currentData);
                restrictionTypeSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
                currentData = filterCheck(data);
                await loadTable(currentData);
                mealnameSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });*/
                currentData = filterCheck(data);
                await loadTable(currentData);
                hallnameSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
                currentData = filterCheck(data);
                await loadTable(currentData);
                caloriesSelector.addEventListener("change", async () => {
                    currentData = filterCheck(data);
                    await loadTable(currentData);
                });
            }
        //createFilteredTable();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await createFilteredTable();
});