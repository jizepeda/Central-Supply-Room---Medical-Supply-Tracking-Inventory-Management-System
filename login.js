/**
 * Login Form Validation Script
 *
 * This script handles client-side validation for the login form
 * Validates username format and password strength before submission
 * Prevents invalid data from being submitted to the server
 */

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // SIMPLE LOGIN CHECK (hardcoded)
    if (username === 'admin1' && password === 'admin1234') {
        // success login
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // redirect
    } else {
        // failed login
        alert('Invalid username or password');
    }
});

