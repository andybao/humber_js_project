var canadianDiv;
var caribbeanDiv;
var chineseDiv;
var europeanDiv;
var indianDiv;


window.onload = pageLoad;

function pageLoad() {
  $(function() {
    $('#header').load('header.html');
  });
  $(function() {
    $('#footer').load('footer.html');
  });

  var menuList = $('#menu-list li');

  canadianDiv = $('#canadian');
  caribbeanDiv = $('#caribbean');
  chineseDiv = $('#chinese');
  europeanDiv = $('#european');
  indianDiv = $('#indian');

  hideAllMenuDiv();

  showOneMenu('canadian');

  menuList.hover(menuItemClick);
}

function menuItemClick() {
  var clickText = $(this).text();

  hideAllMenuDiv();
  showOneMenu(clickText.toLowerCase());
}

function hideAllMenuDiv() {
  canadianDiv.hide();
  caribbeanDiv.hide();
  chineseDiv.hide();
  europeanDiv.hide();
  indianDiv.hide();
}

function showOneMenu(location) {
  var locationID = '#' + location;
  var locationDiv = $(locationID);
  locationDiv.show();
}
