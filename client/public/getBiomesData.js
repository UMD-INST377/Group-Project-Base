async function biomesList() {
  const list = document.querySelector('.bList');
  const req = await fetch('/api/biomes');
  const biomes = await req.json();
  biomes.forEach((biome) => {
    const newRecord = document.createElement('details');
    newRecord.innerHTML = `
        <summary>${biome.biome_id}</summary>
        <div class= 'columns'> 
          <div class = 'column is-half'>
            <div class="content listings">
                <h1>Biome Name: ${biome.Biome}</h1>
                <h3>Continent: ${biome.Continent}</h3>
            </div>
          </div>
        </div>`;
    list.append(newRecord);
  });
}
  
async function windowsActions() {
  await biomesList();
}
  
window.onload = windowsActions;