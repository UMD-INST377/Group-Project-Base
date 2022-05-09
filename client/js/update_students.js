async function updateStudent() {
  const studentUpdate = {
    first_name: document.getElementById('label1').value,
    last_name: document.getElementById('label2').value,
    grad_semester: document.getElementById('label3').value,
    grad_year: document.getElementById('label4').value,
    status: document.getElementById('label5').value,
    infosci_concentration: document.getElementById('label6').value
  };
  console.log(companyUpdate);
  await fetch('/api/students', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentUpdate)
  });
}
    
document.querySelector('#button2').addEventListener('click', (event) => {
  updateStudent();
});