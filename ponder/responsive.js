let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menubar.classList.toggle('hide');
    btn.classList.toggle('change');
}