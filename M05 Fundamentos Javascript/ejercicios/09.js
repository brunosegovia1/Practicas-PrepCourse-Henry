valor = null
function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (valor === null || valor === undefined)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(esNuloOIndefinido(valor))
module.exports = esNuloOIndefinido;