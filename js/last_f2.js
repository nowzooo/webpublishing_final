$(function () {
    $('header ul.ham').on('click', function () {
        $('.all_menu').fadeIn();
        $("body").css('overflow','hidden').css('display','fixed');
    });
    $('header ul.ham2').on('click', function () {
        $('.all_menu').fadeOut();
        $("body").css('overflow','').css('display','');
    });

    (function($) {
         $.fn.textWidth = function(){
              var calc = '<span style="display:none">' + $(this).text() + '</span>';
              $('body').append(calc);
              var width = $('body').find('span:last').width();
              $('body').find('span:last').remove();
             return width;
         };
        
         $.fn.marquee = function(args) {
             var that = $(this);
             var textWidth = that.textWidth(),
                 offset = that.width(),
                 width = offset,
                 css = {
                     'text-indent' : that.css('text-indent'),
                     'overflow' : that.css('overflow'),
                     'white-space' : that.css('white-space')
                 },
                 marqueeCss = {
                     'text-indent' : width,
                     'overflow' : 'hidden',
                     'white-space' : 'nowrap'
                 },
                 args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
                 i = 0,
                 stop = textWidth*-1,
                 dfd = $.Deferred();
            
             function go() {
                 if(!that.length) return dfd.reject();
                 if(width == stop) {
                     i++;
                     if(i == args.count) {
                         that.css(css);
                         return dfd.resolve();
                     }
                     if(args.leftToRight) {
                         width = textWidth*-1;
                     } else {
                         width = offset;
                     }
                 }
                 that.css('text-indent', width + 'px');
                 if(args.leftToRight) {
                     width++;
                 } else {
                     width--;
                 }
                 setTimeout(go, args.speed);
             };
             if(args.leftToRight) {
                 width = textWidth*-1;
                 width++;
                 stop = offset;
             } else {
                 width--;            
             }
             that.css(marqueeCss);
             go();
             return dfd.promise();
         };
     })(jQuery);

$('.text_box>ul .text1').marquee({ speed: 3 });
$('.text_box>ul .text2').marquee({ speed: 5 });

$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadeinbottom').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-bottom':'50px'},1000);
          }
      }); 
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