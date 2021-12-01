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