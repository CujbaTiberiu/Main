const navbar = document.querySelector('nav');
const button = document.querySelector('.specialLi');

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.pageYOffset > heroBottom) {
        navbar.style.backgroundColor = 'white';
        button.style.backgroundColor = 'green';
    } else {
        navbar.style.backgroundColor = '#ffc017';
        button.style.backgroundColor = 'black';
    }
});