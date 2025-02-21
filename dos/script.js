document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario1' && password === '12345a') {
        document.getElementById('login-form').style.display = 'none';
        const userNameElement = document.getElementById('user-name');
        userNameElement.textContent = username;
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        alert('Credenciales incorrectas');
    }
});
