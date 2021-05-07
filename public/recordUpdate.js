async function getData() {
  const request = await fetch('api/animals');
  const data = await request.json();
  return data;
}

async function recordSubmission() {
  const form = document.querySelector('#recordSubmit');
  const name = document.querySelector('#animalName');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.info('submitted form', event.target);
    const post = await fetch('api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name.value, animal_id: event.target.value})
    });
  });
}

async function handleClick(event) {
  console.log('clicked button', event.target);
  console.log('button value', event.target.value);
  const name = document.querySelector('#animalName');
  const url = 'api/animals';
  const put = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name.value, animal_id: event.target.value})
  });

  console.log('resolved put request', put);
  const nameUpdate = await put.json().update;
  console.log(nameUpdate);
  event.target.innerText = name.value;
}

async function windowActions() {
  console.log('loaded window');
  const animalRecords = await getData();
  console.table(animalRecords);
  console.log(animalRecords);

  animalRecords.forEach((animal) => {
    const target = document.querySelector('.animalTable');
    const button = document.createElement('button');
    const brk = document.createElement('br');
    button.innerText = animal.animal_name;
    button.value = animal.animal_id;
    target.append(button);
    target.append(brk);
    button.addEventListener('click', (event) => { handleClick(event); });
  });
}

window.onload = windowActions;