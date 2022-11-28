// Automatically update year

const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// pre loader

const preloader = document.querySelector('.pre-loader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});

// On click display vision, mission and values
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        // remove active class from all id's that are selected or clicked-target
    btns.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    // hide all article contents from view
articles.forEach((article) => {
    article.classList.remove('active')
});
//    Add article contents according to id
const element = document.getElementById(id);
element.classList.add('active');
    }
});
