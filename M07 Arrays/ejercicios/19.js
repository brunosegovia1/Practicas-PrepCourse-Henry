function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var arr = [num];
  var acum=num;
  var iteraciones = 0;
  for (let i = 0; i<9; i++)
  {
    iteraciones++;
    if (5 === iteraciones)
    {
      arr.push(acum);
      continue;
    }
    else
    {
      acum+=2;
    }
    arr.push(acum);

  }
  return arr;
}
console.log(continueStatement(-1));


module.exports = continueStatement;
