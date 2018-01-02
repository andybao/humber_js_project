window.onload=slideshow;
function slideshow()
{
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
		bigImg.src = "images/home_party.jpeg";
	}
  
}
