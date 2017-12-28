window.onload = ready;
function ready()
{
	
	document.getElementById('form-date').valueAsDate = new Date();
	document.getElementById('form-date').max = "2018-02-28";
	
	document.getElementById('form-date').value.min = new Date();
}