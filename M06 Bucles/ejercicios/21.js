function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let i=2;
  while (Math.pow(2, i) !== numero && i<numero)
  {
    i+= 1;
  }
  if (Math.pow(2, i) === numero)
  {
    return true;
  }else return false;
}
console.log(esPotenciaDeDos(32));
module.exports = esPotenciaDeDos;
