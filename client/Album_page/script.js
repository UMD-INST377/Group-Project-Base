async function loadTable() {
  const endpoint = '../api/album';
  const request = await fetch(endpoint);
  const albums = await request.json();

  async function injectTable() {
    const html = albums.map((album) => `
                    <tr>
                        <td>${album.album_name}</td>
                        <td>${album.album_release_date}</td> 
                    </tr>`).join('');
    return html;
  }

  const table = document.querySelector('.table');
  table.innerHTML = await injectTable();
}
window.onload = loadTable;