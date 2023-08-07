$(function(){
    $("#bio-text").hide();
    $("#cmu-summary-text").hide();
    $("#bio-text").fadeIn(2000);

    $("#cmu-summary").hover(function(){
        $("#cmu-summary-img").css('filter', 'blur(5px)');
        $("#cmu-summary-text").fadeIn(100);
        }, function(){
        $("#cmu-summary-img").css('filter', 'blur(0px)');
        $("#cmu-summary-text").hide();
    });

})