let formatter = new Intl.NumberFormat('ru');

var btn = document.querySelectorAll('.product-list__btn');

var addCart = function (btn) {
    btn.addEventListener('click', function () {
        this.classList.add('btn--cart-active');
        this.textContent = 'В корзине';
        addUpdateCart();
    });
};

var addUpdateCart = function() {
    var count = 0;
    var price = 0;
    var product = document.querySelectorAll('.btn--cart-active');
    for (var i = 0; i < product.length; i++) {
        count += Number(product[i].parentNode.querySelector('.quantity__control').value);
        price += Number(product[i].parentNode.querySelector('.price__value').getAttribute('data-price')) * Number(product[i].parentNode.querySelector('.quantity__control').value);
    }
     
    document.querySelector('.nav__link--cart').title = 'Сумма: ' + formatter.format(price) + ' руб.'; 
    document.querySelector('.mini-cart__count').textContent = count; 
}

for (var i = 0; i < btn.length; i++) {
  addCart(btn[i]);
}