const displayTableData = async () => {
    let data = await fetch('https://localhost:3000/api/foodInspectionPG')
    let res = await data.json();

    let text = "";
    res.data.forEach(element => {
        text += `${element.establishment_id} ${element.name} \n`;
    })

    document.getElementById('data').innerText = text;
}

displayTableData();
