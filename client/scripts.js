async function loadIntoTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  const tableFinder = document.querySelector('.table');
  // creating the rows
  const row = document.createElement('tr');
  arrayFromJson.forEach((element) => {
    row.innerHTML = `<td>`

   
  });
  tableFinder.appendChild(row);
}
loadIntoTable('/api/artists');
