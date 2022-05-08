async function updateCareerServices() {
  const careerServicesUpdate = {
    service_id: document.getElementById('label').value,
    service_description: document.getElementById('label1').value,
  };
  console.log(careerServicesUpdate);
  await fetch('/api/career_services', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(careerServicesUpdate)
  });
}
    
document.querySelector('#button2').addEventListener('click', (event) => {
  updateCareerServices();
});