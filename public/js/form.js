let registerForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form');
let signUp = document.getElementById('sign-up');
let signIn = document.getElementById('sign-in');

signUp.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    if (registerForm.style.display == 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }
});

signIn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    if (loginForm.style.display == 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
});

// Ensure that the correct form is shown initially
registerForm.style.display = 'none';  // Hide register form by default
loginForm.style.display = 'block';    // Show login form by default



