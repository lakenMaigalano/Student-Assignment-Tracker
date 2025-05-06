const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

// Panel switching
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Basic login validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const validEmail = "user@example.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password!");
  }
});
