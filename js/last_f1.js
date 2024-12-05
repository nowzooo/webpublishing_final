$(function () {
    $('header ul.ham').on('click', function () {
        $('.all_menu').fadeIn();
        $("body").css('overflow','hidden').css('display','fixed');
    });
    $('header ul.ham2').on('click', function () {
        $('.all_menu').fadeOut();
        $("body").css('overflow','').css('display','');
    });
 
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });

    window.onfocus=function(){

    }
    window.onload=function(){
        window.focus();
    window.moveTo(0,0);
    window.resizeTo(1720);
    }
});