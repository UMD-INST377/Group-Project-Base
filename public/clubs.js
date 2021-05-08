window.onload = async function windowActions() {
  const request = await fetch("/api/clubs");
  const clubsData = await request.json();
  const clubs = clubsData["data"];

  const tableTarget = document.querySelector("#table-target");
  const form = document.querySelector("#search");
  const input = document.querySelector(".input");

  // PAGE SETUP

  function setup() {
    tableTarget.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Club's Name</th>
                <th>Coach's Name</th>
                <th>Number of Players</th>
            </tr>
        `;
    clubs.forEach((element) => {
      const clubID = element.club_id;
      const clubName = element.club_name;
      const coachName = element.coach_first_name.concat(
        " ",
        element.coach_last_name
      );
      const numPlayers = element.num_of_players;
      const table_row = document.createElement("tr");
      table_row.innerHTML = `
                <td>${clubID}</td>
                <td>${clubName}</td>
                <td>${coachName}</td>
                <td>${numPlayers}</td>
            `;
      tableTarget.append(table_row);
    });
  }

  function displaySearchResults() {
    clubs.forEach((element) => {
      if (element.club_name === input.value) {
        const clubID = element.club_id;
        const clubName = element.club_name;
        const coachName = element.coach_first_name.concat(
          " ",
          element.coach_last_name
        );
        const numPlayers = element.num_of_players;

        tableTarget.innerHTML = `
                    <tr>
                        <th>ID</th>
                        <th>Club's Name</th>
                        <th>Coach's Name</th>
                        <th>Number of Players</th>
                    </tr>
                    <tr>
                        <td>${clubID}</td>
                        <td>${clubName}</td>
                        <td>${coachName}</td>
                        <td>${numPlayers}</td>
                    </tr>
                `;
      }
    });

    return false;
  }
  setup();
  form.onsubmit = displaySearchResults;
  form.onreset = setup;
};

// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#bar");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
