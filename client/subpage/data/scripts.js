async function mainEvent() {
  const form = document.querySelector('.main_form');
  const originalName = document.querySelector('#original_name');
  const newName = document.querySelector('#new_name');
  const submit = document.querySelector('.button');

  originalName.addEventListener('input', async (event) => {
    console.log(event.target.value);
  });

  newName.addEventListener('input', async (event) => {
    console.log(event.target.value);
  });

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    console.log("Form Submitted");
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());