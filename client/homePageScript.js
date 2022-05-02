/* eslint-disable no-param-reassign */
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector('.form_message');

  messageElement.textContent = message;
  messageElement.classList.remove('form__message--success', 'input_error');
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add('text_error');
  inputElement.parentElement.querySelector('.error_message').textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove('text_error');
  inputElement.parentElement.querySelector('.error_message').textContent = '';
}

async function mainEvent() {
  const loginForm = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');

  document.querySelector('#new_account').addEventListener('click', (userForm) => {
    userForm.preventDefault();
    loginForm.classList.add('createNewUser');
    createAccountForm.classList.remove('createNewUser');
  });

  document.querySelector('#loginLink').addEventListener('click', (userForm) => {
    userForm.preventDefault();
    loginForm.classList.remove('createNewUser');
    createAccountForm.classList.add('createNewUser');
  });

  loginForm.addEventListener('submit', (userForm) => {
    userForm.preventDefault();
    setFormMessage(loginForm, 'error', 'Invalid email or password');
  });

  const oldEmail = document.querySelector('#used_email');
  const newEmail = document.querySelector('#new_email');
  const password = document.querySelector('#password');

  // TODO: if the email is in the database, show error message "exist"
  document.querySelectorAll('.input_text').forEach((inputElement) => {
    inputElement.addEventListener('blur', (userForm) => {
      if (newEmail.value === newEmail) {
        setInputError(inputElement, 'Email already exists');
      }

      if (password.length < 6) {
        setInputError(inputElement, 'Password should be at least 6 characters');
      }
      userForm.preventDefault();

      inputElement.addEventListener('input', (userForm) => {
        clearInputError(inputElement);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());

// const result = await fetch('/api/customer'); // from api
// const arrayFromJson = await result.json