const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile_menu');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile_active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile_active');
});