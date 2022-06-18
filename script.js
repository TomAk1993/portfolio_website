// This is the nav-bar scroll section

const links = document.querySelectorAll('.navLink');
links.forEach((link) => {
    link.addEventListener('click', () => {

        let el = document.getElementById(link.getAttribute("data-link"));
       el.scrollIntoView({behavior:"smooth", block: "start"})

            
    })
});


// Button to get users back to the top of the webpage 

const toTop = document.querySelector('.toTop');

    window.addEventListener('scroll', () => {
        if ( window.pageYOffset > 500){
            toTop.classList.add('active');
        } else {
            toTop.classList.remove('active');
        }
    });

toTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});  