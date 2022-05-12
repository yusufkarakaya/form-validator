const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const errorMessage = formControl.querySelector('small');
  errorMessage.innerText = message;
}
//success error message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//first character make upper
function firstFieldUpper(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//control required
function isRequired(inputArray) {
  let isRequired = false;
  inputArray.forEach((input) => {
    if (input.value === '') {
      showError(input, `${firstFieldUpper(input)} is required`);
    } else {
      isRequired = true;
    }
    return isRequired;
  });
}

//input length control
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${firstFieldUpper(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${firstFieldUpper(input)} must be less than 15 ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//passwords control
function checkPasswordMatch(input1, input2) {
  console.log(input1.value);
  console.log(input2.value);
  if (input1.value.trim() !== input2.value.trim()) {
    showError(input2, 'Password does not match');
  } else if (input2.value > 5) {
    showSuccess(input2);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  isRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordMatch(password, password2);
});
