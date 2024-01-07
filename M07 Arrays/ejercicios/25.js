function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray(['Lara', 'Manuel', 'Castor'], 'Luis'));
module.exports = agregarItemAlFinalDelArray;
