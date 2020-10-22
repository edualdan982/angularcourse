//funcion anomina no invicada
(function () {
  const niFuncion = function(a: string){
    return a;
  }
  const miFuncioF = (a: string) => a.toUpperCase();

  const sumarN = function( a: number, b: number){
    return a + b;
  }
  const sumarF = (a: number, b: number) => a+b;

  console.log(sumarN(4,5));
  console.log(sumarF(4,5));

  const hulk = {
    nombre: 'Hulk',
    smash() {
      setTimeout( () => {
        console.log(`${this.nombre} smash!!!!`);
      }, 1000);
    }
  }
  hulk.smash();
})();
