async function insertAdvisor() {
  const advisorInsert = {
    // company_id: document.getElementById('label').value,
    advisor_initials: document.getElementById('label1').value,
  };
  console.log(advisorInsert);
  await fetch('/api/advisors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(advisorInsert)
  });
}
document.querySelector('#button1').addEventListener('click', (event) => {
  insertAdvisor();
});