import './css/normalice.css';
import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    // Logic to set the active nav link based on current URL path
    const path = window.location.pathname;
    let filename = path.split('/').pop();
    
    if (filename === '' || filename === '/') {
        filename = 'index.html';
    }

    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        // Obtenemos solo la última parte del href (ignorando si tiene slash al inicio)
        const linkPath = link.getAttribute('href');
        if (linkPath === filename) {
            link.classList.add('inicio');
            link.setAttribute('id', 'inicio');
        } else {
            link.classList.remove('inicio');
            link.removeAttribute('id');
        }
    });

    // Inyectar fuentes de Google Fonts optimizadas a traves de JS para no bloquear render, o simplemente dejarlo aqui importado en CSS.
    // Nosotros unificaremos las fuentes en CSS global.
});
