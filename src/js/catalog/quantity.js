let formatter = new Intl.NumberFormat('ru');

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("quantity__plus") && e.target.parentElement.querySelector("input").value < 20) {
        ++e.target.parentElement.querySelector("input").value;
    } 
    if (e.target.classList.contains("quantity__minus") && e.target.parentElement.querySelector("input").value > 1) {
        --e.target.parentElement.querySelector("input").value;
    }
    if (e.target.classList.contains("quantity__plus") || e.target.classList.contains("quantity__minus")) {
        e.target.closest(".product-list__buy").querySelector(".price__value").innerHTML = formatter.format(Number(e.target.closest(".product-list__buy").querySelector(".price__value").getAttribute("data-price")) * Number(e.target.parentElement.querySelector("input").value));
    }
})