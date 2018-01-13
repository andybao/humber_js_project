$(function() {
  $('#header').load('header.html');
});
$(function() {
  $('#footer').load('footer.html');
});

// Animate tabs
$(document).ready(function(){
  $(".locationContent").hide();
    $("h2").click(function(){
      $(".locationContent").hide(1000);
      $(this).next(".locationContent").toggle(1000);
    });
  $("p").mouseover(function(){
    $(this).css({"background":"#524737", "color":"#FFE5C3"});
  });
  $("p").mouseout(function(){
    $(this).css({"background":"#FFE5C3", "color":"#524737"});
  });
});

//

// Get Google map

function initMap() {

	// create array of objects to hold coordinates and dev id
	var locations = [
		{lat: 43.658649, lng: -79.382076, id: 'yonge'}
		, {lat: 43.653959, lng: -79.390882, id: 'mccaul'}
		, {lat: 43.649071, lng: -79.396753, id: 'spadina'}
		, {lat: 43.665303, lng: -79.319136, id: 'woodward'}
		, {lat: 43.671017, lng: -79.384788, id: 'bloor'}
		, {lat: 43.645260, lng: -79.482930, id: 'kingsway'}
	];
	// iterate through array and draw a map
	locations.forEach(function(item, index, array) {
		var uluru = {lat: item.lat, lng: item.lng};
  	var map = new google.maps.Map(document.getElementById(item.id), {
			zoom: 12,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	});


	// var uluru = {lat: 43.658649, lng: -79.382076};
	// var map = new google.maps.Map(document.getElementById('map'), {
	// 	zoom: 12,
	// 	center: uluru
	// });
	// var marker = new google.maps.Marker({
	// 	position: uluru,
	// 	map: map
	// });
}


