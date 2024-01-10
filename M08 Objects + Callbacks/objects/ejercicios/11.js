function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  console.log(objeto[metodo]());
}

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs'],
  disponibilidad: function (){
      return 'Los horarios de musculación son ' + this.musculacion;
  }
};

invocarMetodo(gimnasio, 'disponibilidad');


module.exports = invocarMetodo;
