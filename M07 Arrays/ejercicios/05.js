function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i=0; i<array.length; i++)
  {
    var longArray = array[i].split('');
    if (longArray.length > 5)
    {
      return array[i];
    }
  }
}
console.log(obtenerPrimerStringLargo(['Loco', 'Quesadilla', 'Paquito']));
module.exports = obtenerPrimerStringLargo;
