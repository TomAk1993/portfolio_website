// This is the nav-bar scroll section
const links = document.querySelectorAll('.navLink');
links.forEach((link) => {
    link.addEventListener('click', () => {

        let el = document.getElementById(link.getAttribute("data-link"));
       el.scrollIntoView({behavior:"smooth", block: "start"})
            
    })
});