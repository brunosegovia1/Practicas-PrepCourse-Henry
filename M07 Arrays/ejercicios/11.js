function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicados = [];
  for (i=0; i<array.length; i++)
  {
    multiplicados.push(array[i] * i);
  }
  return multiplicados;
}
console.log(multiplicarElementosPorIndice([7, 4, 5, 2]))
module.exports = multiplicarElementosPorIndice;
