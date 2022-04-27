async function albumAdd() {
  console.log('hello from add');
  const request = `api/albums/${formbox.value}`;
  const resp = await fetch(request, { method: 'ADD' });
  console.log(resp);
  if (resp.status === 200) {
    alert(`${formbox.value}.added`);
  } else {
    alert('Not_Found');
  }
}

async function albumDelete() {
  console.log('hello from delete');
  const request = `api/albums/${formbox.value}`;
  const resp = await fetch(request, { method: 'DELETE' });
  console.log(resp);
  if (resp.status === 200) {
    alert(`${formbox.value}.deleted`);
  } else {
    alert('Not_Found');
  }
}
async function mainEvent() {
  const add = document.querySelector('#add');
  const del = document.querySelector('#delete');
  add.addEventListener('input', albumAdd);
  del.addEventListener('input', albumDelete);
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
