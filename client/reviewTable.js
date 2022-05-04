
   let currentData = [];
  const data = [];
  const form = document.querySelector(".main-form");
  const review_id = document.querySelector(".reviewid");
  const review_description = document.querySelector(".review_description");
  const avg_star_rating = document.querySelector(".avg_star_rating");
  const restaurant_id = document.querySelector(".restaurantid");
  const table = document.querySelector(".table");

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

  form.addEventListener("submit", async(e)=> {

     e.preventDefault()
     const formlisten = formToObject(form)
   await fetch("/api/review", {
      method: "POST",
      headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(formlisten)
   })
  location.reload()
  })









