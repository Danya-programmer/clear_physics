jQuery(document).ready(function($){
$('#scrollToTop').fadeOut(); //скрываем кнопку
$(window).scroll(function () {
if ($(this).scrollTop() > 250) { // при прокрутке страницы на 250 пикселей вниз
$('#scrollToTop').fadeIn();   // отображаем кнопку
} else {
$('#scrollToTop').fadeOut(); // в противном случае скрываем
}
});
});
var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}
// страницы
$(document).ready(function(){  //дожидаемся загрузки страницы
    $('#theory').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
        $('.theory').toggleClass('theory-clicked');
        $('#theory_text').toggle(); //включает/выключает элемент id="text"

    });

});

$(document).ready(function(){
    $('#formulas').on("click", function(){
        $('.formulas').toggleClass('formulas-clicked');
        $('#formulas_text').toggle();
    });
});

$(document).ready(function(){
    $('#tasks').on("click", function(){
        $('.tasks').toggleClass('tasks-clicked');
        $('#tasks_text').toggle();
    });
});