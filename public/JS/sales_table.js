function fetchData() {
  fetch('/api/sales')
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const html = data[0]
        // eslint-disable-next-line arrow-body-style
        .map(user => {
          return `
          
              
                  <tr>
                      <th>${user.sales_id}</th>
                      <td>${user.annual_sales}</td>
                      <td>${user.earnings}</td>
                  </tr>
              </tbody>
          
              `;
        }).join('');
      console.log(html); 

      document.querySelector('#table').innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}
  
fetchData(); 