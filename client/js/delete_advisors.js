async function deleteAdvisor() {
    await fetch(`/api/advisors/${document.getElementById('label1').value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
    
  document.querySelector('#button3').addEventListener('click', (event) => {
    deleteAdvisor();
  });