// const { request } = require("express");

/* This is for the nav-bar */
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(($el) => {
      $el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const { target } = $el.dataset;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

/* Setting up a type head request for Museum Information */ 


async function windowActions() {
	const request = await fetch('/api/museum_info') // Fetch request
	const names = await request.json() // Empty array, this replaces the race condition promise chain
																		// from the original tutorial
  console.log(names);

	function findMatches(wordToMatch) {
		return names.data.filter((museums) => {
			const regex = new RegExp(wordToMatch, 'gi');
			return museums.museum_name.match(regex)
		});
	}

	function displayMatches(event) {
		const matchArray = findMatches(event.target.value, names);
		const html = matchArray.map((museums) => {
			const regex = new RegExp(event.target.value, 'gi');
			const museumName = museums.museum_name.replace(regex, `<span class="h1">${event.target.value}</span>`); // Highlights the restaurants name 		
			return `
				<li>
				<span class = "Title">${museumName}</span>
        <li class = "URL">${museums.museum_url}</li>
        <li class = "Address">${museums.museum_address}</li>
        <li class = "City">${museums.museum_city}</li>
				</li>
			`;
		}).join('');
		recommendations.innerHTML = html;	
		
	}

	const searchInput = document.querySelector('.typehead');
	const recommendations = document.querySelector('.suggestions');

	searchInput.addEventListener('input', displayMatches);
	searchInput.addEventListener('button', displayMatches);
		
}

window.onload = windowActions;
