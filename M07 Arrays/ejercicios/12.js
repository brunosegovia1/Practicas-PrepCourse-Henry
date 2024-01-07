function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma = 0;
  for (i=0; i<arrayOfNums.length; i++)
  {
    suma+= arrayOfNums[i];
  }
  return suma;
}
console.log(agregarNumeros([7, 8, 4]))
module.exports = agregarNumeros;
