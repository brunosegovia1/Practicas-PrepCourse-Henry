function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var arr = [num];
  var acum=num;
  var iteraciones = 0;
  var interr = false;
  for (let i = 0; i<9; i++)
  {
    acum+=2;
    iteraciones++;
    arr.push(acum);
    if (acum === iteraciones)
    {
      interr = true;
      if (interr == true)
      {
        return "Se interrumpió la ejecución porque el índice " + iteraciones + " es igual al valor de la suma (" + acum + ").";
      }
      break;
    }
    
  }
  return arr;
}
console.log(breakStatement(-1));

module.exports = breakStatement;
