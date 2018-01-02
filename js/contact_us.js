//Contact Subscribe here (toggle function)
 $(document).ready(function(){
	$('#content-box').hide();
	$('h4').click(function(){
			$('#content-box').toggle(1000);
		
	});
}); 

//Setup Listener
window.onload = ready;
function ready()
{
//get whole form using form handle
var formHandle = document.forms[0];
//on submit form
formHandle.onsubmit = processForm;
function processForm()
{
	//get input values from form
	var nameValue = document.getElementById("form-name");
	var emailValue = document.getElementById("form-email");
	var subjectValue = document.forms[0].subject.value;
	var messageValue = document.getElementById("form-message");
	
	//Name validation 
	if(nameValue.value === "" || nameValue.value === null)
		{
			var nameMsg = document.getElementById("nameErr");
			nameMsg.innerHTML = "*Enter your name";
			nameMsg.style.color = "orange";
			nameValue.focus();
			return false;
		}
	//E-mail validation
	if(emailValue.value === "" || emailValue.value === null)
		{
			var emailMsg = document.getElementById("emailErr");
			emailMsg.innerHTML = "*Enter your email";
			emailMsg.style.color = "orange";
			emailValue.focus();
			return false;
		}
	//Message box validation
	if(messageValue.value === "" || messageValue.value ===null)
	{
		var formMsg = document.getElementById("messageErr");
		formMsg.innerHTML = "*what's on your mind";
		formMsg.style.color = "orange";
		formMsg.focus();
		return false;
	}
	
	//display message for confirmation
	alert("Thank You, " + nameValue.value + ". We will reply at: " + emailValue.value );
	
}//end of onsubmit form

//on blur for Name input

	var nameBlur = document.getElementById("nameErr");
	formHandle.username.onblur = endName;
	function endName()
	{
		nameBlur.innerHTML = "";
	}
//on blur for email input
	var eBlur = document.getElementById("emailErr");
	var getEmail = document.getElementById("form-email");
	getEmail.onblur = endEmail;
	function endEmail()
	{
		eBlur.innerHTML = "";
	}	
//on blur for message input	
	var messageBlur =document.getElementById("messageErr");
	formHandle.message.onblur = endMsg;
	function endMsg()
	{
		messageBlur.innerHTML = "";
	}
	
 //subscribe email validation
 var formHandle2 = document.forms[1];
  // var btnsub = document.getElementById("submit-email");
 //on clicking button function called
formHandle2.onsubmit = process;
// btnsub.onclick = process;
function process()
{
	
	var emailsubscribe = document.getElementById("subs-email");
	//email validation
	if(emailsubscribe.value === "" || emailsubscribe.value === null)
	{
		var MsgSubs = document.getElementById("subsErr");
		MsgSubs.innerHTML = "*Enter your email";
		MsgSubs.style.color = "orange";
		emailsubscribe.focus();
		return false;
	}
	//display Message for confirmation
		alert("Thank You for subscribing. News and Recent updates will be mailed to you at " + emailsubscribe.value );		
}//end of onclick function
//on blur for subscribe email
	 var subsBlur =document.getElementById("subsErr");
	document.getElementById("subs-email").onblur = subsMsg;
	function subsMsg()
	{
		subsBlur.innerHTML = "";
	}
	 		
}//end of Listener


