
$(document).ready(function () {
    $menuIcon = $('.menu-icon');    
    menuAnimationTime = 500;
    $menuIcon.click(function () {
        $this = $(this);        
        if ($this.hasClass('active')) {
            $('.menubg-wrapper').fadeOut();
            $('ul li').hide();
            $('.menubg').css({
                'transform': 'translate3d(0px, 0, 0px) scale(0, 0)'
            });
            setTimeout(function () {
                $('.menubg').remove();
                $('.menubg-wrapper').remove();                
            }, menuAnimationTime);
        }
        else {
            $('body').append('<div class="menubg-wrapper"></div>');

            $('<div class="menubg"></div>').insertAfter($menuIcon).animate({
            }, menuAnimationTime, function () {
                $(this).css({ 'transform': 'translate3d(0px, 0, 0px) scale(110, 90)' });
            });
            setTimeout(function () {
                $('.menubg-wrapper').fadeIn();                
                $('ul').find('li').each(function (index) {
                    $this = $(this);
                    $this.delay(200 * index).fadeIn(500);
                });
            }, menuAnimationTime);
        }
        $this.toggleClass('active');
        $('body').toggleClass('overflow-hide');
        
    })
})