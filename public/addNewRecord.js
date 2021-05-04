const myForm = document.querySelector('#addNewForm');


async function myPost() {
    const settings = {
        method: 'POST',
        body: JSON.stringify(myForm.body)
    }

    const myResponse = await fetch('/api/products/', settings);
    const data = await myResponse.json();
    console.log(data);
    
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    myPost();

})