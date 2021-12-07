async function getByID() {
    const address = './api/:' + document.querySelector('#earthquakeid').value
    const message = document.querySelector('#results')
    const earthquake = await fetch(address).then(response => response.json())
    console.log(earthquake)
    message.innerHTML = `<p>${(earthquake.City)}</p>`
}

const send = document.querySelector('#submitID');
send.onclick = getByID();