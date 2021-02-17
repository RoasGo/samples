// select element function
const selectElement = (e) => document.querySelector(e);

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 100,
    vFactor: 1
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 200
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 100
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 100
});
