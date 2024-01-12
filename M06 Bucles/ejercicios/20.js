function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  var suma = 0;
  for (let i=1; i<n+1; i++)
  {
    suma += i;
    if (suma >100)
    {
      break;
    }
  }
  return suma;
}
console.log(sumarHastaNConBreak(5));
module.exports = sumarHastaNConBreak;