/*---------------------------PARA HACER PAINT-COMENTARIO-MUÑECO----------------------*/
window.addEventListener("load", function () {
    /*----------------------------------GALERIA----------------------------------*/
    var anterior = document.getElementById("anterior");
    var siguiente = document.getElementById("siguiente");
    var botonUno = document.getElementById("botonUno");
    var botonDos = document.getElementById("botonDos");
    var botonTres = document.getElementById("botonTres");
    var color = "#000000";
    var tamano = 10;
    var pintura = false;
    var borrado = false;
    var canvas = document.getElementById("canvas");
    var borrador = document.getElementById("borrador");
    var lapiz = document.getElementById("lapiz");
    var colores = document.getElementById("colores");
    var descargar = document.getElementById("descargar");
    var aumentar = document.getElementById("tamano");
    var aumentar1 = document.getElementById("tamano1");
    var aumentar2 = document.getElementById("tamano2");
    var aumentar3 = document.getElementById("tamano3");
    var grosor = 2;
    var grosor1 = 2;
    var muneco = document.getElementById("muneco");
    //muestra la primera imagen predeterminada
    var deslizar = 1;
    verImagen(deslizar);
    var boton = document.getElementById("resultado");
    boton.disabled = true;
    var textArea = document.getElementById("texto");

    var contar = document.getElementById("contar");
    

    anterior.addEventListener("dblclick", function(){
        plusDivs(-1);
    });

    siguiente.addEventListener("dblclick", function(){
        plusDivs(1);
    });

    botonUno.addEventListener("dblclick", function(){
        currentDiv(1);
    });

    botonDos.addEventListener("dblclick", function(){
        currentDiv(2);
    });

    botonTres.addEventListener("dblclick", function(){
        currentDiv(3);
    });

    muneco.addEventListener("mouseenter", bigImg);
    muneco.addEventListener("mouseleave", normalImg);

    canvas.addEventListener("mousemove", pintar);

    borrador.addEventListener("click", function () {
        borrar();
    });

    lapiz.addEventListener("click", function () {
        pencil();
    });

    colores.addEventListener("change", function () {
        color = colores.value;
    });

    descargar.addEventListener("click", function () {
        descargarimg();
    });

    aumentar.addEventListener("click", function () {
        grosor = 2;
        grosor1 = 2;
    });

    aumentar1.addEventListener("click", function () {
        grosor = 4;
        grosor1 = 4;
    });

    aumentar2.addEventListener("click", function () {
        grosor = 6;
        grosor1 = 6;
    });

    aumentar3.addEventListener("click", function () {
        grosor = 8;
        grosor1 = 8;
    });

    boton.addEventListener("click", function (e) {
        e.preventDefault();
        var texto = textArea.value;
        agregarMensaje(texto);
        textArea.value = "";
        boton.disabled = true;
        contar.textContent = "140";
        textArea.style.height = "50px";
    });
    
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
    
    function bigImg(){
        muneco.style.height = "300px";
        muneco.style.width = "300px";
    }
    function normalImg() {
        muneco.style.height = "200px";
        muneco.style.width = "200px";
    }

    function pintar(event) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var x = event.clientX - 240;
        var y = event.clientY - 150;
        if (pintura) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, grosor, grosor1);
        } else if (borrado) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, grosor, grosor1);
        }
    }

    function activar() {
        pintura = true;
    }

    function desactivar(desactivar) {
        pintura = false;
    }

    function borrar() {
        pintura = false;
        borrado = true;
        color = "#fff";
    }

    function pencil() {
        canvas.style.cursor = "pointer";
        colores.value;
        colores.removeAttribute("disabled");
        pintura = true;
        borrado = false;
    }

    function descargarimg() {
        var imagen = canvas.toDataURL("image/png");
        location.href = imagen;
    }

    function agregarMensaje(texto) {
        var nuevoItem = document.createElement("div");
        var hora = document.createElement("div");
        var fechaHora = new Date();
        var horas = fechaHora.getHours();
        var minutos = fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();

        if (horas < 10) {
            horas = "0" + horas;
        }

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        hora.textContent = horas + ":" + minutos + ":" + segundos;

        nuevoItem.classList.add("texto");
        hora.classList.add("hora");
        nuevoItem.innerHTML = texto;

        var lista = document.getElementById("comentario");
        lista.insertBefore(hora, comentario.childNodes[0]);
        lista.insertBefore(nuevoItem, comentario.childNodes[0]);
        document.getElementById("texto").value = "";
    }

    textArea.addEventListener("keyup", function () {
        var longitud = 140;
        var caracter = textArea.value.length;
        contar.innerText = longitud - caracter;
        textArea.style.height = "10px";
        textArea.style.height = (25 + textArea.scrollHeight) + "px";

        if (parseInt(contar.innerText) <= 0) {
            boton.disabled = true;
        } else {
            boton.disabled = false;
        }

        if (parseInt(contar.innerText) <= 20) {
            contar.style.color = "#B80D57";
        } else {
            contar.style.color = "#000000";
        }

        if (parseInt(contar.innerText) <= 10) {
            contar.style.color = "#986EAD";
        }
    });
    
});

