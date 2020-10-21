//funcion anomina no invicada
(function () {

  function getEdad(){
    return 100 + 100 + 300;
  }
  
  const nombre = "Edual";
  const apellido = "Sarmiento";
  const edad = 22;
  //Edual Sarmiento (Edad: 33)
  //const salida = nombre +" "+ apellido +" ("+edad+")";
    const salida = `${ nombre } \n${ apellido } \n( ${ getEdad() } )`;
  console.log(salida);
})();