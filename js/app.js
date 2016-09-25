/*PARA HACER DESLIZAR LAS IMAGENES*/
//Variables Globales
var anterior = document.getElementById("anterior");
var siguiente = document.getElementById("siguiente");
var botonUno = document.getElementById("botonUno");
var botonDos = document.getElementById("botonDos");
var botonTres = document.getElementById("botonTres");
//muestra la primera imagen predeterminada
var deslizar = 1;
verImagen(deslizar);
//Va aumentando de uno en uno
function plusDivs(n) {
    verImagen(deslizar += n);
}
//hace que el siguiente no tenga un fin
function currentDiv(n) {
    verImagen(deslizar = n);
}

function verImagen(n) {
    var imgDibujos = document.getElementsByClassName("img-dibujos");
    var botonNum = document.getElementsByClassName("botonNum");
    
    if (n > imgDibujos.length) {
        deslizar = 1;
    }
    
    if (n < 1) {
        deslizar = imgDibujos.length;
    }
    
    //oculta la imagen anterior
    for (var i = 0; i < imgDibujos.length; i++) {
        imgDibujos[i].style.display = "none";
    }
    //aparece la siguiente imagen
    imgDibujos[deslizar-1].style.display = "block";    
}




