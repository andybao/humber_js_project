//
// var amount = document.getElementsByName("name");
//
//
// function setImage(amount) {
//     switch (amount) {
//     case 1:
//         document.getElementById("imageShow").innerHTML = "<img src='images/10giftcard.png>";
//         break;
//     case 2:
//         document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_30.png'>";
//         break;
//     case 3:
//         document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_50.png'>";
//         break;
//     case 4:
//         document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_75.png'>";
//         break;
//     case 5:
//         document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_100.png'>";
//         break;
//     case 6:
//         document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_150.png'>";
//         break;
//
//         var yourSelection = document.getElementsByName('form');
//         yourSelection[0].submit();



function evalGroup()
{
var group = document.radioForm.myRadio;
for (var i=0; i<group.length; i++) {
if (group[i].checked)
break;
}
if (i==group.length)
return alert("No radio button is checked");
alert("Radio Button " + (i+1) + " is checked.");
}



        // function yourSelection() {
        //   if (document.getElementsByName("name").value=="") {
        //   alert("Make a selection");
        //   return false;
        //   }
        //   else {
        //     document.getElementById("thanks").innerHTML
        //     alert("Thank you for your purchase!");
        //
        //   }

        }

        }