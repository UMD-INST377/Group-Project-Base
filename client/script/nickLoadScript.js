let collection;

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

  output = document.getElementById('cuisineTable');
  collection = collection[0];
  var tableContent = "";

  for (i = 0; i < collection[0].length; i++) {
      tableContent += "<tr><td>" + collection[0][i].type_id + "</td>"
      + "<td>" + collection[0][i].type + "</td>"
      + `<td><input type='checkbox' id=${collection[0][i].type_id}></td></tr>`;

}
  output.innerHTML = tableContent;

 });

function cuisineSubmit(){
    for (i = 0; i < collection.length;i++){
      let check = document.querySelector('#accept');
      console.log(check.checked); // false
    }
}