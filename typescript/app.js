"use strict";
//funcion anomina no invicada
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    };
    //No importa el orden
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log('Mediante acceso al objeto.');
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    console.log('Mediante destruracion del objeto.');
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        //const { nombre, poder } = avenger;
        console.log(nombre);
        console.log(poder);
    };
    //extraer(avenger);
    var avengers = ['Thor', 'Iron Man', 'Spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    console.log('Destruraciion de  Arreglos');
    var loki = avengers[0], hombre = avengers[1], araña = avengers[2];
    // console.log( loki );
    // console.log( hombre );
    console.log(araña);
    var extraerArr = function (_a) {
        var loki = _a[0], hombre = _a[1];
        //const { nombre, poder } = avenger;
        console.log(loki);
        console.log(hombre);
    };
    extraerArr(avengers);
})();
