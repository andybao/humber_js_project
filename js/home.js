
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

$(function() {
  $('#header').load('header.html');
});
$(function() {
  $('#footer').load('footer.html');
});


//Image gallery js - Gallery Page
 bigImg = document.getElementById("img1");
	
	var allImg = document.getElementsByClassName("gallery-img");
	
	for(var i=1; i<allImg.length; i++)
	{
		allImg[i].onmouseover = switchPic;
		allImg[i].onmouseout = resetPic;
	}
	
	function switchPic()
	{
		bigImg.src = this.src;
	}
	function resetPic()
	{
		bigImg.src = "images/home_banner.jpg";
	}
	



});
