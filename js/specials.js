//alert();

function myFunction1() {
        document.getElementById("mon").style.display = "block";
        document.getElementById("tues").style.display = "none";
        document.getElementById("wed").style.display = "none";
        document.getElementById("thurs").style.display = "none";
        document.getElementById("fri").style.display = "none";
        document.getElementById("sat").style.display = "none";
        document.getElementById("sun").style.display = "none";
    }

    function myFunction2() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "block";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";

    }

    function myFunction3() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "block";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";


    }

    function myFunction4() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "block";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";
    }

    function myFunction5() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "block";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "none";
    }

    function myFunction6() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "block";
      document.getElementById("sun").style.display = "none";
    }

    function myFunction7() {
      document.getElementById("mon").style.display = "none";
      document.getElementById("tues").style.display = "none";
      document.getElementById("wed").style.display = "none";
      document.getElementById("thurs").style.display = "none";
      document.getElementById("fri").style.display = "none";
      document.getElementById("sat").style.display = "none";
      document.getElementById("sun").style.display = "block";
    }



var divs = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
   var visibleDivId = null;
   function divVisibility(divId) {
     if(visibleDivId === divId) {
       visibleDivId = null;
     } else {
       visibleDivId = divId;
     }
     hideNonVisibleDivs();
   }
   function hideNonVisibleDivs() {
     var i, divId, div;
     for(i = 0; i < divs.length; i++) {
       divId = divs[i];
       div = document.getElementById(divId);
       if(visibleDivId === divId) {
         div.style.display = "block";
       } else {
         div.style.display = "none";
       }
     }
   }
