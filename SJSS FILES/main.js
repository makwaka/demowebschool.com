// Automatically update year
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Preloader
const preloader = document.querySelector('.pre-loader');
document.body.classList.add('pre-loading');

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
  document.body.classList.remove('pre-loading');
});

// On click display vision, mission and values
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // Remove active class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Hide all articles
    articles.forEach((article) => {
      article.classList.remove('active');
    });

    // Show the clicked article
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
