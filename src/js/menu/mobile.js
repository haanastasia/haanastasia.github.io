var btn = document.querySelector('.header__navbar-toggler');

btn.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
});

document.addEventListener('click', function (e) {
     
    if (!e.target.closest(".nav__list--mobile") && !e.target.closest(".header__navbar-toggler")) {
        document.querySelector('.header__menu').classList.remove('active');
    }
});

