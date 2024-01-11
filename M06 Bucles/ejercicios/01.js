function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a < 0 && a === b)
  {
    return true;
  } else return false;
}
console.log(esIgualYNegativo(-7, 8));
module.exports = esIgualYNegativo;
