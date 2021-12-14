async function windowActions() {
  const endpoint = '/api/eruption_info';
  const request = await fetch(endpoint);
  const names = await request.json();

  const searchInput = document.querySelector('.nameSearch');
  const suggestions = document.querySelector('.suggestions .photo-grid-container .photo-grid');

  console.log(names);
  function findMatches(wordToMatch, names) {
    return names.filter((info) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return info.volcano_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, names);
    const html = matchArray.map((info) => {
      const regex = new RegExp(event.target.value, 'gi');
      return `
      <div class='photo-grid-container' id='info_box'>
                <div class='photo-grid-item'>
                <div class="box">
                <center><div class="name">${info.volcano_name}</div>
                <div class="num">Eruption Number: ${info.eruption_number} </div></center>
              </div>
             </div>
            </div>
            <div class="modal">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                          <header class="modal-card-head">
                            <p class="modal-card-title" >Eruption Info</p>
                            <button class="delete" aria-label="close"></button>
                          </header>
                          <section class="modal-card-body">
                          </section>
                          <footer class="modal-card-foot">
                          </footer>
                        </div>
                      </div>
          
    `;
    }).join('');
    suggestions.innerHTML = html;
    const elements = document.querySelectorAll('#info_box');
    const delete_box = document.querySelector('.delete');

    const modalHtml = matchArray.map((info) => `<center><big><b><div class="name"> ${info.volcano_name}</div></b></big><br>
    <div class="id"><b>Eruption ID:</b> ${info.eruption_id}</div>
      <div class="num"><b>Eruption Number:</b> ${info.eruption_number} </div>
      <div class="date"><b>Date of Eruption:</b> ${info.year}-${info.month}-${info.day} </div>
      <div class="aoa"><b>Eruption AOA:</b> ${info.aoa}</div>
      <div class="vei"><b>Eruption VEI:</b> ${info.vei}</div>
      <div class="method"><b>Method:</b> ${info.method}</div>
      <div class="category"><b>Eruption Category:</b> ${info.category}</div>
      
      </center>`);

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', () => {
        const body = document.querySelector('.modal-card-body');
        body.innerHTML = modalHtml[i];
        document.querySelector('.modal').style.display = 'flex';
      });
      delete_box.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
      });
    }

    // elements.forEach((infoBox) => {
    //   infoBox.addEventListener('click', () => {
    //     const body = document.querySelector('.modal-card-body');
    //     body.innerHTML = modalHtml[index];
    //     document.querySelector('.modal').style.display = 'flex';
    //   });
    //   delete_box.addEventListener('click', () => {
    //     document.querySelector('.modal').style.display = 'none';
    //   });
    // });
  }

  window.addEventListener('mousemove', (evt) => { displayMatches(evt); }, { once: true });
  searchInput.addEventListener('input', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = windowActions;

function loadFile(event) {
  const image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
}