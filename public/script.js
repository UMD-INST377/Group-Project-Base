async function Records(){
    console.log('data request');
    const recordsRequest = await fetch('/api/allrecords');
    const recordsData = await recordsRequest.json();
    return recordsData;
}

async function Calendar() {
    const apif = await fetch('/api/calendar');
    const x = await apif.json();
    const arrayd = x.data;
    const y = document.querySelector('.target'); 
    arrayd.forEach((z) => {
        const calendarData = document.createElement('tr')
        foodVar.innerHTML =`
            <td>${z.calendar_id}</td>
            <td>${z.listing_id}</td>
            <td>${z.stay_date}</td>
            <td>${z.availability}</td>
            <td>${z.price}</td>
            <td>${z.min_nights}</td>
            <td>${z.max_nights}</td>
        `;
        y.append(calendarData)
    });
}
window.onload = Calendar();
