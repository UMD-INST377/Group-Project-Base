function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   

docReady(function() {
  fetch('api/cuisine')
  .then(response => response.json())
  .then(data => createHtmlList(data));
  
});


function createHtmlList(collection) {

  // console.log('fired HTML creator');
  // const results = ; 
  // const arrayFromJson = await results.json();
  output = document.getElementById('cuisineTable');
  console.log(collection[0]);
  var tableContent = "";

  for (i = 0; i < collection[0].length; i++) {
      tableContent += "<tr><td>" + collection[0][i].type_id + "</td>"

      + "<td>" + collection[0][i].type + "</td></tr>";

  }
  output.innerHTML = tableContent;

  // const targetList = document.querySelector(".resto-list");
  // targetList.innerHTML = "";
  // collection.forEach((item) => {
  //   const { restaurant_name } = item;
  //   const displayName = restaurant_name.toLowerCase();
  //   const injectThisItem = `<li>${displayName}</li>`;
  //   targetList.innerHTML += injectThisItem;
  // });
}