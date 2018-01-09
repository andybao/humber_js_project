/*
 * Copyright (c) 2018 Wenyu Bao [wenyu.bao@gmail.com]
 * Licensed under the MIT license.
 *
 */
var maindiv = document.getElementById("maindiv");
var startdiv = document.getElementById("startdiv");
var scorediv = document.getElementById("scorediv");
var scorelabel = document.getElementById("scorelabel");
var enddiv = document.getElementById("end_div");
var finalscouretext = document.getElementById("finalscore");

//Help function: prototype inheritance
function inherits(child, parent) {
  var F = function() {};
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
}

//Help function: get a random number
function random(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function imageObj(props) {
  this.divObj = maindiv;
  this.coordinateX = props.coordinateX;
  this.coordinateY = props.coordinateY;
  this.imageSizeX = props.imageSizeX;
  this.imageSizeY = props.imageSizeY;
  this.imageSrc = props.imageSrc;
  this.crashImageSrc = props.crashImageSrc;
  this.init();
}
imageObj.prototype.init = function() {
  this.imageNode = document.createElement("img");
  this.imageNode.style.position = "absolute";
  this.imageNode.style.left = this.coordinateX + "px";
  this.imageNode.style.top = this.coordinateY + "px";
  this.imageNode.src = this.imageSrc;
  this.divObj.appendChild(this.imageNode);
};
imageObj.prototype.move = function(props) {
  this.imageNode.style.left = props.x + "px";
  this.imageNode.style.top = props.y + "px";
};
imageObj.prototype.remove = function(props) {

  if (props.imageFlag) {
    if (this.imageNode.offsetTop > (568 - this.imageSizeY)) {
      this.divObj.removeChild(this.imageNode);
      return true;
    }
  } else {
    if (this.imageNode.offsetTop < 0) {
      this.divObj.removeChild(this.imageNode);
      return true;
    }
  }

  if (props.removeFlag) {
    this.divObj.removeChild(this.imageNode);
    return true;
  }

};
imageObj.prototype.getCurrentPosition = function() {
  var positionArray = [];

  positionArray.push(this.imageNode.offsetLeft);
  positionArray.push(this.imageNode.offsetTop);

  return positionArray;
};
imageObj.prototype.collisionCheck = function(props) {
  var imageLeft = this.imageNode.offsetLeft;
  var imageRight = imageLeft + this.imageSizeX;
  var imageTop = this.imageNode.offsetTop;
  var imageBottom = imageTop + this.imageSizeY;

  var objPositionArray = props.getCurrentPosition();
  var enemyLeft = objPositionArray[0] + props.precisionX;
  var enemyRight = objPositionArray[0] + props.imageSizeX - props.precisionX;
  var enemyBottom = objPositionArray[1] + props.precisionY;
  var enemyTop = objPositionArray[1] + props.imageSizeY;

  if (imageLeft <= enemyRight &&
      imageRight >= enemyLeft &&
      imageTop <= enemyTop &&
      imageBottom >= enemyBottom)
  {
    return true;
  }
};
imageObj.prototype.changeToCrashImage = function() {
  this.crashFlag = true;
  this.imageNode.src = this.crashImageSrc;
};

//enemy function
function enemyObj(props) {
  imageObj.call(this, props);
  this.hp = props.hp;
  this.speed = props.speed;
  this.crashFlag = props.crashFlag;
  this.crashTime = props.crashTime;
  this.crashTimeCounter = props.crashTimeCounter;
  this.value = props.value;
  this.precisionX = props.precisionX;
  this.precisionY = props.precisionY;
  this.changeSpeed();
}
inherits(enemyObj, imageObj);
enemyObj.prototype.enemyMove = function() {
  this.coordinateY += this.speed;
  var props_enemy_move = {
    x: this.coordinateX,
    y: this.coordinateY
  };
  this.move(props_enemy_move);
};
enemyObj.prototype.removeCrashEnemy = function() {
  if (this.crashFlag) {
    this.crashTimeCounter += 20;
    if (this.crashTimeCounter === this.crashTime) {
      var props_remove_enemy_obj = {removeFlag: true};
      this.remove(props_remove_enemy_obj);
      return true;
    }
  }
};
enemyObj.prototype.enemyHPCount = function() {
  this.hp -= 1;
  return this.hp;
};
enemyObj.prototype.changeSpeed = function() {
  if (score > 20) {
    this.speed = this.speed + 2;
  } else if (score > 40) {
    this.speed = this.speed + 4;
  } else if (score > 60) {
    this.speed = this.speed + 6;
  } else if (score > 80) {
    this.speed = this.speed + 8;
  }
};

//large enemy plane
var props_large_enemy = {
  hp: 12,
  coordinateY: -100,
  imageSizeX: 110,
  imageSizeY: 164,
  precisionX: 10,
  precisionY: 40,
  value: 3,
  crashTime: 540,
  crashFlag: false,
  crashTimeCounter: 0,
  speed: 2,
  imageSrc: "images/game/enemy_large.png",
  crashImageSrc: "images/game/crash_enemy_large.gif"
};

//mid enemy plane
var props_mid_enemy = {
  hp: 6,
  coordinateY: -100,
  imageSizeX: 46,
  imageSizeY: 60,
  precisionX: 5,
  precisionY: 0,
  value: 2,
  crashTime: 360,
  crashFlag: false,
  crashTimeCounter: 0,
  imageSrc: "images/game/enemy_mid.png",
  crashImageSrc: "images/game/crash_enemy_mid.gif"
};

//small enemy plane
var props_small_enemy = {
  hp: 1,
  coordinateY: -100,
  imageSizeX: 34,
  imageSizeY: 24,
  precisionX: 0,
  precisionY: 0,
  value: 1,
  crashTime: 360,
  crashFlag: false,
  crashTimeCounter: 0,
  imageSrc: "images/game/enemy_small.png",
  crashImageSrc: "images/game/crash_enemy_small.gif"
};

//Millenniumfalcon
var props_millennium_falcon = {
  coordinateX: 120,
  coordinateY: 485,
  imageSizeX: 66,
  imageSizeY: 80,
  imageSrc: "images/game/my_plane.gif",
  crashImageSrc: "images/game/crash_my_plane.gif"
};

var millenniumFalcon = new imageObj(props_millennium_falcon);

var moveMillenniumFalcon = function() {
  var mouseEvent = window.event || arguments[0];
  var props_move_millennium_falcon = {
    x: mouseEvent.clientX - 500 - 33,
    y: mouseEvent.clientY - 40
  };
  millenniumFalcon.move(props_move_millennium_falcon);
};

var mouseMoveOut = function() {
  var mouseEvent = window.event||arguments[0];
  var bodyObjX = mouseEvent.clientX;
  var bodyObjY = mouseEvent.clientY;
  if(bodyObjX<533||bodyObjX>787||bodyObjY<40||bodyObjY>528){
    maindiv.removeEventListener("mousemove", moveMillenniumFalcon, true);
  } else {
    maindiv.addEventListener("mousemove", moveMillenniumFalcon, true);
  }
};

//mouse move listener
var bodyObj = document.getElementsByTagName("body")[0];
maindiv.addEventListener("mousemove", moveMillenniumFalcon, true);
bodyObj.addEventListener("mousemove", mouseMoveOut, true);


// bullets and one time process
var backgroundPositionY = 0;
var intervalCount = 0;
var enemyCount = 0;
var score = 0;
var bullets =[];
var enemies = [];
var tempPosition = [];
var props_remove_bullet = {imageFlag: false};
var props_remove_enemy = {imageFlag: true};
function start() {

  //Move background
  maindiv.style.backgroundPositionY = backgroundPositionY + "px";
  backgroundPositionY += 0.5;
  if (backgroundPositionY === 568) {
    backgroundPositionY = 0;
  }

  intervalCount ++;
  if (intervalCount === 20) {

    enemyCount ++;

    if (enemyCount % 5 === 0) {
      props_mid_enemy.coordinateX = random(10, 265);
      props_mid_enemy.speed = random(2, 4);
      enemies.push(new enemyObj(props_mid_enemy));
    }

    if (enemyCount === 20) {
      props_large_enemy.coordinateX = random(0, 210);
      enemies.push(new enemyObj(props_large_enemy));
      enemyCount = 0;
    } else {
      props_small_enemy.coordinateX = random(20, 265);
      props_small_enemy.speed = random(2, 5);
      enemies.push(new enemyObj(props_small_enemy));
    }

    intervalCount = 0;
  }

  for (var j = 0; j < enemies.length; j ++) {
    enemies[j].enemyMove();
    if (enemies[j].remove(props_remove_enemy)) {
      enemies.splice(j, 1);
    }
    if (enemies[j].removeCrashEnemy()) {
      enemies.splice(j, 1);
    }

  }

  //bullets
  if (intervalCount % 5 === 0) {
    tempPosition = millenniumFalcon.getCurrentPosition();
    var props_bullet = {
      coordinateX: tempPosition[0] + 31,
      coordinateY: tempPosition[1] - 10,
      imageSizeX: 6,
      imageSizeY: 14,
      imageSrc: "images/game/bullet.png"
    };
    bullets.push(new imageObj(props_bullet));
  }

  for (var i = 0; i < bullets.length; i ++) {
    tempPosition = bullets[i].getCurrentPosition();

    var props_move_bullet = {
      x: tempPosition[0],
      y: tempPosition[1] - 20
    };
    bullets[i].move(props_move_bullet);

    if (bullets[i].remove(props_remove_bullet)) {
      bullets.splice(i, 1);
    }

  }

  for (var x = 0; x < bullets.length; x ++) {
    for (var y = 0; y < enemies.length; y ++) {

      if (millenniumFalcon.collisionCheck(enemies[y])) {
        millenniumFalcon.changeToCrashImage();
        maindiv.removeEventListener("mousemove", moveMillenniumFalcon, true);
        bodyObj.removeEventListener("mousemove", mouseMoveOut, true);
        scorediv.style.display = "none";
        finalscouretext.innerHTML = score + " POINTS";
        enddiv.style.display = "block";
        clearInterval(set);
      }

      if (bullets[x].collisionCheck(enemies[y])) {
        if (enemies[y].enemyHPCount() === 0) {
          score = score + enemies[y].value;
          scorelabel.innerHTML = score;
          enemies[y].changeToCrashImage();
        }
        var props_remove_bullet_obj = {removeFlag: true};
        bullets[x].remove(props_remove_bullet_obj);
        bullets.splice(x, 1);
        break;
      }
    }
  }

}

function begin(){
  startdiv.style.display="none";
  maindiv.style.display="block";
  set = setInterval(start, 20);
}

function reloadPage() {
  location.reload(true);
}
