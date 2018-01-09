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
	 //Validate Date
	if(d ==="" || d === null)
	{
		var dateMsg = document.getElementById("dateErr");
		dateMsg.innerHTML = "*Enter Date";
		dateMsg.style.color = "orange";
		return false;
	}
	  //validate time
	  if(t === "" || t.indexOf(":")<0)
	  {
		  var timeMsg = document.getElementById("timeErr");
		timeMsg.innerHTML = "*Enter Time";
		timeMsg.style.color = "orange";
		  return false;
	  } 
		//validate party size
	  if(ps.value==="")
		{
			var partyMsg = document.getElementById("partyErr");
		partyMsg.innerHTML = "*Choose party size";
		partyMsg.style.color = "orange";
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
	} //end of onsubmit process form
	
	//on blur for Date

	var dateBlur = document.getElementById("dateErr");
	formHandle.userdate.onblur = endDate;
	function endDate()
	{
		dateBlur.innerHTML = "";
	}
	//on blur for Time

	var timeBlur = document.getElementById("timeErr");
	formHandle.usertime.onblur = endTime;
	function endTime()
	{
		timeBlur.innerHTML = "";
	}
	//on blur for Party size

	var partyBlur = document.getElementById("partyErr");
	formHandle.party.onblur = endParty;
	function endParty()
	{
		partyBlur.innerHTML = "";
	}
	// set min date value
	 var today = new Date();
	var day = today.getDate()+1;
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
	enddate.setDate(new Date().getDate()+45);//45 days range for reservation
	
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
