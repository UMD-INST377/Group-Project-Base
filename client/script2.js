async function editDatabase() {
    const id = document.querySelector('#id').value
    const city = document.querySelector('#city').value
    const date = document.querySelector('#date').value
    const magnitude = document.querySelector('#magnitude').value
    const answer = document.querySelector('input[type=radio]:checked').value
    const response = await fetch('/api/', {
        method: answer,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, city: city, date: date, magnitude: magnitude}),
    });
    console.log(response);
}
//const searchInput = document.querySelector('#jeremy')
//searchInput.addEventListener('input', editDatabase)

const send = document.querySelector('#submit');
send.onclick = editDatabase;