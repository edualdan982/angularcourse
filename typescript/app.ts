//funcion anomina no invicada
( () => {
  const avenger = {
    nombre: 'Steve',
    clave: 'Capitan América',
    poder: 'Droga'
  }
  //No importa el orden
  const { nombre, clave, poder } = avenger;
  console.log( 'Mediante acceso al objeto.');
  console.log( avenger.nombre );
  console.log( avenger.clave );
  console.log( avenger.poder );
  
  console.log('Mediante destruracion del objeto.');
  console.log( nombre );
  console.log( clave );
  console.log( poder );

  const extraer = ({ nombre, poder}: any ) => {
    //const { nombre, poder } = avenger;
    console.log( nombre );
    console.log( poder );
  }
  //extraer(avenger);

  const avengers: string [] = ['Thor', 'Iron Man', 'Spiderman'];
  console.log( avengers[0] );
  console.log( avengers[1] );
  console.log( avengers[2] );

  console.log('Destruraciion de  Arreglos');
  
  const [ loki, hombre, araña  ] = avengers;
  // console.log( loki );
  // console.log( hombre );
  console.log( araña );
  const extraerArr = ([ loki, hombre]: any) => {
    //const { nombre, poder } = avenger;
    console.log(loki);
    console.log(hombre);
  };
  extraerArr(avengers);
})();