let formatter = new Intl.NumberFormat('ru');

var operation = document.querySelectorAll('.quantity__operation');

var addOperationClickHandler = function (operation) {
    operation.addEventListener('click', function () {
        if (this.classList.contains("quantity__plus") && this.parentNode.querySelector("input").value < 20) {
            ++this.parentNode.querySelector("input").value;
        } 
        if (this.classList.contains("quantity__minus") && this.parentNode.querySelector("input").value > 1) {
            --this.parentNode.querySelector("input").value;
        }
        var price = this.parentNode.previousElementSibling;
        price.querySelector(".price__value").innerHTML = formatter.format(Number(price.querySelector(".price__value").getAttribute("data-price")) * Number(this.parentNode.querySelector("input").value));
    });
};

for (var i = 0; i < operation.length; i++) {
  addOperationClickHandler(operation[i]);
}