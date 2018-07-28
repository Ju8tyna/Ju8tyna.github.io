$(document).ready(function(){
    $(".accordion").css({
        textAlign: 'center'
    }).hide();
    $(".bikesales a").css({
        textAlign: 'center',
        color: 'black',
        textDecoration: 'none'
    }).hover(function(){
        $(this).css("text-decoration", "underline");
    }, function() {
            $(this).css("text-decoration", "none");
    }).hover(function(){
            event.preventDefault();
            $(".accordion").hide();
            $(this).next('.accordion').show();
    });
});