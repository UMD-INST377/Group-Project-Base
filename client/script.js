const displayTableData = async () => {
    let data = await fetch('http://localhost:3000/api/foodInspectionPG')
    let res = await data.json();

    let table = document.getElementById("table")
    res.data.forEach((inspection) => {
        let row = table.insertRow();
        
        Object.keys(inspection).forEach((column) => {
            let col = row.insertCell();
            
            text = document.createTextNode(inspection.column);
            col.appendChild(text);
        })
    })
}

displayTableData();
