// Function to handle scroll-based class toggling
function handleScroll() {
    const nav = document.getElementById('nav');
    const min = nav.getElementsByClassName('rightmin')[0].getElementsByTagName('a');
    const themeToggler = document.getElementById('theme-toggler');
    for (let i = 0; i < min.length; i++) {
        min[i].classList.add('ss');
    }
    themeToggler.classList.remove('bt');
    if (window.scrollY >= 10) {
        nav.classList.add('st');
        themeToggler.classList.add('bt');
       
    } else {
        nav.classList.remove('st');
        themeToggler.classList.remove('bt');
    }
}

// Function to highlight active link based on current section in view
function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('nav a.box');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

// Scroll event listener for navbar styling and link highlighting
window.addEventListener('scroll', function() {
    handleScroll();
    highlightActiveLink();
});

// Execute on page load
window.addEventListener('load', function() {
    handleScroll();
    highlightActiveLink();
    setTimeout(handleScroll, 100); // Ensure classes are applied after any initial delays
});

// Theme toggler functionality
document.getElementById('theme-toggler').addEventListener('click', (e) => {
    const body = document.body;
    const currentTheme = body.getAttribute('theme');
    const isDark = currentTheme === 'dark';
    body.setAttribute('theme', isDark ? 'light' : 'dark');
});

// Scroll to section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Set current year in footer
const d = new Date();
const yearElement = document.getElementById('copyright-year');
yearElement.textContent = d.getFullYear();
