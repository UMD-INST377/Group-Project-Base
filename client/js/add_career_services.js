async function insertCareerServices() {
  const careerServicesInsert = {
    // company_id: document.getElementById('label').value,
    service_description: document.getElementById('label1').value,
  };
  console.log(careerServicesInsert);
  await fetch('/api/career_services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(careerServicesInsert)
  });
}
  
document.querySelector('#button1').addEventListener('click', (event) => {
  insertCareerServices();
});