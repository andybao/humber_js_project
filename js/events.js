

window.onload = pageReady;

function pageReady(){

// Show images on mouse over
	var allImages = document.querySelectorAll(".event-img");
	var originalSrc = allImages[0].src;

	for (var i=1; i<allImages.length; i++) {
		allImages[i].onmouseover = changeImg;
		allImages[i].onmouseout = removeImg;
	}

	function changeImg() {
		allImages[0].src = this.src;
	}

	function removeImg() {
		allImages[0].src = originalSrc;
	}

// Form and Validation
// get form object
	var formHandle = document.forms[0];

	// create empty Special Event object
	var eventInfo = {
		phone: 0
		, name: ""
		,	week: ""
		, event: ""
	};

	// add event listener to fire once form is submitted
	formHandle.onsubmit = processForm;

	// add event listener on focus fields
	formHandle.f_Name.onfocus = formFocus;
	formHandle.f_Phone.onfocus = formFocus;	
	formHandle.f_week.onfocus = formFocus;
	formHandle.f_event.onfocus = formFocus;

	// add event listener on blur (when we leave the field)
	formHandle.f_Name.onblur = formBlur;
	formHandle.f_event.onblur = formBlur;
	formHandle.f_Phone.onblur = formBlur;
	formHandle.f_week.onblur = formBlur;

	// error message if field is empty
	var errMesgEmpty = "This field can't be empty. Please insert valid data.";

	// success message if all input is valid
	var scsMesg = "Congrats! Entry is valid.";

	// this function will change background color of focused field into green
	function formFocus() {
		this.style.background = '#CCFFCC';
	}

	// this function will reset background color of left field to transparant
	// and will check the input when user leaves the field
	function formBlur() {
		this.style.background = '';

		// check input. Differentiate check in accordance to field name
		switch (this) {

			// check if name input is valid
			case formHandle.f_Name :
				// check if field is not empty first
				if (this.value === "" || this.value === null) {
					document.getElementById('f_name_error').innerHTML = errMesgEmpty;
					document.getElementById('f_name_error').style.color = 'red';
				} else {
					// create a pattern to test, that name has only letters
					var namePattern = /^[a-zA-Z]+$/;

					// test input
					if (namePattern.test(this.value)) {
						document.getElementById('f_name_error').innerHTML = scsMesg;
						document.getElementById('f_name_error').style.color = 'green';
					} else {
						document.getElementById('f_name_error').innerHTML = "Sorry, only letters accepted.";
						document.getElementById('f_name_error').style.color = 'red';
					}
				}				
				break;

			// check if customer phone input is valid
			case formHandle.f_Phone :

				// check if the field is not empty first
				if (this.value === "" || this.value === null) {
					document.getElementById('f_phone_error').innerHTML = errMesgEmpty;
					document.getElementById('f_phone_error').style.color = 'red';
				} else {
					// create a pattern to check if these are only numbers and only 6
					var custPattern = /^[0-9]{6}$/;
					if (custPattern.test(this.value)) {
						document.getElementById('f_phone_error').innerHTML = scsMesg;
						document.getElementById('f_phone_error').style.color = 'green';
					} else {
						document.getElementById('f_phone_error').innerHTML = "Sorry, only 6 numbers accepted.";
						document.getElementById('f_phone_error').style.color = 'red';
					}
				}
				break;

			case formHandle.f_event :

				// check if anything was selected
				if ("0" == this.value ) {
					document.getElementById('f_event_error').innerHTML = "Nothing selected.";
					document.getElementById('f_event_error').style.color = 'red';
				} else {
					document.getElementById('f_event_error').innerHTML = "";
					document.getElementById('f_event_error').style.color = 'white';
				}
				break;

			case formHandle.f_week :

				// check if anything was selected
				if ("0" == this.value ) {
					document.getElementById('f_event_error').innerHTML = "Nothing selected.";
					document.getElementById('f_event_error').style.color = 'red';
				} else {
					document.getElementById('f_event_error').innerHTML = "";
					document.getElementById('f_event_error').style.color = 'white';
				}
				break;

			default :				
				break;
		}
	}

	function processForm() {		

		// fill-in the object with values from form
		eventInfo.phone = formHandle.f_Phone.value;
		eventInfo.week = formHandle.f_week.options[formHandle.f_week.selectedIndex].text;
		eventInfo.event = formHandle.f_event.options[formHandle.f_event.selectedIndex].text;
		eventInfo.name = formHandle.f_Name.value;

		// check if fields are not empty
		if (eventInfo.event === "===SELECT===") {
			formHandle.f_event.style.background = 'red';
			formHandle.f_event.focus();
			return false;
		}

		if (eventInfo.week === "===SELECT===") {
			formHandle.f_week.style.background = 'red';
			formHandle.f_week.focus();
			return false;
		}

		if (eventInfo.name === "" || eventInfo.name === null) {
			formHandle.f_Name.style.background = 'red';
			formHandle.f_Name.focus();
			// show error message to the right of the field
			document.getElementById('f_name_error').innerHTML = errMesgEmpty;
			document.getElementById('f_name_error').style.color = 'red';
			return false;
		}

		if (eventInfo.phone === "" || eventInfo.phone === null) {
			formHandle.f_Phone.style.background = 'red';
			formHandle.f_Phone.focus();
			return false;
		}


		// if form is valid, show message and hide the form (=submit form)
		// inside of this if statement should go form submission.
		if (true) {

			// create thank you message (Extra Challenge)
			document.getElementById('thanksCustomer').innerHTML = eventInfo.name;
			document.getElementById('thanksEvent').innerHTML = eventInfo.event;
			document.getElementById('thanksWeek').innerHTML = eventInfo.week;
			
			// show message
			document.getElementById('thanks_msg').style.display = 'block';
			
			//hide form
			document.getElementById('shippingForm').style.display = 'none';
		}
		return false;
	}

// Load Header and Footer
	$(function() {
  $('#header').load('header.html');
});
$(function() {
  $('#footer').load('footer.html');
});
}

