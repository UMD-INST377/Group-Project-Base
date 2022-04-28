fetch('http://localhost:3000/api/artist').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData+= `<tr>
    <td>${values.artist_id}</td>
    <td>${values.label_id}</td>
    <td>${values.stage_name}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td>${values.gender}</td>
    <td>${values.age}</td>
  </tr>`;
  });
  document.getElementById('table_body').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

function tableSearch() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("artInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td") ; 
    for(j=0 ; j<td.length ; j++)
    {
      let tdata = td[j] ;
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break ; 
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}