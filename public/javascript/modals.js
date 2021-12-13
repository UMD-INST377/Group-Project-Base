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
                    <p class="modal-card-title">Modal title</p>
                </header>
                <section class="modal-card-body">
                    <!-- Content ...-->
                    <p>Album Name: ${row[index]['Vinyl Name']}</p>
                    <p>Genre: ${row[index].Genre}</p>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-danger">Add Record</button>
                    <button class="button" id="cancel-vinyl">Cancel</button>
                </footer>
            </div>
            </div>
          `;
  }

  async function displayVinylModalTrending() {
    const response = await fetch('./api/vinyls');
    const vinyls = await response.json();

    const triggers = document.querySelectorAll('.trigger');

    for (let i = 0; i < triggers.length; i++) {
      test.innerHTML += (vinylInfo(vinyls, i));
    }

    const triggerArray = Array.from(triggers);
    const vinylModal = document.querySelectorAll('#vinylmodal');
    const cancelVinyl = document.querySelectorAll('#cancel-vinyl');

    triggerArray.forEach((trigger, index) => {
      const toggleModal = () => {
        vinylModal[index].classList.toggle('is-active');
      };

      trigger.addEventListener('click', toggleModal);
      cancelVinyl[index].addEventListener('click', toggleModal);
    });
  }
  displayVinylModalTrending();
});