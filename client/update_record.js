async function updateCompany() {
  const companyUpdate = {
    company_id: document.getElementById('label').value,
    company_name: document.getElementById('label1').value,
    size: document.getElementById('label2').value,
    type: document.getElementById('label3').value,
    city: document.getElementById('label4').value
  };
  console.log(companyUpdate);
  await fetch('/api/company', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(companyUpdate)
  });
}
  
document.querySelector('#button2').addEventListener('click', (event) => {
  updateCompany();
});