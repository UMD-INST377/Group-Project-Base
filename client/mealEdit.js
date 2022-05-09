console.log('test');

async function deleteMeal() {
  const form = document.querySelector('.form');
  const submit = document.querySelector('#delete');

  const mealId = document.querySelector("div.col.delete input[name='meal_id']");
  submit.addEventListener('click', async () => {
    console.log('meal_id', mealId.value);
    const results = await fetch(`/api/will/meals/${mealId.value}`, { method: 'DELETE' });

    if (results.status === 200) {
      alert(`${mealId.value} was deleted.`);
    } else {
      alert(`id not found.`)
    }
  });

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
  });
}


document.addEventListener('DOMContentLoaded', deleteMeal);

