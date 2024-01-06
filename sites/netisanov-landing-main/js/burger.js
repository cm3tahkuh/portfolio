$(function() {
    $('#menu__burger').click(function(){
        $(this).toggleClass('open');
        $('.menu__burger__links').toggleClass('open');
    });
});

