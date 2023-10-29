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


const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    if (scroll > 2000) {
        backToTop.classList.add('top-button');
    } else {
        backToTop.classList.remove('top-button');
    }
})

backToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})



// Reveals

window.addEventListener('load', revealUpLoad);
window.addEventListener('load', revealLoad);

function revealUpLoad() {
    const reveals = document.querySelectorAll('.reveal-up-load');
    for(let i = 0; i < reveals.length; i++){
            reveals[i].classList.add('active') 
    }
}

function revealLoad() {
    const reveals = document.querySelectorAll('.reveal-load');
    for(let i = 0; i < reveals.length; i++){
        reveals[i].classList.add('active') 
    }
}

window.addEventListener('scroll', revealUp);
function revealUp() {
    const reveals = document.querySelectorAll('.reveal-up');
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 0;
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active') 
        }
    }
}

window.addEventListener('scroll', reveal);
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 0;
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active') 
        }
    }
}

window.addEventListener('scroll', revealShort);
function revealShort() {
    const reveals = document.querySelectorAll('.reveal-up-short');
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 0;
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active') 
        }
    }
}
