async function editDatabase() {
    const formstuff = new FormData(document.querySelector('form'));
    console.log(formstuff);
    console.log(document.querySelector('form'))
    console.log('test');
}
const send = document.querySelector('#submit');
send.onclick = editDatabase;