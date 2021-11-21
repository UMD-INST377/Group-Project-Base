document.addEventListener('DOMContentLoaded', () => {
  const top100List = document.querySelector('.top-100-movie-list');

  // This will create the cards with the images attached
  function displayImageCard() {
  }

  async function imageExtractor() {
    // fetch the films table
    const response = await fetch('../api/top100');
    // extract the json data
  }
  let counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
});
