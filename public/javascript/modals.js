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

// vinyl modal
const triggers = document.querySelectorAll('.trigger');
const triggerArray = Array.from(triggers);
const vinylModals = document.querySelectorAll('#vinylmodal');
const cancelVinyl = document.querySelectorAll('#cancel-vinyl');
const closeVinyl = document.querySelectorAll('#close-vinyl');

triggerArray.forEach((trigger, index) => {
  const toggleModal = () => {
    vinylModals[index].classList.toggle('is-active');
  };

  trigger.addEventListener('click', toggleModal);
  cancelVinyl[index].addEventListener('click', toggleModal);
});