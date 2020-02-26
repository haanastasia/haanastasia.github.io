var text = document.querySelectorAll('.text--more');
 
var moreText = function (text) {


    if(text.querySelectorAll('p').length > 3) {
        var btn = document.createElement('div');
        btn.className = "btn-more";
        btn.innerHTML = "Показать еще";
        text.append(btn);
    } 
     
    text.querySelector('.btn-more').addEventListener('click', function () {
        text.classList.toggle('active');
        
        if(text.closest(".active")) {
            btn.innerHTML = "Скрыть";
        }
        else {
            btn.innerHTML = "Показать еще";
        }

    });
};

for (var i = 0; i < text.length; i++) {
    moreText(text[i]);
}