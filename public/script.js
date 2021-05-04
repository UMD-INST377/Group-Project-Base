async function Records(){
    console.log('data request');
    const recordsRequest = await fetch('/api/properties');
    const recordsData = await recordsRequest.json();
    return recordsData;
}
async function calendarTable() {
    const apif = await fetch('/api/properties');
    const recordsArray = await apif.json();
    const y = document.querySelector('.target'); 
    recordsArray.forEach((c) => {
        const CVar = document.createElement('tr')
        CVar.innerHTML =`
        <td>${c.Property}</td>
        <td>${c.Room_type}</td>
        <td>${c.Accomodates}</td>
        <td>${c.Bathrooms}</td>
        <td>${c.Bedrooms}</td>
        <td>${c.Beds}</td>
        `;
        y.append(CVar)
    });

    console.table(recordsArray);
    const display = document.querySelector('.target');
    recordsArray.forEach((z) => {
        const displayVar = document.createElement('tr');
        displayVar.innerHTML =`
        <td>${z.Property}</td>
        <td>${z.Room_type}</td>
        <td>${z.Accomodates}</td>
        <td>${z.Bathrooms}</td>
        <td>${z.Bedrooms}</td>
        <td>${z.Beds}</td>
        `;

        display.append(displayVar);

        // const chart = new CanvasJS.Chart("chartContainer", {
        //     animationEnabled: true,
        //     title:{
        //         text: "AirBnB Chicago Property Chart"
        //     },
        // axisX: {
        //     valueFormatString: ""
        // },
        // axisY: {
        //     prefix: ""
        // },
        // toolTip: {
        //     shared: true
        // },
        // legend: {
        //     cursor: "pointer",
        //     itemclick: toggleDataSeries
        // },
        // data: [{
        //     type: "stackedBar",
        //     name: "Bathrooms",
        //     showInLegend: "true",
        //     xValueFormatString: "",
        //     yValueFormatString: "",
        //     dataPoints: [
        //         { label:selected[0].meal_name, y:selectedMeals[0].calories },
        //         { label:selected[1].meal_name, y:selectedMeals[1].calories },
        //         { label:selected[2].meal_name, y:selectedMeals[2].calories },
        //         { label:selected[3].meal_name, y:selectedMeals[3].calories },
        //         { label:selected[4].meal_name, y:selectedMeals[4].calories },
        //         { label:selected[5].meal_name, y:selectedMeals[5].calories },
        //         { label:selected[6].meal_name, y:selectedMeals[6].calories },
        //         { label:selected[7].meal_name, y:selectedMeals[7].calories },
        //         { label:selected[8].meal_name, y:selectedMeals[8].calories },
        //         { label:selected[9].meal_name, y:selectedMeals[9].calories }
        //     ]
        // }

        // ]
        // })
});
}
window.onload = calendarTable;