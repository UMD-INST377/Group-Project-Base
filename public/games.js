
function fetchData() {
  fetch('/api/general')
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
                    <th>${user.game_id}</th>
                    <td>${user.game_name}</td>
                    <td>${user.release_date}</td>
                    <td>${user.free_to_play}</td>
                    <td>${user.player_population}</td>
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
