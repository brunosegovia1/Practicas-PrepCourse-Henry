function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra.length > 1 || !['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase()))
  {
    return "¡¡¡¡Dato insurrecto!!!!";
  } else return "Es vocal";


}
console.log(esVocal('y'));
module.exports = esVocal;
