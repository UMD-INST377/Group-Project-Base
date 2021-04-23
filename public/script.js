async function Records(){
    console.log('data request');
    const recordsRequest = await fetch('/api/allrecords');
    const recordsData = await recordsRequest.json();
    return recordsData;
}
async function Calendar() {
    const apif = await fetch('/api/allrecords');
    const recordsArray = await apif.json();
    const y = document.querySelector('.target'); 
    recordsArray.forEach((c) => {
        const CVar = document.createElement('tr')
        CVar.innerHTML =`
            <td>${c.calendar_id}</td>
            <td>${c.listing_id}</td>
            <td>${c.stay_date}</td>
        `;
        y.append(CVar)
    });
}
window.onload = Calendar();