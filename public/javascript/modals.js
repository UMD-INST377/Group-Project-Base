/* eslint-disable no-plusplus */
// sign-up modal
const signupButton = document.querySelector('#signup');
const signupClose = document.querySelector('#signup-close');
const signupModal = document.querySelector('#signupModal');

signupButton.addEventListener('click', () => {
  signupModal.classList.add('is-active');
});

signupClose.addEventListener('click', () => {
  signupModal.classList.remove('is-active');
});

// cancel modal
const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => {
  signupModal.classList.remove('is-active');
});

document.addEventListener('DOMContentLoaded', () => {
  const test = document.querySelector('.test');

  function vinylInfo(row, index) {
    return `
    <div class="modal" id="vinylmodal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <span>Vinyl<br/><span>
                    <p class="modal-card-title">${row[index]['Album Name']}</p>
                    <span>${row[index]['Artist Name']} &middot ${new Date(row[index]['Date when First Available']).getFullYear()} &middot ${row[index]['Number of Songs']} songs, ${row[index].Runtime} runtime</span>
                </header>
                <section class="modal-card-body">
                    <!-- Content ...-->
                    <p>Genre: ${row[index].Genre}</p>
                    <br>
                    <table style="width:100%">
                      <tr>
                        <th>Description</th>
                      </tr>
                      <tr>
                        <td>${row[index].Description}</td>
                      </tr>
                    </table>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-danger" id="done-vinyl">Done</button>
                </footer>
            </div>
            </div>
          `;
  }

  async function displayVinylModalTrending() {
    const response = await fetch('./api/vinylinfo');
    const vinyls = await response.json();

    const triggers = document.querySelectorAll('.trigger');

    for (let i = 0; i < triggers.length; i++) {
      test.innerHTML += (vinylInfo(vinyls, i));
    }

    const triggerArray = Array.from(triggers);
    const vinylModal = document.querySelectorAll('#vinylmodal');
    const doneVinyl = document.querySelectorAll('#done-vinyl');

    triggerArray.forEach((trigger, index) => {
      const toggleModal = () => {
        vinylModal[index].classList.toggle('is-active');
      };

      trigger.addEventListener('click', toggleModal);
      doneVinyl[index].addEventListener('click', toggleModal);
    });
  }
  displayVinylModalTrending();
});