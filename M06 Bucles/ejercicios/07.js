function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if (a%2 === 0 && a%3 === 0)
  {
    return true;
  }else return false;
}
console.log(esParYDivisiblePorTres(6));
module.exports = esParYDivisiblePorTres;