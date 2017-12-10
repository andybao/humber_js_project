window.onload = pageLoad;

function pageLoad() {
  var startDiv = document.getElementById("startdiv");
  var startButton = document.getElementById("startbtn");
  var backgroundPositionY = 0;

  startButton.onclick = begin;

  function moveBackgroundOnce() {
    startDiv.style.backgroundPositionY = backgroundPositionY + "px";
    backgroundPositionY += 10;
    if (backgroundPositionY === 568) {
      startDiv.style.backgroundPositionY = "0px";
      backgroundPositionY = 0;
    }
  }

  function begin() {
    startButton.style.display = "none";
    setInterval(moveBackgroundOnce, 200);
  }
}
