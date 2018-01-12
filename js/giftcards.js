

function setImage(fieldvalue) {
    switch (fieldvalue) {
    case 1:
        document.getElementById("imagetest").innerHTML = "<img src='images/10giftcard.png>";
        break;
    case 2:
        document.getElementById("imagetest").innerHTML = "<img src='images/30giftcard.png'>";
        break;
    case 3:
        document.getElementById("imagetest").innerHTML = "<img src='images/50giftcard.png'>";
        break;
    case 4:
        document.getElementById("imagetest").innerHTML = "<img src='images/75giftcard.png'>";
        break;
    case 5:
        document.getElementById("imagetest").innerHTML = "<img src='images/100giftcard.png'>";
        break;
    case 6:
        document.getElementById("imagetest").innerHTML = "<img src='images/150giftcard.png'>";
        break;
    }
}
