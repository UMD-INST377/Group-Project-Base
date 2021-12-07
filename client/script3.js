async function getByID() {
    let address = './api/' + document.querySelector('#earthquakeid').value
    const message = document.querySelector('#results')
    console.log(address)
    const earthquake = await fetch(address).then(response => response.json())
    console.log(earthquake)
    //Below is the HTML that contains the data on the earthquake with an ID matching the
    //input in search.html
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
                <th>${(earthquake[0].earthquake_id)}</th>
                <th>${(earthquake[0].City)}</th>
                <th>${(earthquake[0].day_of.substring(0,10))}</th>
                <th>${(earthquake[0].magnitude)}</th>
            </tr>
        </table>
    </li>
    `
}

const send = document.querySelector('#submitID');
send.onclick = getByID;