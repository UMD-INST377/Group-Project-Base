async function windowActions() {
  const endpoint = '../api/nba-players';
  const request = await fetch(endpoint);
  const players = await request.json();
  console.log(players);

  var playerInfo = [];

  async function displayTable() {

    let newHtml = "<tr><th>Player ID</th><th>Player</th><th>PPG</th> <th>Assists</th><th>Team</th></tr>";
    players.forEach(player => {
      
      playerInfo.push({
        "id":player.player_id,
        "name":player.player_name,
        "PPG":player.ppg,
        "Assists":player.assists,
        "Team Name": player.name
      });
      newHtml += `
      <tr>
          <td>${player.player_id}</td>
          <td>${player.player_name}</td>
          <td>${player.ppg}</td> 
          <td>${player.assists}</td>
          <td>${player.name}</td>
      </tr>`;
    });
    player_table.innerHTML = newHtml;
  }

  document.getElementById("PlayerSearchBar").addEventListener("keyup", function(event){
    
    let nameTOSearch = document.getElementById("PlayerSearchBar").value;
    let newHtml = "<tr><th>Player ID</th><th>Player</th><th>PPG</th> <th>Assists</th><th>Team</th></tr>";
    playerInfo.forEach(function(player){

      if(player.name.substring(0, nameTOSearch.length) == nameTOSearch){
        newHtml += `
        <tr>
            <td>${player["id"]}</td>
            <td>${player["name"]}</td>
            <td>${player["PPG"]}</td> 
            <td>${player["Assists"]}</td>
            <td>${player["Team Name"]}</td>
        </tr>`;
      }
    });
    document.getElementById("playertablefiltered").innerHTML = newHtml;
  });

  const player_table = document.getElementById("playertable");
  displayTable();

  
}
window.onload = windowActions;
