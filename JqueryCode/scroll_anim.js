$(document).ready(function() {

    $(".overlay").fadeOut(2000);

    $("#container").css({
        'opacity' : 1
    });

    $("header").css({
        'transform':'translateY(0%)',
        'opacity':1
    });
    $("#banner").css({
        'opacity':1
    });
});

$(window).scroll(function () { 
    var scrollValue = $(this).scrollTop();
    console.log(scrollValue);
    if(scrollValue > 150) {
        // $("header").css({'position':'fixed'});
        // $("header").css({'top':'-200px'});
        $("header").addClass('fix');
    }
    else {
        // $("header").css({'position':'static'});
        // $("header").css({'top':'0px'});
        $("header").removeClass('fix');
    }

    if(scrollValue > 225) {
        $('.row').addClass('translate');
    }
    else {
        $('.row').removeClass('translate');
    }
});