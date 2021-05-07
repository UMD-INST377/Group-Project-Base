window.onload = async function windowActions() {
  const form = document.getElementById("edit-form");

  // EDITING PLAYERS
  async function edit_players() {
    const club_input = document.getElementById("playerclub");
    const playerfn_input = document.getElementById("firstname");
    const playerln_input = document.getElementById("lastname");
    const shirtnum_input = document.getElementById("shirtnumber");
    const goals_input = document.getElementById("playergoals");
    const assists_input = document.getElementById("playerassists");
    const titles_input = document.getElementById("playertitles");

    // fetching specified player
    const request = await fetch("/api/clubs/".concat(id_input.value));
    const clubData = await request.json();
    const player = playerData[0];

    if (selection.value === "1") {
      const new_fname = playerfn_input.value;
      const new_lname = playerln_input.value;

      const req = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          club_name: new_player.club_name,
          player_first_name: new_player.player_first_name,
          player_last_name: new_player.player_last_name,
          player_shirtnum: new_player.player_shirtnum,
          player_goals_num: new_player.player_goals_num,
          player_assists_num: new_player.player_assists_num,
          player_titles_num: new_player.player_titles_num,
        }),
      });

      const msg = document.createElement("p");
      if (req) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "2") {
      const new_num_of_players = num_input.value;

      const req = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          club_name: player.club_name,
          player_first_name: player.player_first_name,
          player_last_name: player.player_last_name,
          player_shirtnum: player.player_shirtnum,
          player_goals_num: player.player_goals_num,
          player_assists_num: player.player_assists_num,
          player_titles_num: player.player_titles_num,
        }),
      });

      const msg = document.createElement("p");
      if (req) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    }

    return false;
  }

  form.addEventListener("submit", edit_player);
};
