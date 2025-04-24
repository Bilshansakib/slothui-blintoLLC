const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
mobileMenuBtn.addEventListener('click', () => {
    // Implementing a simple mobile menu toggle
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.flexDirection = 'column';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '100';
    }
});

window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > T68) {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.flexDirection = 'row';
        navLinks.style.backgroundColor = 'transparent';
        navLinks.style.padding = '0';
        navLinks.style.boxShadow = 'none';
    } else {
        navLinks.style.display = 'none';
    }
});