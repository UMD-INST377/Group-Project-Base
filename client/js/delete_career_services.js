async function deleteCareerServices() {
  await fetch(`/api/career_services/${document.getElementById('label1').value}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
    
document.querySelector('#button3').addEventListener('click', (event) => {
  deleteCareerServices();
});