window.onload = pageLoad;

function pageLoad() {
  var startDiv = document.getElementById("startdiv");
  var startButton = document.getElementById("startbtn");
  var myPlaneImage = document.getElementById("myplane");
  var enemyImage = document.getElementById("enemy");
  var myPlaneCrashPic = "images/my_plane_crash.gif";
  var enemyPlaneCrashPic = "images/enemy_crash.gif";
  var myPlanePositionArray = [];
  var enemyPlanePositionArray = [];
  var collisionFlag;
  var tickTock;

  startButton.onclick = begin;

  function begin() {
    startButton.style.display = "none";
    myPlaneImage.style.display = "block";
    enemyImage.style.display = "block";

    tickTock = setInterval(moveAndCheckOnce, 200);
  }

  function moveAndCheckOnce(){
    myPlanePositionArray = planeMove(myPlaneImage);
    enemyPlanePositionArray = planeMove(enemyImage, true);

    collisionFlag = collisionCheck(myPlanePositionArray, enemyPlanePositionArray);

    if (collisionFlag) {
      changeToCrashPic(myPlaneImage, myPlaneCrashPic);
      changeToCrashPic(enemyImage, enemyPlaneCrashPic);
      clearInterval(tickTock);
    }

  }

  //Change plane pic to crash pic
  function changeToCrashPic(planeObj, crashPic) {
    planeObj.src = crashPic;
  }

  //Change css top property to move plane pic, return its new position
  function planeMove(planeObj, directionFlag) {
    var planePositionArray = [];

    if (directionFlag) {
      planeObj.style.top = planeObj.offsetTop + 20 + "px";
    } else {
      planeObj.style.top = planeObj.offsetTop - 20 + "px";
    }

    planePositionArray.push(planeObj.offsetLeft);
    planePositionArray.push(planeObj.offsetTop);

    return planePositionArray;
  }

  //Check two planes' position
  function collisionCheck(myPositionArray, enemyPositionArray) {
    var myLeft = myPositionArray[0];
    var myRight = myLeft + 66;
    var myTop = myPositionArray[1];

    var enemyLeft = enemyPositionArray[0];
    var enemyRight = enemyLeft + 110;
    var enemyTop = enemyPositionArray[1] + 164;

    if (myLeft <= enemyRight && myRight >= enemyLeft && myTop <= enemyTop) {
      return true;
    }
    return false;
  }
}
