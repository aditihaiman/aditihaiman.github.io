$(function(){
    $("#bio-text").hide();
    $(".summary-text").hide();
    $("#bio-text").fadeIn(2000);

    hover_summary('cmu');
    hover_summary('usc');
    hover_summary('portable-piano');
    hover_summary('bird-watching');
    hover_summary('this-website');
    hover_summary('jumble');
})


function hover_summary(id){
    $("#"+id+"-summary").hover(function(){
        $("#"+id+"-summary-img").css('filter', 'blur(5px)');
        $("#"+id+"-summary-text").fadeIn(100);
        }, function(){
        $("#"+id+"-summary-img").css('filter', 'blur(0px)');
        $("#"+id+"-summary-text").hide();
    });
}