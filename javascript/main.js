function scrollToAnchor(event, anchor) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#" + anchor).offset().top - 50
    }, 800);
}

function showBurgerMenu(event) {
    event.preventDefault();
    $("#menuwrap").toggle();
}

$(document).ready(function() {
    
    $(".banner-caption").fadeIn("slow");
    
    function toggleSlider() {
        $("#slide1").fadeToggle("slow");
        $("#slide2").fadeToggle("slow");
    }
    
    window.setInterval(toggleSlider, 8000);
});

$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if(scroll >= 500) {
        //$("#logo").css("width", "80px");
        //$("#logo").css("height", "80px");
        //$("#logo").css("margin-top", "0px");
        $(".navbar-default").css("top", "0px");
    }
    else {
        //$("#logo").css("width", "160px");
        //$("#logo").css("height", "160px");
        //$("#logo").css("margin-top", "-70px");
        $(".navbar-default").css("top", "100px");
    }
});