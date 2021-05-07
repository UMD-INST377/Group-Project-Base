window.onload = async function windowActions() {
  const form = document.getElementById("remove-form");

  // DELETE PLAYERS
  async function delete_player() {
    const id_input = document.getElementById("player-id");

    const req_goals = await fetch("/api/player_goals/".concat(id_input.value), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const req = await fetch("/api/players/".concat(id_input.value), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const msg = document.createElement("p");
    if (req) {
      msg.innerHTML = "Player successfully deleted";
      form.append(msg);
    } else {
      msg.innerHTML = `Failed to delete player: ${req.status_code}`;
      form.append(msg);
    }

    return false;
  }

  form.addEventListener("submit", delete_player);
};
