async function updateAdvisors() {
  const advisorUpdate = {
    advisor_id: document.getElementById('label').value,
    advisor_initials: document.getElementById('label1').value,
  };
  console.log(advisorUpdate);
  await fetch('/api/company', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(advisorUpdate)
  });
}
    
document.querySelector('#button2').addEventListener('click', (event) => {
  updateAdvisors();
});