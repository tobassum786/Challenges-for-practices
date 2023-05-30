//Toogle menu 

function toogleMenu() {
    const toogleItems = document.querySelector('.toogle__menu');
    const menu = document.querySelector('#nav__menu');
    toogleItems.classList.toggle('active');
    menu.classList.toggle('active');
}