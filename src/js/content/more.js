var text = document.querySelectorAll('.text--more');
 
var moreText = function (text) {

    for (var i = 3; i < text.querySelectorAll('p').length; i++) {
        text.querySelectorAll('p')[i].style.display = 'none';
    }

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
            var display = 'block';
        }
        else {
            btn.innerHTML = "Показать еще";
            var display = 'none';
        }
        for (var i = 3; i < text.querySelectorAll('p').length; i++) {
            text.querySelectorAll('p')[i].style.display = display;
        }
    });
};

for (var i = 0; i < text.length; i++) {
    moreText(text[i]);
}