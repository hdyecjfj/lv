$(document).ready(function() {

    var har = 0;
    var left = $('.tupianshow dl').offset().left;

    $('.chufa').hover(function() {
        $('.nav').slideToggle();

    }, function() {
        $('.nav').slideToggle();
    });
    $('.nav').hover(function() {
        $('.nav').stop();
        var i = $('.show ul li').index($(this));
        left -= i * 1300;
        $('.tupianshow dl').css('left', left);
    })


    $('.show ul li').on('click', function() {
        var i = $('.show ul li').index($(this));

        if (i == 0) {
            har--;
            left += 1300;

        } else {
            har++;
            left -= 1300;
        }
        if (har > 0) {
            $('.show ul .l').show();
            $('.show ul .right').show();
        } else if (har < 1) {
            $('.show ul .l').hide();
            $('.show ul .right').show();
        }
        if (har > 5) {
            $('.show ul .right').hide();
        }
        $('.tupianshow dl').css('left', left);
        console.log($('.wenzijieshao dl dd')[har]);
        var dd = $('.wenzijieshao dl dd');
        $(dd[har]).show().siblings().hide();

    });



});