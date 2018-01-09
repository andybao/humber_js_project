
$(document).ready(function()
{
	
//Automatic SlideShow​- Home page Banner
$(".slide-container > div:gt(0)").hide();		
setInterval(function() { 
     $('.slide-container > div:first-child')
	 .slideUp(2000)
    	 .next()
		 .slideDown(2000)
		 .end()	  
		 .appendTo('.slide-container')		 ;
},  3000);


//slide down main introduction to restaurant

	$('.home-p').hide();
	$('.home-p').delay(3000).slideDown(3000);
	
});

