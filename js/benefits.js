jQuery(document).ready(function($) {
    
    $('.iconnav').hover(function(event) {
        event.stopPropagation;
        event.preventDefault;
        iconEvent($(this));
    }, function(event) {
    });

    $('.iconnav').click(function(event) {
        event.stopPropagation;
        event.preventDefault;
        iconEvent($(this));
    }, function(event) {
    });
    
    function iconEvent($icon) {
        var id = $icon.attr("id");
        id = id.split("-");
        $desc = $('#icondesc-' + id[1]);
        if (!$desc.hasClass('active-desc')) {
            
            $('.iconnav').each(function() {
                $(this).animate({opacity: .30}, 100);
            });
            $icon.animate({opacity: 1.0}, 400);
            
            $('.icondesc').fadeOut();
            $('.icondesc').each(function() {
                $(this).removeClass('active-desc');
            });
            $desc.fadeIn();
            $desc.addClass('active-desc');
            
        }
    }
});

