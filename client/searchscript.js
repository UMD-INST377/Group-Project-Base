async function windowActions() {
  // Get data
  const request = await fetch("/api/HotelOverview");
  const arrayName = await request.json();

  function findMatches(wordToMatch, arrayName) {
    return arrayName.filter((place) => {
      const regex = RegExp(wordToMatch, "gi");
      return (
        place.hotel_name.match(regex)
      );
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, arrayName);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(event.target.value, "gi");
        place.hotel_name.replace(
          regex,
          `<span class="h1">${event.target.value.toUpperCase()}</span>`
        );
        return `
              <ul>
              <li><div>${place.hotel_name}</div></li>
              </ul>
                  `;
      })
      .join("");

    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", (evt) => {
    displayMatches(evt);
  });
}
window.onload = windowActions;
