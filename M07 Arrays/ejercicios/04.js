function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var indiceRandom = Math.floor(Math.random() * array.length);
  return array[indiceRandom];
}

console.log(obtenerElementoAleatorio([1, 2, 3]))
module.exports = obtenerElementoAleatorio;
