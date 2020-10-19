//funcion anomina no invocada
(function() {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();