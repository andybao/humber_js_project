//Animate reservation text on header
$(document).ready(function()
{
setInterval(function(){
  $('#header_reservation a').fadeOut(600, function () {
       $(this).fadeIn(500);
    });
},2000);
});

$(function() {
  $("#header").load("header.html");
});
$(function() {
  $('#footer').load('footer.html');
});


