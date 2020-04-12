window.onscroll = function() {
    menuScroll()
};

function menuScroll() {
    var topBar = document.getElementById("topBar");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("subTitol").style.display = "none";
        document.getElementById("titol").style.borderBottom = "none";
        topBar.classList.add('animateTop');
        topBar.style.position = "fixed";
        /*topBar.style.top = "0";*/
    } else {
        document.getElementById("subTitol").style.display = "block";
        topBar.classList.remove('animateTop');
        document.getElementById("titol").style.borderBottom = "black solid 3px";
        topBar.style.position = "relative";
    }
}