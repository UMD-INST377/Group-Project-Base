async function insertCompany() {
  const companyInsert = {
    // company_id: document.getElementById('label').value,
    company_name: document.getElementById('label1').value,
    size: document.getElementById('label2').value,
    type: document.getElementById('label3').value,
    city: document.getElementById('label4').value
  };
  console.log(companyInsert);
  await fetch('/api/company', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(companyInsert)
  });
}

document.querySelector('#button1').addEventListener('click', (event) => {
  insertCompany();
});