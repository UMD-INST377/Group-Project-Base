async function windowActions() {
  const endpoint = '../api/nba-players';
  const request = await fetch(endpoint);
  const players = await request.json();
  console.log(players);

  function displayTable() {
    const html = players.map((player) => `<tr>
                        <th>Player</th>
                        <th>PPG</th> 
                        <th>Assists</th>
                        <th>Team</th>
                    </tr>
                    <tr>
                        <td>${player.player_name}</td>
                        <td>${player.ppg}</td> 
                        <td>${player.assists}</td>
                        <td>${player.name}</td>
                    </tr>`);
    player_table.innerHTML = html;
  }

  const player_table = document.querySelector('.table');
  displayTable();
}
window.onload = windowActions;