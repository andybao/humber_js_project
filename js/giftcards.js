
var amount = document.getElementsByName("name");

function setImage(amount) {
    switch (amount) {
    case 1:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_10.png>";
        break;
    case 2:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_30.png'>";
        break;
    case 3:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_50.png'>";
        break;
    case 4:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_75.png'>";
        break;
    case 5:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_100.png'>";
        break;
    case 6:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_150.png'>";
        break;

        function yourSelection() {
          if (document.getElementsByName("name").value=="") {
          alert("Make a selection");
          return false;
          }
          else {
            document.getElementById("thanks").innerHTML
            alert("Thank you for your purchase!");

          }

        }

        }
    }
