$(document).ready(function(){
    $("#nav").click(function(){
        $("#dropdown").slideToggle();
    });

    $("li").click(function(){
        $("#dropdown").hide();
    });
});