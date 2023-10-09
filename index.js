const form = document.querySelector('.form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email')
const password = document.getElementById('password');

const errorField = document.querySelectorAll(".error");


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


form.addEventListener('submit', (e) => {

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  e.preventDefault();

  if (firstNameValue === '') {
    errorField[0].style.display = 'block';
    firstName.classList.add('error-input')
  }

  if (lastNameValue === '') {
    errorField[1].style.display = 'block';
    lastName.classList.add('error-input')
  }

  if (emailValue === '') {
    errorField[2].style.display = 'block';
    errorField[2].textContent = 'Email cannot be empty';
    email.classList.add('error-input')
  } else if (!isValidEmail(emailValue)) {
    errorField[2].textContent = 'Looks like this is not an email';
    errorField[2].style.display = 'block';
    email.classList.add('error-input')
  }

  if (passwordValue === '') {
    errorField[3].style.display = 'block';
    password.classList.add('error-input')
  }
});

/*** Remove the error if you write inside a input again ***/

firstName.addEventListener('input', () => {
  if (firstName.value.trim() !== '') {
    errorField[0].style.display = 'none';
    firstName.classList.remove('error-input');
  }
});

lastName.addEventListener('input', () => {
  if (lastName.value.trim() !== '') {
    errorField[1].style.display = 'none';
    lastName.classList.remove('error-input');
  }
});

email.addEventListener('input', () => {
  if (email.value.trim() !== '') {
    errorField[2].style.display = 'none';
    email.classList.remove('error-input');
  }
});

password.addEventListener('input', () => {
  if (password.value.trim() !== '') {
    errorField[3].style.display = 'none';
    password.classList.remove('error-input');
  }
});







