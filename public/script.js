const displayTableData = async () => {
    let data = await fetch('https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG', { mode: 'no-cors' })
    let res = await data.json();

    let text = "";
    let table = document.getElementById('table');

    res.data.forEach(element => {
        text += `${element.establishment_id} ${element.name} \n`;
        let row = document.createElement('tr');

        // let td = document.createElement('td');
        // td.innerText = `${element.establishment_id}`;
        // row.appendChild(td);

        // td = document.createElement('td');
        // td.innerText = `${element.name}`;
        // row.appendChild(td);

        Object.keys(element).forEach(column => {
            let td = document.createElement('td');
            td.innerText = `${element[column]}`;
            row.appendChild(td);
        });

        table.appendChild(row);
    });
}

displayTableData();
