//Animate reservation text on header
$(document).ready(function()
{
setInterval(function(){
  $('#header_reservation a').fadeOut(500, function () {
       $(this).fadeIn(300);
    });
},2000);
});

$(function() {
  $("#header").load("header.html");
});
$(function() {
  $('#footer').load('footer.html');
});


