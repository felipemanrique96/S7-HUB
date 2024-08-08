document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const loginSubmit = document.getElementById('loginSubmit');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            console.log("Login button clicked");
            loginPopup.style.display = 'block';
        });
    } else {
        console.error("Login button not found");
    }

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            console.log("Close button clicked");
            loginPopup.style.display = 'none';
        });
    } else {
        console.error("Close button not found");
    }

    if (loginSubmit) {
        loginSubmit.addEventListener('click', () => {
            handleLogin();
        });
    } else {
        console.error("Submit button not found");
    }

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && loginPopup.style.display === 'block') {
            handleLogin();
        }
    });

    function handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log("Handling login", username, password);
        if (username === 'settanta7' && password === '1234') {
            localStorage.setItem('username', username);
            window.location.href = 'https://felipemanrique96.github.io/S7-HUB-DASHBOARD/';
        } else {
            alert('Incorrect username or password');
        }
        loginPopup.style.display = 'none';
    }
});
