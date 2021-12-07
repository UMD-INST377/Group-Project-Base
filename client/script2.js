async function editDatabase() {
    const message = document.querySelector('#error-message')

    const id = document.querySelector('#id').value
    const city = document.querySelector('#city').value
    const date = document.querySelector('#date').value
    const magnitude = document.querySelector('#magnitude').value
    const answer = document.querySelector('input[type=radio]:checked').value
    if (!id || (answer != 'DELETE' && (!city || !date || !magnitude))) {
        console.log('Error: Missing Field')
    //-----------------BELOW NEEDS WORK--------------------//
        message.innerHTML = `<p>Error: Missing field</p>`
    } else if (answer!= 'DELETE' && !/^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d$/.test(date)){
        console.log('Error: Wrong formatting on date')
    //------------------BELOW NEEDS WORK---------------------------//
        message.innerHTML = `<p>Error: Wrong formatting on date</p>`
    } else {
        console.log('Success')
        const response = await fetch('/api/', {
            method: answer,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, city: city, date: date, magnitude: magnitude}),
        });
    //------------------BELOW NEEDS WORK-------------------------//
        message.innerHTML = `<p>Database updated successfully</p>`
    }
}
//const searchInput = document.querySelector('#jeremy')
//searchInput.addEventListener('input', editDatabase)

const send = document.querySelector('#submit');
send.onclick = editDatabase;