 $(document).ready(function() {
     $('.nav ul li').hover(function() {
         var i = $('.nav ul li').index($(this));
         if (i == 1) {
             $('.lydwsj').slideDown();
             $('.woman').hide();
             $('.man').hide();
         } else if (i == 2) {
             $('.woman').slideDown();
             $('.lydwsj').hide();
             $('.man').hide();
         } else if (i == 3) {
             $('.man').slideDown();
             $('.lydwsj').hide();
             $('.woman').hide();
         } else {
             $('.lydwsj').hide();
             $('.woman').hide();
             $('.man').hide();
         }
     }, function() {});

     $('.lydwsj').hover(function() {
         $('.lydwsj').show();
     }, function() {
         $('.lydwsj').hide();
         $('.woman').hide();
         $('.man').hide();
     });
     $('.woman').hover(function() {
         $('.woman').show();
     }, function() {
         $('.lydwsj').hide();
         $('.woman').hide();
         $('.man').hide();
     });
     $('.man').hover(function() {
         $('.man').show();
     }, function() {
         $('.lydwsj').hide();
         $('.woman').hide();
         $('.man').hide();
     });

     $('.slidenav dd').on('click', function() {
         $(this).addClass('show').siblings().removeClass('show');
     });

     $('.lydwsj .slidenav dd').on('click', function() {
         var i = $('.lydwsj .slidenav dd').index($(this));
         var nav_show = $('.lydwshow .box');
         $(nav_show[i]).show().siblings().hide();
     });
     $('.woman .slidenav dd').on('click', function() {
         var i = $('.woman .slidenav dd').index($(this));
         var nav_show = $('.womanshow .box');
         $(nav_show[i]).show().siblings().hide();
     });
     $('.man .slidenav dd').on('click', function() {
         var i = $('.man .slidenav dd').index($(this));
         var nav_show = $('.manshow .box');
         $(nav_show[i]).show().siblings().hide();
     });
     $('.toptop .right dd').hover(function() {
         var img = $(this).children().children('img');
         $(img[1]).show().siblings().hide();
     }, function() {
         var img = $(this).children().children('img');
         $(img[0]).show().siblings().hide();
     });
     $('.toptop .right .se').on('click', function() {
         $('.toptop .search').toggle();

     });
     $('.toptop .search input').on(' focusout ', function() {
         $('.toptop .search').hide();
     });
     $('.toptop .xl img').hover(function() {
         $('.login').show();
     }, function() {
         $('.login').animate({
             display: 'none'
         }).delay(3000);
     });
     $('.toptop .login').hover(function() {
         $('.login').stop();
     }, function() {
         $('.login').hide();
     });
 });