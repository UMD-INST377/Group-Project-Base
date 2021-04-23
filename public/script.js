async function Records(){
    console.log('data request');
    const recordsRequest = await fetch('/api/allrecords');
    const recordsData = await recordsRequest.json();
    return recordsData;
}
async function Calendar() {
    const apif = await fetch('/api/allrecords');
    const x = await apif.json();
    const c_array = x.data;
    const y = document.querySelector('.target'); 
    c_array.forEach((c) => {
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