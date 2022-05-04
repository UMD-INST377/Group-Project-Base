async function songAdd() {
  console.log('hello from add');
  const request = `api/songs/${formbox.value}`;
  const resp = await fetch(request, { method: 'ADD' });
  console.log(resp);
  if (resp.status === 200) {
    alert(`${formbox.value}.added`);
  } else {
    alert('Not_Found');
  }
}

async function songDelete() {
  console.log('hello from delete');
  const request = `api/songs/${formbox.value}`;
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
  add.addEventListener('input', songAdd);
  del.addEventListener('input', songDelete);
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
