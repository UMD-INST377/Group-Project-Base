async function editDatabase() {
    console.log(document.querySelector('form'))
    const raw = document.querySelector('form')
    const data = new FormData(raw).entries()
    const dataArray = Array.from(data);
    console.log(dataArray)
    JSON.stringify(data)
    if (dataArray[4][1] === 'DELETE') {
    }
    else {
        const response1 = await fetch('/api/', {
            method: dataArray[4][1],
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataArray.slice(0,3)),
        });
    }
}
const searchInput = document.querySelector('#jeremy')
searchInput.addEventListener('input', editDatabase)

const send = document.querySelector('#submit');
send.onclick = editDatabase;