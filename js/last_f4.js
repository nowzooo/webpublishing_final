$(function () {
    $('header ul.ham').on('click', function () {
        $('.all_menu').fadeIn();
        $("body").css('overflow','hidden').css('display','fixed');
    });
    $('header ul.ham2').on('click', function () {
        $('.all_menu').fadeOut();
        $("body").css('overflow','').css('display','');
    });
    window.onfocus=function(){

    }
    window.onload=function(){
        window.focus();
    window.moveTo(0,0);
    window.resizeTo(1720);
    }
});