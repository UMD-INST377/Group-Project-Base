window.onload = async function windowActions() {
  const form = document.getElementById("add-form");

  // ADDING CLUBS
  async function add_club() {
    const name_input = document.getElementById("club-name");
    const coachfn_input = document.getElementById("first-name");
    const coachln_input = document.getElementById("last-name");
    const num_input = document.getElementById("num-players");

    const new_club = {
      club_name: name_input.value,
      coach_first_name: coachfn_input.value,
      coach_last_name: coachln_input.value,
      num_of_players: num_input.value,
    };
    const req = await fetch("/api/clubs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        club_name: new_club.club_name,
        coach_first_name: new_club.coach_first_name,
        coach_last_name: new_club.coach_last_name,
        num_of_players: new_club.num_of_players,
      }),
    });

    const msg = document.createElement("p");
    if (req) {
      msg.innerHTML = "Club successfully added";
      form.append(msg);
    } else {
      msg.innerHTML = `Failed to add club: ${req.status_code}`;
      form.append(msg);
    }

    return false;
  }

  form.addEventListener("submit", add_club);
};

// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#bar");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
