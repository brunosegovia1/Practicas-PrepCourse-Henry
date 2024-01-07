function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var max = 0;
  cont=0;
  for (i=0; i<array.length; i++)
  {
    if (array[i]>max)
    {
      max = array[i];
      cont = i;
    }
  }
  return ('El índice del número más grande en el array es ' + cont);

}
console.log(encontrarIndiceMayor([10, 2, 4,36, 5, 18, 6, 8, 0]));
module.exports = encontrarIndiceMayor;
