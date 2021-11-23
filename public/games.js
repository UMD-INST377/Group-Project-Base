// eslint-disable-next-line camelcase
const api_url = 'http://localhost:3000/api/price';
  
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  const data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab =         
        `<tr>
          <th>Price ID</th>
          <th>Price</th>
         </tr>`;
  // Loop to access all rows 
  for (let r of data.list) {
    tab += `<tr> 
    <td>${r.price_id} </td>
    <td>${r.listed_price}</td>        
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById('price_table').innerHTML = tab;
}