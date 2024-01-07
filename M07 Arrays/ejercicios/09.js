function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayDiez = [];
  for (i=0; i<array.length; i++)
  {
    if (array[i] > 10)
    {
      mayDiez.push(array[i]);
    }
  }
  return mayDiez;
}
console.log(contarElementosMayoresA10([20, 1, 54, 4]))
module.exports = contarElementosMayoresA10;
