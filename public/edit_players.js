window.onload = async function windowActions() {
  const form = document.getElementById("edit-form");

  // EDITING PLAYERS
  async function edit_players() {
    const id_input = document.getElementById("player-id");
    const club_input = document.getElementById("playerclub");
    const playerfn_input = document.getElementById("firstname");
    const playerln_input = document.getElementById("lastname");
    const shirtnum_input = document.getElementById("shirtnumber");
    const player_pos_input = document.getElementById("position");
    const goals_input = document.getElementById("playergoals");
    const assists_input = document.getElementById("playerassists");
    const titles_input = document.getElementById("playertitles");
    const selection = document.getElementById("selection");

    // fetching specified player
    const playerRequest = await fetch("/api/players/".concat(id_input.value));
    const playerData = await playerRequest.json();
    const playerGoalsRequest = await fetch(
      "/api/player_goals/".concat(id_input.value)
    );
    const playerGoalsData = await playerGoalsRequest.json();
    const player = playerData[0];
    const playerGoals = playerGoalsData[0];

    // Fetching Clubs to get Club name associated with provided ID
    const req_clubs = await fetch("/api/clubs");
    const clubs_data = await req_clubs.json();
    const clubs = clubs_data["data"];
    let new_club_id = 0;

    clubs.forEach((club) => {
      if (club.club_name === club_input.value) {
        new_club_id = club.club_id;
        console.log(new_club_id);
      }
    });

    if (selection.value === "1") {
      const new_fname = playerfn_input.value;
      const new_lname = playerln_input.value;

      const req_player = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: new_fname,
          last_name: new_lname,
          club: player.club,
          club_id: player.club_id,
          shirt_number: player.shirt_number,
          position: player.position,
          best_player_counter: player.best_player_counter,
        }),
      });
      const req_player_goals = await fetch("/api/player_goals", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: new_fname,
          last_name: new_lname,
          goals: playerGoals.goals,
          assists: playerGoals.assists,
        }),
      });

      const msg = document.createElement("p");
      if (req_player && req_player_goals) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "2") {
      const new_club_name = club_input.value;
      const req_player = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: player.first_name,
          last_name: player.last_name,
          club: new_club_name,
          club_id: new_club_id,
          shirt_number: player.shirt_number,
          position: player.position,
          best_player_counter: player.best_player_counter,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "3") {
      const new_shirt_number = shirtnum_input.value;

      const req_player = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: player.first_name,
          last_name: player.last_name,
          club: player.club,
          club_id: player.club_id,
          shirt_number: new_shirt_number,
          position: player.position,
          best_player_counter: player.best_player_counter,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "4") {
      const new_position = player_pos_input.value;

      const req_player = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: player.first_name,
          last_name: player.last_name,
          club: player.club,
          club_id: player.club_id,
          shirt_number: player.shirt_number,
          position: new_position,
          best_player_counter: player.best_player_counter,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "5") {
      const new_goals = goals_input.value;

      const req_player = await fetch("/api/player_goals", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: playerGoals.player_id,
          first_name: playerGoals.first_name,
          last_name: playerGoals.last_name,
          goals: new_goals,
          assists: playerGoals.assists,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "6") {
      const new_assists = assists_input.value;

      const req_player = await fetch("/api/player_goals", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: playerGoals.player_id,
          first_name: playerGoals.first_name,
          last_name: playerGoals.last_name,
          goals: playerGoals.goals,
          assists: new_assists,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "6") {
      const new_assists = assists_input.value;

      const req_player = await fetch("/api/player_goals", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: playerGoals.player_id,
          first_name: playerGoals.first_name,
          last_name: playerGoals.last_name,
          goals: playerGoals.goals,
          assists: new_assists,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    } else if (selection.value === "7") {
      const new_titles = titles_input.value;

      const req_player = await fetch("/api/players", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_id: player.player_id,
          first_name: player.first_name,
          last_name: player.last_name,
          club: player.club,
          club_id: player.club_id,
          shirt_number: player.shirt_number,
          position: player.position,
          best_player_counter: new_titles,
        }),
      });

      const msg = document.createElement("p");
      if (req_player) {
        msg.innerHTML = "Player successfully edited";
        form.append(msg);
      } else {
        msg.innerHTML = `Failed to edit player: ${req.status_code}`;
        form.append(msg);
      }
    }

    return false;
  }

  form.addEventListener("submit", edit_players);
};

// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#bar");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
