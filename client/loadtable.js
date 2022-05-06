

async function createtable() {
  let arrayFromJson;
  let currentdata = [];
  let data = [];
  const form = document.querySelector('.mainform');
  const table = document.querySelector('.table');

  function filtercheck(array) {

    let filterarray = array;
    
    if (document.getElementById('takeout').checked) {
      console.log("1");
      const newfilter = filterarray.filter(item => item.takeout === 1);
      filterarray = newfilter;
    }
    if (document.getElementById('delivery').checked) {
      console.log("2");
      const newfilter = filterarray.filter(item => item.delivery === 1);
      filterarray = newfilter;
    }
    if (document.getElementById('drive_thru').checked) {
      console.log("3");
      const newfilter = filterarray.filter(item => item.drive_thru === 1);
      filterarray = newfilter;
    }

    return filterarray;
  }

  async function loadtable(array) {
    table.innerHTML = `<tbody><tr>
            <th>Restaurant Name</th>
        
            </tr>
            </tbody>`;
    array.forEach((item) => {
      const row = document.createElement('tr');
      const restaurantname = document.createElement('td');
      restaurantname.innerHTML = item.restaurant_name;

      row.appendChild(restaurantname);
      const desc = document.createElement('td');
      // desc.innerHTML = item.description;
      row.appendChild(desc);

      // const tk = document.createElement("td")
      // tk.innerHTML = item.takeout
      // row.appendChild(tk)

      table.appendChild(row);
    });
  }

  async function setter(data){
    arrayFromJson = data;
  }

  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (currentdata.length === 0) {
      fetch('melody/services')
      .then((response) => response.json())
      .then((data) => filtercheck(data))
      .then((filtered)=> loadtable(filtered));

    } else {
      currentdata = filtercheck(data);
      loadtable(currentdata);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await createtable();
});
