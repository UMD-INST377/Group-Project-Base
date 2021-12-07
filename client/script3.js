async function getByID() {
    let address = './api/' + document.querySelector('#earthquakeid').value
    const message = document.querySelector('#results')
    console.log(address)
    const earthquake = await fetch(address).then(response => response.json())
    console.log(earthquake)
    message.innerHTML = `
    <li>                    
        <table class='result'>
            <tr>
                <th>ID</th>
                <th>City</th>
                <th>Date</th>
                <th>Magnitude</th>
            </tr>
            <tr>
                <th>${(earthquake.earthquake_id)}</th>
                <th>${(earthquake.City)}</th>
                <th>${(earthquake.day_of.substring(0,10))}</th>
                <th>${(earthquake.magnitude)}</th>
            </tr>
        </table>
    </li>
    `
}

const send = document.querySelector('#submitID');
send.onclick = getByID;