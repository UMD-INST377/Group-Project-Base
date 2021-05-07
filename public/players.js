window.onload = async function windowActions() {
  const req_players = await fetch("/api/players");
  const playersData = await req_players.json();
  const players = playersData["data"];

  const req_goals = await fetch("/api/player_goals");
  const goalsData = await req_goals.json();
  const goals = goalsData["data"];

  const tableTarget = document.querySelector("#table-target");
  const form = document.querySelector("#search");
  const input = document.querySelector(".input");

  function setup() {
    tableTarget.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Player's Name</th>
                <th>Club's Name</th>
                <th>Shirt Number</th>
                <th>Position</th>
                <th>Times Player Won "Best Player" Title</th>
                <th>Goals</th>
                <th>Assists</th>
            </tr>
        `;
    players.forEach((player) => {
      goals.forEach((goals) => {
        if (player.player_id === goals.player_id) {
          const player_id = player.player_id;
          const playerName = player.first_name.concat(" ", player.last_name);
          const clubName = player.club;
          const shirtNum = player.shirt_number;
          const position = player.position;
          const bestPlayer = player.best_player_counter;
          const numGoals = goals.goals;
          const assists = goals.assists;

          const table_row = document.createElement("tr");
          table_row.innerHTML = `
                        <td>${player_id}</td>
                        <td>${playerName}</td>
                        <td>${clubName}</td>
                        <td>${shirtNum}</td>
                        <td>${position}</td>
                        <td>${bestPlayer}</td>
                        <td>${numGoals}</td>
                        <td>${assists}</td>
                    `;
          tableTarget.append(table_row);
        }
      });
    });
  }

  function displaySearchResults() {
    players.forEach((player) => {
      const playerName = player.first_name.concat(" ", player.last_name);
      if (playerName.trim() === input.value.trim()) {
        goals.forEach((goals) => {
          if (player.player_id === goals.player_id) {
            const clubName = player.club;
            const shirtNum = player.shirt_number;
            const position = player.position;
            const bestPlayer = player.best_player_counter;
            const numGoals = goals.goals;
            const assists = goals.assists;

            tableTarget.innerHTML = `
                            <tr>
                                <th>Player's Name</th>
                                <th>Club's Name</th>
                                <th>Shirt Number</th>
                                <th>Position</th>
                                <th>Times Player Won "Best Player" Title</th>
                                <th>Goals</th>
                                <th>Assists</th>
                            </tr>
                            <tr>
                                <td>${playerName}</td>
                                <td>${clubName}</td>
                                <td>${shirtNum}</td>
                                <td>${position}</td>
                                <td>${bestPlayer}</td>
                                <td>${numGoals}</td>
                                <td>${assists}</td>
                            </tr>
                        `;
          }
        });
      }
    });

    return false;
  }
  setup();
  form.onsubmit = displaySearchResults;
  form.onreset = windowActions;
};
