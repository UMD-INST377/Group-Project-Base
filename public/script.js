const displayTableData = async () => {
    const data = await fetch('https://vast-lake-04060.herokuapp.com/api/members', { mode: 'no-cors' });
    const res = await data.json();
  
    const table = document.getElementById('table1');
    table.innerHTML = '';

    const header = document.createElement('tr');
    header.classList.add("head");
    const head = ["First Name", "Last Name", "Age", "Gender"];
  for (var i = 0; i < head.length; i++) {
    const td = document.createElement('td');
    td.innerText = head[i];
    header.appendChild(td)
    }
    table.appendChild(header);

  
    res.data.forEach((element) => {
      const row = document.createElement('tr');
      let firstname;
  
      Object.keys(element).forEach((column) => {
        const td = document.createElement('td');
        td.innerText = `${element[column]}`;
  
        if (column === 'First Name') {
          firstname = element[column];
        }
        row.appendChild(td);
      });
  
      table.appendChild(row);
    }
    
    );
    
  };

  const displayTableDataTwo = async () => {
    const data = await fetch('https://vast-lake-04060.herokuapp.com/api/profiles', { mode: 'no-cors' });
    const res = await data.json();
  
    const table = document.getElementById('table2');
    table.innerHTML = '';

    const header = document.createElement('tr');
    header.classList.add("head2");
    const head = ["Internet Profile ID", "Twitter", "Instagram", "Facebook", "Website"];
  for (var i = 0; i < head.length; i++) {
    const td = document.createElement('td');
    td.innerText = head[i];
    header.appendChild(td)
    }
    table.appendChild(header);

  
    res.data.forEach((element) => {
      const row = document.createElement('tr');
      let profileID;
  
      Object.keys(element).forEach((column) => {
        const td = document.createElement('td');
        td.innerText = `${element[column]}`;
  
        if (column === 'Internet Profile ID') {
          profileID = element[column];
        }
        row.appendChild(td);
      });
      table.appendChild(row);
    }
    );
  };

  const displayTableDataThree = async () => {
    const data = await fetch('https://vast-lake-04060.herokuapp.com/api/contact', { mode: 'no-cors' });
    const res = await data.json();
  
    const table = document.getElementById('table3');
    table.innerHTML = '';

    const header = document.createElement('tr');
    header.classList.add("head");
    const head = ["Phone Number", "Email Address", "Office Address"];
  for (var i = 0; i < head.length; i++) {
    const td = document.createElement('td');
    td.innerText = head[i];
    header.appendChild(td)
    }
    table.appendChild(header);

  
    res.data.forEach((element) => {
      const row = document.createElement('tr');
      let phonenumber;
  
      Object.keys(element).forEach((column) => {
        const td = document.createElement('td');
        td.innerText = `${element[column]}`;
  
        if (column === 'Phone Number') {
          phonenumber = element[column];
        }
        row.appendChild(td);
      });
  
      table.appendChild(row);
    }
    
    );
    
  };

 function show(nr) {
    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";
    document.getElementById("table4").style.display="none";
    document.getElementById("table"+nr).style.display="block";
}



displayTableData();
displayTableDataTwo();