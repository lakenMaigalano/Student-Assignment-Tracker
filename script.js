const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

// Toggle between Sign-In/Sign-Up panels
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Store users in localStorage
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([]));
}

// Sign-Up: Save new user
document.querySelector('.sign-up-container form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const users = JSON.parse(localStorage.getItem('users'));
  
  // Check if email already exists
  if (users.some(user => user.email === email)) {
    alert('Email already registered!');
    return;
  }

  // Add new user
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  
  alert('Account created! Switch to Sign-In.');
  this.reset();
  container.classList.remove('right-panel-active'); // Switch to Sign-In
});

// Sign-In: Validate user
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  const users = JSON.parse(localStorage.getItem('users'));

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert(`Welcome back, ${user.name}!`);
    window.location.href = "index.html"; // Redirect on success
  } else {
    alert("Invalid email or password!");
  }
});
