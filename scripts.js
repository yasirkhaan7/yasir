function register() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const facebook = document.getElementById('facebook').value;

    if (phone || email || facebook) {
        alert('Thank you for registering!');
    } else {
        alert('Please fill in at least one field to register.');
    }
}
