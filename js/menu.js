var canidianDiv;
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

  canidianDiv = $('#canidian');
  caribbeanDiv = $('#caribbean');
  chineseDiv = $('#chinese');
  europeanDiv = $('#european');
  indianDiv = $('#indian');

  hideAllMenuDiv();

  showOneMenu('canidian');

  menuList.hover(menuItemClick);
}

function menuItemClick() {
  var clickText = $(this).text();
  hideAllMenuDiv();
  showOneMenu(clickText.toLowerCase());
}

function hideAllMenuDiv() {
  canidianDiv.hide();
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
