"use strict";
//funcion anomina no invicada
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = "Edual";
    var apellido = "Sarmiento";
    var edad = 22;
    //Edual Sarmiento (Edad: 33)
    //const salida = nombre +" "+ apellido +" ("+edad+")";
    var salida = nombre + " \n" + apellido + " \n( " + getEdad() + " )";
    console.log(salida);
})();
