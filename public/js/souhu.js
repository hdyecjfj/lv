$(document).ready(function() {





    $('.four_box dd').on('click', function() {
        $(this).addClass('show').siblings().removeClass('show');
        var i = $('.four_box dd').index($(this));
        if (i == 0) {
            $('.mainbody .khfw').show().siblings().hide();
        } else if (i == 1) {
            $('.mainbody .cjwt').show().siblings().hide();

        } else if (i == 2) {
            $('.mainbody .thhfw').show().siblings().hide();

        } else {
            $('.mainbody .cpby').show().siblings().hide();
        }
    });

    $('.mainbody .cjwt_box h2').on('click', function() {
        $(this).siblings('.title').slideToggle();
        if ($(this).children('span').hasClass("show")) {
            $(this).children('span').removeClass('show');
        } else {
            $(this).children('span').addClass('show');
        }

    });
    $('.mainbody .cjwt_box .title').on('click', function() {
        $(this).next('.conect').slideToggle();
        if ($(this).children('span').hasClass("show")) {
            $(this).children('span').removeClass('show');
        } else {
            $(this).children('span').addClass('show');
        }


    });
    $('.mainbody .cjwt_right .lianxiwomen').on('click', function() {
        $('.mainbody .email').show().siblings().hide();
    });
    $('.mainbody .cpby dd').on('click', function() {
        var i = $('.mainbody .cpby dd').index($(this));
        var p = $('.mainbody .cpby p');
        $(this).addClass('show').siblings().removeClass('show');
        $(p[i]).show().siblings().hide();
    });
    $('.mainbody .email h2').on('click', function() {
        $('.mainbody .cjwt').show().siblings().hide();
    });




});