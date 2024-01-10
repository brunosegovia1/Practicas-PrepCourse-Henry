function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  return  callback(string);
}
var cadena = 'Hola.';

function cb (cadena)
{
  return cadena = 'Hola, buenos días.'
}

console.log(cambiarCadena(cadena, cb));

module.exports = cambiarCadena;
