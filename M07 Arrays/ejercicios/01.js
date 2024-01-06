function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  for (let i=0; i<array.length; i++)
  {
    var e = 0;
    var comodin;
    while (array[e] < array[e+1])
    {
      comodin = array[e];
      array[e] = array[e+1];
      array[e+1] = comodin;
      e++;
    }
  }

  console.log(array);
}
invertirArray([1, 2, 3, 4, 5]);
  
module.exports = invertirArray;
