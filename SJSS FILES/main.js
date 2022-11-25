// Automatically update year

const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// pre loader

const preloader = document.querySelector('.pre-loader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});