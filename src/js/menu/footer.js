var btn = document.querySelectorAll('.footer__title');
 
var toggleMenu = function (btn) {
    btn.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active');
    });
};

for (var i = 0; i < btn.length; i++) {
    toggleMenu(btn[i]);
}