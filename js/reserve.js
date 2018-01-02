window.onload = ready;
function ready()
{
	var formHandle = document.forms[0];
  //on submit form
  formHandle.onsubmit = processForm;
  function processForm()
	{
	  //get date, time and party size
	  var d = document.getElementById("form-date").value;
	  var t =  document.getElementById("form-time").value;
	  var ps = document.getElementById("party-size");
	   var days = d.getDay();
	  console.log(days);
	  //validate date
	 /*  console.log(d);
	  var days = d.getDate();
	  console.log(days);
	  var month = d.getMonth();
	  var years = d.getFullYear();
	  
	 // console.log(month);
	  if(d.getDate() === "")// || month.value === "" || years.value === "")
	  {
		  alert("Select Date");
		  t.focus();
		  return false;
	  } 
	    */
	  //validate time
	  if(t.value === "" || t.indexOf(":")<0)
	  {
		  alert("Select Time");
		  t.focus();
		  return false;
	  } 
	   
	 
	  
	  
		//validate party size
	  if(ps.value==="")
		{
			alert("choose party size");
			ps.focus();
			return false;
		}		
	  //hide main-para and form on submit
	  document.getElementById('main-p').style.display = "none";
	  document.forms[0].style.display = "none";
	  //Display confirmtation message
	  var m = document.getElementById('message');
	  m.style.color = "#824328";
	  m.style.fontSize = "20px";
	  m.innerHTML = "Table is reserved. <br>Reservation details are:<br> Date: " + d + "<br> Time: " + t + "<br> Party Size: " + ps.value + ".";
	return false;
	} 
	// set min date value
	 var today = new Date();
	var day = today.getDate();
	var mon = today.getMonth()+1;
	var year = today.getFullYear();
	if(day<10)
	{	day = '0'+ day;	}
	if(mon<10)
	{	mon='0' + mon;	}
	today = year + '-' + mon + '-' + day;
	document.getElementById("form-date").setAttribute("min",today);
	 
	
	//set maxdate value
	 var enddate =  new Date();
	enddate.setDate(new Date().getDate()+45);//30 days range for reservation
	
	 var endday = enddate.getDate();
	var endmon = enddate.getMonth()+1;
	var endyear = enddate.getFullYear();
	if(endday <10)
	{ endday = '0' + endday;}
	if(endmon <10)
	{ endmon = '0' + endmon; }
	
	enddate = endyear + '-' + endmon + '-' + endday; 
	
	document.getElementById("form-date").setAttribute("max",enddate);
  
} 



/*










  $(function() {
    $('#header').load('header.html');
  });
  $(function() {
    $('#footer').load('footer.html');
  });

*/