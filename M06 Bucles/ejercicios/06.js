function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num.length === 3)
  {
    return true;
  }else return false;
}
console.log(tieneTresDigitos(89));
module.exports = tieneTresDigitos;
