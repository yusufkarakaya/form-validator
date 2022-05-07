const passwordId = document.getElementById('password');
const confirmPasswordId = document.getElementById('confirm-password');

function controlUsername(event) {
  event.preventDefault();
  const userNameId = document.getElementById('username');
  const userNameError = document.getElementById('username-error');

  if (userNameId.value.length >= 3) {
    userNameError.textContent = '';
    userNameId.focus();
    userNameId.style.borderColor = 'green';
  }
  if (userNameId.value.length < 3) {
    userNameError.textContent = 'Username must be at least 3 characters';
    userNameError.style.color = 'red';
    userNameId.focus();
    userNameId.style.borderColor = 'red';
  }
  if (userNameId.value.length >= 15) {
    userNameError.textContent = 'Username must be less than 15 characters';
    userNameError.style.color = 'red';
    userNameId.focus();
    userNameId.style.borderColor = 'red';
  }
}

function controlEmail(event) {
  event.preventDefault();
  const emailId = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailId.value.match(mailformat)) {
    emailId.focus();
    emailId.style.borderColor = 'green';
    emailError.textContent = '';
  } else {
    emailError.textContent = 'Email is not valid';
    emailId.style.borderColor = 'red';
    emailError.style.color = 'red';
  }
}

function controlPassword() {
  const passwordErrorID = document.getElementById('password-error');

  const password = /^[A-Za-z]\w{5,24}$/;
  if (passwordId.value.length >= 6 && passwordId.value.length <= 25) {
    if (passwordId.value.length[0] !== 'string') {
      passwordErrorID.textContent = 'First character must be letter';
    }
    if (passwordId.value.match(password)) {
      passwordId.style.borderColor = 'green';
      passwordErrorID.textContent = '';
    }
  }

  if (passwordId.value.length < 6) {
    passwordErrorID.textContent = 'Password must be at least 6 characters';
    passwordId.style.borderColor = 'red';
    passwordErrorID.style.color = 'red';
  }
  if (passwordId.value.length > 25) {
    passwordErrorID.textContent = 'Password must be less than 25 characters';
    passwordId.style.borderColor = 'red';
    passwordErrorID.style.color = 'red';
  }
}

function passwordMatch() {
  const confirmPasswordError = document.getElementById(
    'confirm-password-error'
  );

  if (confirmPasswordId.value.length === passwordId.value.length) {
    if (confirmPasswordId.value.match(passwordId)) {
      confirmPasswordId.style.borderColor = 'green';
      confirmPasswordError.textContent = '';
    }
  } else {
    confirmPasswordId.style.borderColor = 'red';
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPasswordError.style.color = 'red';
  }
}