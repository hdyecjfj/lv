$(document).ready(function() {

    var i = $('.four_box dd').index($(this));
    $('.bodymain dd').on('click', function() {
        var i = $('.bodymain dd').index($(this));
        $(this).addClass('show').siblings().removeClass('show');
        if (i == 1) {
            $('.login_user').hide();
            $('.kong').show();
        } else {
            $('.login_user').show();
            $('.kong').hide();
            $('.bodymain').hide();

        }
    })

});