function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = [];
  for (i=0; i<array.length; i++)
  {
    if (array[i]%2==0)
    {
      pares.push(array[i]);
    }
  }
  return pares;
}
console.log(filtrarNumerosPares([1,2,3,4,5,6]));
module.exports = filtrarNumerosPares;
