jQuery(document).ready(function () {


 $('.contentBox').css('display','none');
 
 $("h2").click(function()
{
	$('.contentBox').slideUp(3000);
$(this).next('.contentBox').show(3000);

});
 
 
 
 
});
