document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        document.getElementById('message').innerText = 'Emails do not match';
    } else {
        // You can proceed with your registration logic here
        // For this example, it simply displays a success message
        document.getElementById('message').innerText = 'Registration successful';
    }
});
