$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 290) {
            $('header').addClass('fixed');
        }
        else{
            $('header').removeClass('fixed');
        }
    });
});