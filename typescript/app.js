"use strict";
//funcion anomina no invicada
(() => {
    const enviarMission = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión.`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} al cuartel.`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60,
    };
    enviarMission(wolverine);
    regresarAlCuartel(wolverine);
})();
