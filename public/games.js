async function windowActions() {
  fetch('http://localhost:3000/api/general')
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        // eslint-disable-next-line arrow-body-style
        .map((user) => {
          return `

        <table class = "table is-fullwidth is-striped is-bordered">
            <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Game Name</th>
                    <th>Release Date</th>
                    <th>Free to Play</th>
                    <th>Player Population</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>${user.game_id}</th>
                    <td>${user.game_name}</td>
                    <td>${user.release_date}</td>
                    <td>${user.free_to_play}</td>
                    <td>${user.player_population}</td>
                </tr>
            </tbody>
        </table>

            `;
        }).join('');
      console.log(html);
      document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = windowActions;
