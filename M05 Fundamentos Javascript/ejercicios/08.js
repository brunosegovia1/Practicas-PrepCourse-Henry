function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  if (numero % 1 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log (esNumeroEntero(2));

module.exports = esNumeroEntero;