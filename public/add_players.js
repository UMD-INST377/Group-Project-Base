window.onload = async function windowActions() {
  const form = document.getElementById("add-form");

  // ADDING PLAYERS
  async function add_player() {
    const club_input = document.getElementById("playerclub");
    const playerfn_input = document.getElementById("firstname");
    const playerln_input = document.getElementById("lastname");
    const shirtnum_input = document.getElementById("shirtnumber");
    const goals_input = document.getElementById("playergoals");
    const assists_input = document.getElementById("playerassists");
    const titles_input = document.getElementById("playertitles");

    const new_player = {
      club_name: club_input.value,
      player_first_name: playerfn_input.value,
      player_last_name: playerln_input.value,
      player_shirtnum: num_input.value,
      player_goals_num: goals_input.value,
      player_assists_num: assists_input.value,
      player_titles_num: titles_input.value,
    };

    const req = await fetch("/api/players", {
      method: "POST",
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
      msg.innerHTML = "Player successfully added";
      form.append(msg);
    } else {
      msg.innerHTML = `Failed to add player: ${req.status_code}`;
      form.append(msg);
    }

    return false;
  }

  form.addEventListener("submit", add_player);
};
