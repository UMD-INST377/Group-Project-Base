const displayTableData = async () => {
  const data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', { mode: 'no-cors' });
  const res = await data.json();

  let text = '';
  const table = document.getElementById('table');

  res.data.forEach((element) => {
    text += `${element.establishment_id} ${element.name} \n`;
    const row = document.createElement('tr');

    // let td = document.createElement('td');
    // td.innerText = `${element.establishment_id}`;
    // row.appendChild(td);

    // td = document.createElement('td');
    // td.innerText = `${element.name}`;
    // row.appendChild(td);

    Object.keys(element).forEach((column) => {
      const td = document.createElement('td');
      td.innerText = `${element[column]}`;
      row.appendChild(td);
    });

    table.appendChild(row);
  });
};

displayTableData();
