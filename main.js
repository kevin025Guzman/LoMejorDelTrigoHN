import './css/normalice.css';
import './css/styles.css';
import './css/premium.css';

document.addEventListener('DOMContentLoaded', () => {
    // Logic to set the active nav link based on current URL path
    const path = window.location.pathname;
    
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Exact match for root
        if (path === '/' && linkPath === '/') {
            link.classList.add('inicio');
            link.setAttribute('id', 'inicio');
            return;
        }

        // For other pages, check if the link path matches the current path without '/pages/' and '.html'
        if (path !== '/' && linkPath.includes(path.replace('.html', ''))) {
            link.classList.add('inicio');
            link.setAttribute('id', 'inicio');
        } else {
            if (linkPath !== '/') {
                link.classList.remove('inicio');
                link.removeAttribute('id');
            }
        }
    });

    // Lógica para el Menú Hamburguesa Móvil
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    if(hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
});
