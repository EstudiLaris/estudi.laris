function openNav() {
    document.getElementById("navMenu").style.transition = "all 0.7s";
    document.getElementById("navMenu").style.transitionTimingFunction = "easy-out";
    document.getElementById("navMenu").style.padding = "0 35px 0 25px";
    document.getElementById("navMenu").style.width = "auto";
}

function closeNav() {
    document.getElementById("subMenu").style.display = "none";
    document.getElementById("navMenu").style.transitionTimingFunction = "easy-out";
    document.getElementById("navMenu").style.transition = "all 0.7s";
    document.getElementById("navMenu").style.width = "0";
    document.getElementById("navMenu").style.padding = "0";
}

function obrirSubmenu() {
    var x = document.getElementById("subMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function canviPagina(pagina) {
    document.getElementById("subMenu").style.display = "none";
    document.getElementById("navMenu").style.display = "none";
    location.assign(pagina);
    /* setTimeout(function() { document.location.href = pagina; }, 5); */
}