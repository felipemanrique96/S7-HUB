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

    // Show login button after h1 and h2 animations are done
    setTimeout(() => {
        loginButton.classList.add('show');
    }, 5500); // Time in milliseconds after which the login button appears (total animation duration)

    // Three.js code
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Black background with transparency

    // Create an organic form using TorusKnotGeometry, further increased size
    const geometry = new THREE.TorusKnotGeometry(13.5, 4.0, 150, 32); // Larger size and more segments

    // Create points material with larger size
    const material = new THREE.PointsMaterial({ color: 0x264653, size: 0.2 }); // Larger dot size
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 70; // Move camera back to fit the larger geometry

    function animate() {
        requestAnimationFrame(animate);

        points.rotation.x += 0.0015; // Slower rotation speed
        points.rotation.y += 0.0015; // Slower rotation speed

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
