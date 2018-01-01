 window.onload = ready;
function ready()
{
	
	  var formHandle = document.forms[0];
	//on submit form
	formHandle.onsubmit = processForm;
	function processForm()
	{
		var today = new Date();
		//get date, time and party size
		var d = document.forms[0].userdate.value;
		var t =  document.forms[0].usertime.value;
		var ps = document.forms[0].party.value;
		
		//hide main-para and form on submit
		document.getElementById('main-p').style.display = "none";
		document.forms[0].style.display = "none";
		var m = document.getElementById('message');
		m.style.color = "#824328";
		m.style.fontSize = "20px";
		
		m.innerHTML = "Table is reserved. <br>Reservation details are:<br> Date: " + d + "<br> Time: " + t + "<br> Party Size: " + ps + ".";
		
		
	return false;
	}

  $(function() {
    $('#header').load('header.html');
  });
  $(function() {
    $('#footer').load('footer.html');
  });
	
} 



/*



 var today = new Date();
	var tom = new Date(new Date().getTime() + 24*60*60*1000);
	
	 var d = document.getElementById('form-date');
     d.valueAsDate = tom;
   d.max = "2018-02-28";






  $(function() {
    $('#header').load('header.html');
  });
  $(function() {
    $('#footer').load('footer.html');
  });

*/
