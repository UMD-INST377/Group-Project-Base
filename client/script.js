// http://localhost:3000/api/foodInspectionPG
const displayTableData = async () => {
  const data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', { mode: 'no-cors' });
  const res = await data.json();

  const table = document.getElementById('table');
  table.innerHTML = '';

  res.data.forEach((element) => {
    const row = document.createElement('tr');
    let establishmentId;

    Object.keys(element).forEach((column) => {
      const td = document.createElement('td');
      td.innerText = `${element[column]}`;

      if (column === 'establishment_id') {
        establishmentId = element[column];
      }

      if (column === 'name') {
        td.innerHTML = `${element[column]}<br><button onclick="deleteTableData(${establishmentId})">Delete</button>`;
      }

      row.appendChild(td);
    });

    table.appendChild(row);
  });
};

const deleteTableData = async(id) => {
  const data = await fetch('http://localhost:3000/api/foodInspectionPG', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ establishment_id: id })
  });

  if (data.ok) {
    displayTableData();
    alert('Success!');
  } else {
    alert('Failure: Error occurred');
  }
};

displayTableData();