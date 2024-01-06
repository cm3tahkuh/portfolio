$(document).ready(function() {
    // 250 characters are shown by default
    var showChar = 158;
    var dots = ".... ";
    var moreText = "Показать";
    var lessText = "Скрыть";

    $('.show-text').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var cont = content.substr(0, showChar);
            var restOfTheText = content.substr(showChar, content.length - showChar);

            var html = cont + '<span class="dots">' + dots + '</span><span class="morecontent"><span>' + restOfTheText + '</span><a href="" class="morelink">' + moreText + '</a></span>';

            $(this).html(html);
        }

    });
    $(".morelink").click(function() {
        if($(this).hasClass("test")) {
            $(this).removeClass("test");
            $(this).html(moreText);
        } else {
            $(this).addClass("test");
            $(this).html(lessText);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});