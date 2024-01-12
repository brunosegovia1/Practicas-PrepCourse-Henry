function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:'
  var cont = 0;
  var acum = num;
  do
  {
    acum += 5;
    cont ++;
  } while (cont < 8);

  return acum;
}
console.log(doWhile(9));
module.exports = doWhile;