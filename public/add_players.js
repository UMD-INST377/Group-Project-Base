window.onload = async function windowActions() {
  const form = document.getElementById("add-form");

  // ADDING PLAYERS
  async function add_player() {
    const club_input = document.getElementById("playerclub");
    const playerfn_input = document.getElementById("firstname");
    const playerln_input = document.getElementById("lastname");
    const shirtnum_input = document.getElementById("shirtnumber");
    const position_input = document.getElementById("position")
    const goals_input = document.getElementById("playergoals");
    const assists_input = document.getElementById("playerassists");
    const titles_input = document.getElementById("playertitles");

    // Fetching Clubs to get Club name associated with provided ID
    const req_clubs = await fetch("/api/clubs")
    const clubs_data = await req_clubs.json()
    const clubs = clubs_data["data"]
    let new_club_id = 0

    clubs.forEach(club => {
        if(club.club_name === club_input.value){
          new_club_id = club.club_id
          console.log(new_club_id)
        }      
    });

    const new_player = {
      club_name: club_input.value,
      club_id: new_club_id,
      player_first_name: playerfn_input.value,
      player_last_name: playerln_input.value,
      player_shirtnum: shirtnum_input.value,
      player_titles_num: titles_input.value,
      player_position: position_input.value,
      player_goals: goals_input.value,
      player_assists: assists_input.value
    };

    // Adding new player to players table
    const req_player = await fetch('/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: new_player.player_first_name,
        last_name: new_player.player_last_name,
        club_id: new_player.club_id,
        club: new_player.club_name,
        shirt_number: new_player.player_shirtnum,
        best_player_counter: new_player.player_titles_num,
        position: new_player.player_position
      })
    })

    // Adding new player to Player Goals table
    const req_goals = await fetch('/api/player_goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: new_player.player_first_name,
        last_name: new_player.player_last_name,
        goals: new_player.player_goals,
        assists: new_player.player_assists
      })
    })

    const msg = document.createElement("p");
    if (req_player && req_goals) {
      msg.innerHTML = "Player successfully added";
      form.append(msg);
    } else {
      msg.innerHTML = `Failed to add player: ${req_player.status_code}`;
      form.append(msg);
    }

    return false;
  }

  form.addEventListener("submit", add_player);
};
