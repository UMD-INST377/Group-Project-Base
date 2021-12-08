function fetchData() {
  fetch('/api/price')
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data[0]
      // eslint-disable-next-line arrow-body-style
        .map((user) => {
          return `
          
              
                  <tr>
                      <th>${user.price_id}</th>
                      <td>${user.price_website}</td>
                      <td>${user.listed_price}</td>
                      
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
