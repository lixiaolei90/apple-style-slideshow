$(document).ready(function () {
    var toWidth = 0;
    var positions = new Array();

    $('#slides .slide').each(function(i) {
        positions[i] = toWidth;
        console.log(this);
        toWidth += $(this).width();
        console.log(toWidth);
    });

    $('#slides').width(toWidth);

    $('#menu ul li a').click(function(e) {
        $('li.menuItem').removeClass('act').addClass('inact');
        $(this).parent().addClass('act');

        var pos = $(this).parent().prevAll('.menuItem').length;
        $('#slides').stop().animate({marginLeft: -positions[pos] + 'px'}, 450);
        
        e.preventDefault();
    });
    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
});