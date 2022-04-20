async function populateGenres() {
  const dropdown = document.querySelector('#genres-input');
  const results = await fetch('/api/genres');
  const arrayFromJson = await results.json();
  arrayFromJson.data.forEach((item) => {
    if (item.genre !== 'Other') {
      const option = document.createElement('option');
      option.text = item.genre;
      option.value = item.genre;
      dropdown.appendChild(option);
    }
  });
}
async function populateRatings() {
  const dropdwn = document.querySelector('#ratings-input');
  const RatingResult = await fetch('/api/ratings');
  const arrayFromJson = await RatingResult.json();
  arrayFromJson.data.forEach((item) => {
    if (item.rating !== 'Other') {
      const RatingOption = document.createElement('option');
      option.text = item.rating;
      option.value = item.rating;
      dropdwn.appendChild(option);
    }
  })
}

document.addEventListener('DOMContentLoaded', async () => {
  // populate genres dropdown
  await populateGenres();
  await populateRatings();

  // select dropdowns
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  // for demo purposes; to be deleted
  function multiplyNode(node, count, deep) {
    for (let i = 0, copy; i < count - 1; i += 1) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
    }
  }
  multiplyNode(document.querySelector('.movie'), 12, true);
});