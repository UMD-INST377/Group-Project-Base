// add record modal
const addrecordButton = document.querySelector('#addrecord');
const addrecordClose = document.querySelector('#addrecord-close');
const addrecordModal = document.querySelector('#addrecordModal');

addrecordButton.addEventListener('click', () => {
  addrecordModal.classList.add('is-active');
});

addrecordClose.addEventListener('click', () => {
  addrecordModal.classList.remove('is-active');
});