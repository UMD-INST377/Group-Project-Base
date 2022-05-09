async function deleteCompany() {
  await fetch(`/api/company/${document.getElementById('label1').value}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
  
document.querySelector('#button3').addEventListener('click', (event) => {
  deleteCompany();
});