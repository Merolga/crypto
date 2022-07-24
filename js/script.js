const headerNavBtn = document.querySelector('.header-button');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation--is-open');
})