$(document).ready(function() {
    var leftl = 0;
    $('.shoubiao .lunbo .btn').on('click', function() {
        var i = $('.shoubiao .lunbo .btn').index($(this));

        if (i == 1) {
            var left = "-=1100";
            leftl--;
            $('.shoubiao .lunbo .show dl').animate({
                left: left
            });
        } else if (i == 0) {
            var left = "+=1100";
            leftl++;
            $('.shoubiao .lunbo .show dl').animate({
                left: left
            });
        }
        console.log(leftl);
        if (leftl == 0) {
            $('.shoubiao .lunbo .btn-l').hide();
        } else if (leftl == -2) {
            $('.shoubiao .lunbo .btn-l').show();
            $('.shoubiao .lunbo .btn-r').hide();
        } else {
            $('.shoubiao .lunbo .btn').show();
        }

    });
    $('.shoubiao button').on('click', function() {
        $('.more').slideToggle();

        if ($('.shoubiao button').hasClass('show')) {
            $(this).removeClass('show');
        } else {
            $(this).addClass('show');
        }

    })
    $('.manshanwu button').on('click', function() {
        $('.more').slideToggle();

        if ($('.manshanwu button').hasClass('show')) {
            $(this).removeClass('show');
        } else {
            $(this).addClass('show');
        }

    })
    $('.guding p').on('click', function() {
        $('.choose').slideToggle();
        if ($('.guding span').hasClass('show')) {
            $('.guding p').children('span').removeClass('show')
        } else {
            $('.guding p').children('span').addClass('show');
        }

    });
    $('.shoubiao .title a').on('click', function() {
        $('.shoubiao .title img').slideToggle();
        if ($('.shoubiao .title span').hasClass('show')) {
            $('.shoubiao .title span').removeClass('show')
        } else {
            $('.shoubiao .title span').addClass('show');
        }
    });




})