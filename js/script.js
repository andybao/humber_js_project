// Get Google map

function initMap() {
	var uluru = {lat: 43.729206000, lng: -79.604948700};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}




// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }
