function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (20 < num && num < 50)
  {
    return true;
  } else return false;
}
console.log(estaEnRango(9));
module.exports = estaEnRango;
