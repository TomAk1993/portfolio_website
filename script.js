const barTop = document.getElementById('bar-one');
const barBottom = document.getElementById('bar-three');
const hamburger = document.getElementById('hamburger');
const centerBar = document.getElementById('bar-two');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');

// Hamburger Animations
hamburger.addEventListener('click', () => {
    barTop.classList.toggle('rotate-right');
    barBottom.classList.toggle('rotate-left');
    centerBar.classList.toggle('disappear');
    navMenu.classList.toggle('nav-active');
});

// Close Mobile Menu When clicking on link
for(let link of navLink) {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
        barTop.classList.remove('rotate-right');
        barBottom.classList.remove('rotate-left');
        centerBar.classList.remove('disappear');
    })
}
