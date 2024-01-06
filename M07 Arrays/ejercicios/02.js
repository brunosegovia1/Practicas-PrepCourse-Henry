function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  for (let i=0; i<array.length; i++)
  {
    for (let e=0; e<array.length; e++)
    {
      if (array[e] > array[e+1])
      {
        comodin = array[e];
        array[e] = array[e+1];
        array[e+1] = comodin;
      }
    }
  }
  console.log(array);
}

ordenarArray([3, 5, 4, 1, 2])

module.exports = ordenarArray;
