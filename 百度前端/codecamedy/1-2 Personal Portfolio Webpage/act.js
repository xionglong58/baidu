$(document).ready(function(){
    $("#index").children().eq(2).css("margin-left","60px")
    $("#index").children().eq(0).css("padding-right","60px")
    $("body").css("minWidth",$(document).width());
    $("body").css("fontSize",$(document).width()*0.01);
    $("#img").css("height",$(document).width()*0.15);
    
})