var btn = document.querySelectorAll('.product-list__btn');

var addCart = function (btn) {
    btn.addEventListener('click', function () {
        this.classList.add('btn--cart-active');
        this.textContent = 'В корзине';
        addMiniCart(this.parentNode.querySelector(".quantity__control").value);
    });
};

var addMiniCart = function(count) {
    document.querySelector(".mini-cart__count").textContent = Number(document.querySelector(".mini-cart__count").textContent) + Number(count);
}

for (var i = 0; i < btn.length; i++) {
  addCart(btn[i]);
}


 