function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var arrFecha = fechaNacimiento.split('/');
  var arrInt = [];

  for (let i = 0; i < arrFecha.length; i++)
  {
    arrInt.push(parseInt(arrFecha[i]));
  }

  // Existe un objeto de tipo Date que representa la fecha actual
  var fechaActual = new Date();

  // Y a su vez existe un método que te permite obtener el año actual, Ja!
  var añoActual = fechaActual.getFullYear();

  var mayor = function (){
    return añoActual - 18 > arrInt[2] - 18;
  }

  return mayor();
}
console.log(esMayorDeEdad('12/01/2006s'));
module.exports = esMayorDeEdad;