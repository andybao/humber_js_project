//alert();

function special1() {
        document.getElementById("mon").style.display = "block";
        document.getElementById("tues").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thurs").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        document.getElementById("sun").style.display = "none";
    }

    function special2() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "block";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";

    }

    function special3() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "block";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";


    }

    function special4() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "block";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";
    }

    function special5() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "block";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";
    }

    function special6() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "block";
      document.getElementById("sun").style.display = "none";
    }

    function special7() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "block";
    }



var divs = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
   var seeDiv = null;
   function seeDiv(divId) {
     if(seeDiv === divId) {
       seeDiv = null;
     } else {
       seeDiv = divId;
     }
     hideDiv();
   }
   function hideDiv() {
     var i, divId, div;
     for(i = 0; i < divs.length; i++) {
       divId = divs[i];
       div = document.getElementById(divId);
       if(seeDiv === divId) {
         div.style.display = "block";
       } else {
         div.style.display = "none";
       }
     }
   }
