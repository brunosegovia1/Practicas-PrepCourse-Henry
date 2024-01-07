function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var prom = 0;
  var cont = 0;
  for (i=0; i<resultadosTest.length; i++)
  {
    prom += resultadosTest[i];
    cont++;
  }
  return (prom/cont);
}
console.log(promedioResultadosTest([3,4,5,6,7]));
module.exports = promedioResultadosTest;
