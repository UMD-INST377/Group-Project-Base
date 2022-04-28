async function mainEvent() {
  // Hamburger Menu
  const header = document.querySelector('Header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav');
  hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Sign Up Modal
  const signUpModal = document.querySelector('.sign_up_modal');
  const modal = document.querySelector('.modal');
  const signUpLink = document.querySelector('.sign_up');
  signUpLink.addEventListener('click', () => {
    console.log('direct hit');
    signUpModal.style.display = 'flex';
    modal.style.display = 'block';
  });

  // User Sign Up
  signUpModal.style.display = 'none';
  modal.style.display = 'none';

  // Login Modal
  const loginModal = document.querySelector('.login_modal');
  const loginLink = document.querySelector('.login');

  loginLink.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    modal.style.display = 'block';
  });

  modal.addEventListener('click', () => {
    loginModal.style.display = 'none';
    modal.style.display = 'none';
  });

  // User Sign Up
  const signUpSubmit = document.querySelector('#sign_up');
  signUpSubmit.addEventListener('click', (submitEvent) => {
    submitEvent.preventDefault();
    window.location.href = '/index.html';
  });

  modal.addEventListener('click', () => {
    signUpModal.style.display = 'none';
    modal.style.display = 'none';
  });

  const editModal = document.querySelector('.edit_modal');
  const editLink = document.querySelector('#submit_change');
  const editorModal = document.querySelector('.editor_modal');
  // Edit Modal
  const buttonListener = document.querySelector('.edit');
  buttonListener.addEventListener('click', (e) => {
    e.preventDefault();
    editModal.style.display = 'flex';
    editorModal.style.display = 'block';
    fetchQueries();
  });
  editorModal.addEventListener('click', (e) => {
    e.preventDefault();
    editModal.style.display = 'none';
    editorModal.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', mainEvent);