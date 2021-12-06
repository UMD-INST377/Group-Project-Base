async function editDatabase() {
    console.log(document.querySelector('form'))
    const raw = document.querySelector('form')
    const data = new FormData(raw).entries()
    const dataArray = Array.from(data);
    console.log(dataArray)
    const response = await fetch('/api/', {
        method: dataArray[4][1],
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataArray),
    });
    console.log(dataArray);
    console.log(response);
}
//const searchInput = document.querySelector('#jeremy')
//searchInput.addEventListener('input', editDatabase)

const send = document.querySelector('#submit');
send.onclick = editDatabase;