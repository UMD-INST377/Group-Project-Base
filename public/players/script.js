const playerHTMLList = document.getElementById("playerList");
const playerTable = document.getElementById("playerTable");
const exampleModal = document.getElementById("exampleModal");

const searchForPlayers = async () => {
  searchBox = document
    .getElementById("playerDataInput")
    .addEventListener("input", async () => {
      searchTerm = document.getElementById("playerDataInput").value;
      const result = await fetch(`/api/basketball/players/${searchTerm}`);
      const players = await result.json();
      playerHTMLList.innerHTML = "";

      players.map((player) => {
        const playerNode = document.createElement("tr");
        playerNode.setAttribute("data-bs-toggle", "modal");
        playerNode.setAttribute("data-bs-target", "#exampleModal");
        playerNode.setAttribute("data-bs-first_name", `${player.first_name}`);
        playerNode.setAttribute("data-bs-last_name", `${player.last_name}`);
        playerNode.setAttribute("data-bs-height", `${player.height}`);
        playerNode.setAttribute("data-bs-weight", `${player.weight}`);
        playerNode.setAttribute("data-bs-position", `${player.position}`);
        playerNode.classList.add("player");
        playerNode.innerHTML = `<td>${player.first_name}</td><td>${player.last_name}</td><td>${player.height}</td><td>${player.weight}</td><td>${player.position}</td>`;
        playerHTMLList.appendChild(playerNode);
      });
    });
};

exampleModal.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var first_name = button.getAttribute("data-bs-first_name");
  var last_name = button.getAttribute("data-bs-last_name");
  var height = button.getAttribute("data-bs-height");
  var weight = button.getAttribute("data-bs-weight");
  var position = button.getAttribute("data-bs-position");

  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector(".modal-title");
  var modalContent = exampleModal.querySelector(".modal-body");

  modalTitle.textContent = first_name + " " + last_name;
  modalContent.innerHTML = `<p>Height: ${height}"</p><p>Weight: ${weight}lbs</p><p>Position: ${position}</p>`;
});

searchForPlayers();
