var txtIndex = 0;
showTxt();

function showTxt() {
    var iTxt;
    var slidesTxt = document.getElementsByClassName("textFotoPrincipal");

    for (iTxt = 0; iTxt < slidesTxt.length; iTxt++) {
        slidesTxt[iTxt].style.display = "none";
    }
    txtIndex++;
    if (txtIndex > slidesTxt.length) { txtIndex = 1 }
    slidesTxt[txtIndex - 1].style.display = "block";
    setTimeout(showTxt, 3000); // Change image every 2 seconds
}