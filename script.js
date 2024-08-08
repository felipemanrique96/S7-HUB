document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const loginSubmit = document.getElementById('loginSubmit');

    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    loginSubmit.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'settanta7' && password === '1234') {
            localStorage.setItem('username', username);
            window.location.href = 'https://felipemanrique96.github.io/S7-HUB-DASHBOARD/';
        } else {
            alert('Incorrect username or password');
        }
        loginPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
});
