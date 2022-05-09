console.log('test');

async function deleteMeal() {
  const form = document.querySelector('.form');
  const submit = document.querySelector('#delete');

  const mealId = document.querySelector("div.col.delete input[name='meal_id']");
  submit.addEventListener('click', async () => {
    console.log('meal_id', mealId.value);
    const results = await fetch(`/api/will/meals/${mealId.value}`, { method: 'DELETE' });

    if (results.status === 200) {
      alert(`${mealId.value} was deleted`);
    } else {
      alert(`Error`)
    }
  });

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
  });
}


document.addEventListener('DOMContentLoaded', deleteMeal);

async function updateMeal () {
  const form = document.querySelector('#update');
  const submit = document.querySelector('#updatesubmit');


  submit.addEventListener('click', async () => {

    /* const data = new FormData (form).entries(); */
  
    function formToObject(htmlFormElement) {
      const formItem = new FormData(htmlFormElement).entries();
      const formArray = Array.from(formItem);
      const formObject = formArray.reduce((collection, item, index) => {
        if (!collection[item[0]]) {
          collection[item[0]] = item[1];
        }
        return collection;
      }, {});
      return formObject;
    }

    let data2 = formToObject(form);
  
    console.log(data2);

    const results = await fetch(`/api/will/meals`, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data2)});

    if (results.status === 200) {
      alert(`Meal successfully updated`);
    } else {
      alert(`Error`)
    }
  });
}
  
document.addEventListener('DOMContentLoaded', updateMeal);