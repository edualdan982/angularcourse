"use strict";
//funcion anomina no invicada
(function () {
    var niFuncion = function (a) {
        return a;
    };
    var miFuncioF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(4, 5));
    console.log(sumarF(4, 5));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
