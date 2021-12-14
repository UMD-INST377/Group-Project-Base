// http://localhost:3000/api/foodInspectionPG
// https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG

const form = document.getElementById('data');

const renderEntry = (entry) => {
  let content = '';

  Object.keys(entry).forEach((column) => {
    content += `${column}: <input type="text" value="${entry[column]}"></input><br>`;
  });

  form.innerHTML = content;
  form.innerHTML = `${form.innerHTML} <button type="submit" id="submit-button">SUBMIT</button>`;
};

const displayTableData = async () => {
  const data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', { mode: 'no-cors' });
  const res = await data.json();

  const table = document.getElementById('table');
  table.innerHTML = '';

  res.data.forEach((element) => {
    const row = document.createElement('tr');

    row.onclick = () => {
      renderEntry(element);
      location.href = '#data';
    };

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

const submitEntry = async (event) => {
  const elements = event.target.elements;
  const values = [];
  
  for (let i = 0; i < elements.length; i++) {
    values.push(elements[i].value);
  }
  
  const data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
      establishment_id: values[0],
      name: values[1],
      category: values[2],
      inspection_date: values[3],
      inspection_results: values[4],
      city: values[5],
      state: values[6],
      zip: values[7],
      address_line_1: values[8],
      address_line_2: values[9],
      food_from_approved_source: values[10],
      food_protected_from_contamination: values[11],
      ill_workers_restricted: values[12],
      proper_hand_washing: values[13],
      cooling_time_and_temperature: values[14],
      cold_holding_temperature: values[15],
      hot_holding_temperature: values[16],
      cooking_time_and_temperature: values[17],
      reheating_time_and_temperature: values[18],
      hot_and_cold_running_water_provided: values[19],
      proper_sewage_disposal: values[20],
      no_bare_hand_contact: values[21],
      adequate_hand_washing_facilities: values[22],
      rodent_and_insects: values[23],
      food_contact_surfaces_and_equipment: values[24],
      inspection_type: values[25],
      owner: values[26],
      type: values[27],
      location: values[28]
    })
  });

  if (data.ok) {
    displayTableData();
    alert('Success!');
  } else {
    alert('Failure: Error occurred');
  }
};

const deleteTableData = async(id) => {
  const data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', {
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

form.addEventListener('submit', submitEntry);