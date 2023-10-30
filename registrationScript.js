document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = 'Passwords do not match';
    } else {
        // You can proceed with your registration logic here
        // For this example, it simply displays a success message
        document.getElementById('message').innerText = 'Registration successful';
    }
});
